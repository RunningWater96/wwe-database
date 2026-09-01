import { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import { WRESTLER_IMAGES } from '../data';
import { getWrestlerInitials, getPlaceholderColor, stripDiacritics } from '../utils/wrestlerHelpers';

// Simple fuzzy match: allows 1 typo for queries ≥4 chars
function fuzzyMatch(haystack, needle) {
  if (haystack.includes(needle)) return true;
  if (needle.length < 4) return false;
  // Allow 1 character difference (edit distance 1 approximation)
  for (let i = 0; i < needle.length; i++) {
    const partial = needle.slice(0, i) + needle.slice(i + 1);
    if (haystack.includes(partial)) return true;
  }
  return false;
}

const SEARCH_HISTORY_KEY = 'wwe-search-history';
const MAX_HISTORY = 8;

function loadSearchHistory() {
  try {
    return JSON.parse(localStorage.getItem(SEARCH_HISTORY_KEY)) || [];
  } catch {
    return [];
  }
}

function saveSearchHistory(history) {
  try {
    localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(history.slice(0, MAX_HISTORY)));
  } catch {
    // quota exceeded
  }
}

export default function Header({
  search,
  setSearch,
  searchInputRef,
  favorites,
  favoritesOnly,
  setFavoritesOnly,
  wrestlers,
  onSelectWrestler,
}) {
  const favCount = favorites ? Object.keys(favorites).length : 0;
  const [dropdownDismissed, setDropdownDismissed] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [prevSugLen, setPrevSugLen] = useState(0);
  const [searchHistory, setSearchHistory] = useState(loadSearchHistory);
  const [showHistory, setShowHistory] = useState(false);
  const dropdownRef = useRef(null);

  const addToHistory = useCallback(
    (term) => {
      if (!term || term.length < 2) return;
      const cleaned = term.trim();
      const updated = [cleaned, ...searchHistory.filter((h) => h !== cleaned)].slice(
        0,
        MAX_HISTORY,
      );
      setSearchHistory(updated);
      saveSearchHistory(updated);
    },
    [searchHistory],
  );

  const removeFromHistory = useCallback(
    (term) => {
      const updated = searchHistory.filter((h) => h !== term);
      setSearchHistory(updated);
      saveSearchHistory(updated);
    },
    [searchHistory],
  );

  const suggestions = useMemo(() => {
    if (!search || search.length < 2) return [];
    const q = stripDiacritics(search.toLowerCase());
    const results = [];

    // Wrestlers (up to 8) — with fuzzy matching fallback
    if (wrestlers) {
      let wCount = 0;
      const fuzzyResults = [];
      for (const w of wrestlers) {
        if (wCount >= 8) break;
        const nameLower = stripDiacritics(w.name.toLowerCase());
        const realLower = w.realName ? stripDiacritics(w.realName.toLowerCase()) : '';
        const exactMatch =
          nameLower.includes(q) ||
          realLower.includes(q) ||
          (w.alternateNames || []).some((n) => stripDiacritics(n.toLowerCase()).includes(q));
        if (exactMatch) {
          results.push({ type: 'wrestler', wrestler: w });
          wCount++;
        } else if (fuzzyResults.length < 3) {
          const fuzzy =
            fuzzyMatch(nameLower, q) ||
            fuzzyMatch(realLower, q) ||
            (w.alternateNames || []).some((n) => fuzzyMatch(stripDiacritics(n.toLowerCase()), q));
          if (fuzzy) {
            fuzzyResults.push({ type: 'wrestler', wrestler: w, fuzzy: true });
          }
        }
      }
      // Add fuzzy results only if we don't have enough exact matches
      if (wCount < 3) {
        results.push(...fuzzyResults);
      }
    }

    return results;
  }, [search, wrestlers]);
  // Reset dismissed state when suggestions change (new search results)
  if (suggestions.length !== prevSugLen) {
    setPrevSugLen(suggestions.length);
    if (suggestions.length > 0 && dropdownDismissed) {
      setDropdownDismissed(false);
    }
    setActiveIndex(-1);
  }
  const showSuggestions = !dropdownDismissed && suggestions.length > 0;

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownDismissed(true);
        setShowHistory(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const selectItem = useCallback(
    (item) => {
      setDropdownDismissed(true);
      setShowHistory(false);
      if (item.type === 'history') {
        setSearch(item.term);
        return;
      }
      // Save search term to history
      if (search.trim().length >= 2) addToHistory(search.trim());
      setSearch('');
      onSelectWrestler?.(item.wrestler.id);
    },
    [setSearch, onSelectWrestler, search, addToHistory],
  );

  const handleKeyDown = (e) => {
    // Handle keyboard nav in search history dropdown
    if (showHistory && !search && searchHistory.length > 0) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex((i) => (i < searchHistory.length - 1 ? i + 1 : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex((i) => (i > 0 ? i - 1 : searchHistory.length - 1));
      } else if (e.key === 'Enter' && activeIndex >= 0) {
        e.preventDefault();
        setSearch(searchHistory[activeIndex]);
        setShowHistory(false);
      } else if (e.key === 'Escape') {
        setShowHistory(false);
      }
      return;
    }
    if (!showSuggestions || suggestions.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => (i < suggestions.length - 1 ? i + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => (i > 0 ? i - 1 : suggestions.length - 1));
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      e.preventDefault();
      selectItem(suggestions[activeIndex]);
    } else if (e.key === 'Escape') {
      setDropdownDismissed(true);
    }
  };

  return (
    <div
      style={{
        background: 'linear-gradient(180deg, #111 0%, #0a0a0a 100%)',
        padding: '14px 20px 12px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 10,
      }}
    >
      <div>
        <div
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: 32,
            fontWeight: 700,
            letterSpacing: 3,
            color: '#FFD700',
            textTransform: 'uppercase',
            lineHeight: 1,
          }}
        >
          🏆 WWE Database
        </div>
        <div
          style={{
            fontFamily: "'Crimson Pro', serif",
            fontSize: 11,
            color: '#666',
            letterSpacing: 1,
            marginTop: 2,
          }}
        >
          Created by Brooke Showers
        </div>
      </div>
      <div style={{ display: 'flex', gap: 7, alignItems: 'center', flexWrap: 'wrap' }}>
        <div ref={dropdownRef} role="search" aria-label="Search wrestlers" style={{ position: 'relative', display: 'inline-block' }}>
          <input
            ref={searchInputRef}
            className="search-input"
            placeholder="Search wrestlers..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              if (e.target.value) setShowHistory(false);
            }}
            onKeyDown={handleKeyDown}
            onFocus={() => {
              if (suggestions.length > 0) setDropdownDismissed(false);
              else if (!search && searchHistory.length > 0) setShowHistory(true);
            }}
            onBlur={() => setTimeout(() => setShowHistory(false), 200)}
            style={{ paddingRight: search ? 32 : 16 }}
            aria-label="Search wrestlers, titles, characters"
            aria-expanded={showSuggestions}
            aria-autocomplete="list"
            aria-controls="search-listbox"
            aria-activedescendant={showSuggestions && activeIndex >= 0 ? `search-option-${activeIndex}` : undefined}
            role="combobox"
            autoComplete="off"
          />
          {search && (
            <button
              onClick={() => {
                setSearch('');
                setDropdownDismissed(true);
              }}
              aria-label="Clear search"
              style={{
                position: 'absolute',
                right: 6,
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                color: '#888',
                fontSize: 16,
                cursor: 'pointer',
                padding: '2px 6px',
                lineHeight: 1,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              ✕
            </button>
          )}
          {/* Single-char hint */}
          {search.length === 1 && (
            <div
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                marginTop: 4,
                background: '#1a1a1a',
                border: '1px solid #333',
                borderRadius: 6,
                padding: '8px 12px',
                zIndex: 1000,
                fontFamily: "'Crimson Pro', serif",
                fontSize: 12,
                color: '#666',
              }}
            >
              Type 2+ characters to search
            </div>
          )}
          {/* Autocomplete dropdown */}
          {showSuggestions && suggestions.length > 0 && (
            <div
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                marginTop: 4,
                background: '#1a1a1a',
                border: '1px solid #333',
                borderRadius: 6,
                boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                zIndex: 1000,
                maxHeight: 400,
                overflowY: 'auto',
                minWidth: 300,
              }}
              id="search-listbox"
              role="listbox"
              aria-label="Search suggestions"
            >
              {suggestions.map((item, i) => {
                const w = item.wrestler;
                return (
                  <div
                    key={`w-${w.id}`}
                    id={`search-option-${i}`}
                    role="option"
                    aria-selected={i === activeIndex}
                    onClick={() => selectItem(item)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      padding: '8px 12px',
                      cursor: 'pointer',
                      background: i === activeIndex ? '#2a2a2a' : 'transparent',
                      borderBottom: '1px solid #222',
                      transition: 'background 0.1s',
                    }}
                    onMouseEnter={() => setActiveIndex(i)}
                  >
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: '50%',
                        overflow: 'hidden',
                        flexShrink: 0,
                        background: getPlaceholderColor(w.id),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {WRESTLER_IMAGES[w.id] ? (
                        <img
                          src={WRESTLER_IMAGES[w.id]}
                          alt={w.name}
                          loading="lazy"
                          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                        />
                      ) : (
                        <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 9, fontWeight: 700, color: '#e8e0d0' }}>
                          {getWrestlerInitials(w.name)}
                        </span>
                      )}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 14, color: i === activeIndex ? 'var(--gold)' : 'var(--text-primary)', letterSpacing: 0.5, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {w.name}
                      </div>
                      {w.realName && !w.realName.startsWith('Already') && (
                        <div style={{ fontFamily: "'Crimson Pro', serif", fontSize: 11, color: '#666', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {w.realName}
                        </div>
                      )}
                    </div>
                    <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 9, color: '#555', letterSpacing: 1 }}>WRESTLER</span>
                  </div>
                );
              })}
            </div>
          )}
          {/* Search history dropdown — shown when input focused but empty */}
          {showHistory && !search && searchHistory.length > 0 && !showSuggestions && (
            <div
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                marginTop: 4,
                background: '#1a1a1a',
                border: '1px solid #333',
                borderRadius: 6,
                boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                zIndex: 1000,
                maxHeight: 300,
                overflowY: 'auto',
                minWidth: 300,
              }}
            >
              <div
                style={{
                  padding: '6px 12px',
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: 10,
                  color: '#555',
                  letterSpacing: 1,
                  textTransform: 'uppercase',
                  borderBottom: '1px solid #222',
                }}
              >
                Recent Searches
              </div>
              {searchHistory.map((term) => (
                <div
                  key={term}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '7px 12px',
                    cursor: 'pointer',
                    borderBottom: '1px solid #222',
                    transition: 'background 0.1s',
                  }}
                  onClick={() => selectItem({ type: 'history', term })}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#2a2a2a')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                >
                  <span style={{ color: '#555', fontSize: 14 }}>🕐</span>
                  <span
                    style={{
                      flex: 1,
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: 13,
                      color: '#aaa',
                      letterSpacing: 0.5,
                    }}
                  >
                    {term}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFromHistory(term);
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#555',
                      fontSize: 12,
                      cursor: 'pointer',
                      padding: '0 4px',
                    }}
                    aria-label={`Remove ${term} from search history`}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        <button
          className={`fav-toggle ${favoritesOnly ? 'active' : ''}`}
          onClick={() => setFavoritesOnly(!favoritesOnly)}
          aria-label={`Filter favorites${favCount > 0 ? `, ${favCount} saved` : ""}`}
          aria-pressed={favoritesOnly}
        >
          Favorites{favCount > 0 ? <span style={{ color: '#FFD700', marginLeft: 4 }}>({favCount})</span> : ''}
        </button>
      </div>
    </div>
  );
}
