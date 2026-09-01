import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { WRESTLERS_MERGED, ERAS, OTHERS } from './data';
import { classifyEntry, stripDiacritics } from './utils/wrestlerHelpers';
import { DEFAULT_FILTERS, matchesAdvancedFilters, countActiveFilters } from './utils/filterHelpers';
import { slugify, buildSlugMap, parseHash, buildHash } from './utils/hashRouter';
import useKeyboardShortcuts from './utils/useKeyboardShortcuts';
import Header from './components/Header';
import EraFilter from './components/EraFilter';
import AdvancedFilters from './components/AdvancedFilters';
import WrestlerList from './components/WrestlerList';
import DetailPanel from './components/DetailPanel';
import ErrorBoundary from './components/ErrorBoundary';
import './styles/WWEDatabase.css';

// Pre-compute slug map and initial hash state (module-level, no React state needed)
const SLUG_MAP = buildSlugMap(WRESTLERS_MERGED);
const INITIAL_HASH = parseHash(window.location.hash, SLUG_MAP);

export default function WWEDatabase() {
  const [selectedEra, setSelectedEra] = useState('all');
  const [search, setSearch] = useState('');
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('wwe-favorites');
      return saved ? JSON.parse(saved) : {};
    } catch { return {}; }
  });
  const [notes, setNotes] = useState(() => {
    try {
      const saved = localStorage.getItem('wwe-notes');
      return saved ? JSON.parse(saved) : {};
    } catch { return {}; }
  });
  const [editingNote, setEditingNote] = useState(false);
  const [noteText, setNoteText] = useState('');
  const [showImageModal, setShowImageModal] = useState(false);
  const [advancedFilters, setAdvancedFilters] = useState(DEFAULT_FILTERS);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [overlayWrestlerId, setOverlayWrestlerId] = useState(INITIAL_HASH.wrestlerId || null);
  const [restoreSectionIndex, setRestoreSectionIndex] = useState(null);
  const sortMode = 'az';
  const [recentlyViewed, setRecentlyViewed] = useState(() => {
    try {
      const saved = localStorage.getItem('wwe-recently-viewed');
      return saved ? JSON.parse(saved).slice(0, 5) : [];
    } catch { return []; }
  });
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [sectionCollapsed, setSectionCollapsed] = useState({
    individuals: false,
    tagTeams: false,
    factions: false,
  });
  const listScrollRef = useRef(0);
  const navHistoryRef = useRef([]);
  const [canGoBack, setCanGoBack] = useState(false);
  const wikiSectionRef = useRef(0);
  const searchInputRef = useRef(null);
  const contentRef = useRef(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Deep linking: slug maps (use module-level SLUG_MAP)
  const slugMap = SLUG_MAP;
  const idToSlug = useMemo(() => {
    const m = new Map();
    WRESTLERS_MERGED.forEach((w) => m.set(w.id, slugify(w.name)));
    return m;
  }, []);

  const handleNavigateBack = useCallback(() => {
    const history = navHistoryRef.current;
    if (history.length > 0) {
      const prev = history.pop();
      setCanGoBack(history.length > 0);
      setEditingNote(false);
      setShowImageModal(false);
      if (prev.id) {
        setRestoreSectionIndex(prev.sectionIndex ?? 0);
        setOverlayWrestlerId(prev.id);
      } else {
        setOverlayWrestlerId(null);
      }
    }
  }, []);

  // Deep linking: sync hash when the selected wrestler changes
  useEffect(() => {
    const wrestlerSlug = overlayWrestlerId ? idToSlug.get(overlayWrestlerId) : null;
    const newHash = buildHash({ wrestlerSlug });
    if (window.location.hash !== newHash) {
      window.history.replaceState(null, '', newHash || window.location.pathname);
    }
  }, [overlayWrestlerId, idToSlug]);

  // Deep linking: handle browser back/forward
  useEffect(() => {
    const handler = () => {
      const { wrestlerId } = parseHash(window.location.hash, slugMap);
      setOverlayWrestlerId(wrestlerId);
    };
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, [slugMap]);

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 150);
    return () => clearTimeout(timer);
  }, [search]);

  const safeSave = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      if (err?.name === 'QuotaExceededError' || err?.code === 22) {
        console.warn('localStorage quota exceeded — data not saved');
      }
    }
  };

  const saveNotes = (newNotes) => {
    setNotes(newNotes);
    safeSave('wwe-notes', newNotes);
  };

  const toggleFavorite = useCallback(async (e, id) => {
    e.stopPropagation();
    setFavorites((prev) => {
      const newFavs = { ...prev };
      if (newFavs[id]) delete newFavs[id];
      else newFavs[id] = true;
      safeSave('wwe-favorites', newFavs);
      return newFavs;
    });
  }, []);

  const startEditNote = (e, id) => {
    e.stopPropagation();
    setNoteText(notes[id] || '');
    setEditingNote(id);
  };

  const saveNote = async () => {
    const newNotes = { ...notes };
    if (noteText.trim()) newNotes[editingNote] = noteText.trim();
    else delete newNotes[editingNote];
    await saveNotes(newNotes);
    setEditingNote(false);
    setNoteText('');
  };

  const addToRecentlyViewed = useCallback((id) => {
    setRecentlyViewed((prev) => {
      const updated = [id, ...prev.filter((x) => x !== id)].slice(0, 5);
      safeSave('wwe-recently-viewed', updated);
      return updated;
    });
  }, []);

  const { allIndividuals, allTagTeams, allFactions, allOthers, allBrowsable } = useMemo(() => {
    const individuals = [];
    const tagTeams = [];
    const factions = [];
    const browsable = [];
    WRESTLERS_MERGED.forEach((w) => {
      const type = classifyEntry(w);
      if (type === 'individual') individuals.push(w);
      else if (type === 'tagTeam') tagTeams.push(w);
      else if (type === 'faction') factions.push(w);
      if (type !== 'duplicate') browsable.push(w);
    });
    const others = OTHERS.map((o) => ({
      ...o,
      eras: [],
      championships: [],
      totalTitleReigns: 0,
      allies: o.associations || [],
      rivals: [],
      tagTeams: [],
      factions: [],
      injuries: [],
      alternateNames: [],
      gender: 'male',
      currentBrand: null,
      brandHistory: [],
      isOther: true,
    }));
    return { allIndividuals: individuals, allTagTeams: tagTeams, allFactions: factions, allOthers: others, allBrowsable: [...browsable, ...others] };
  }, []);
  const totalCount = allIndividuals.length;
  const totalTagTeamCount = allTagTeams.length;
  const totalFactionCount = allFactions.length;
  const totalOthersCount = allOthers.length;

  const { filteredIndividuals, filteredTagTeams, filteredFactions, filteredOthers } = useMemo(() => {
    const q = stripDiacritics(debouncedSearch.trim());
    const searchRe = q
      ? new RegExp('\\b' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i')
      : null;

    const testSearch = (str) => searchRe.test(stripDiacritics(str));

    const hasDirectNameMatch = searchRe
      ? allBrowsable.some(
          (w) =>
            testSearch(w.name) ||
            testSearch(w.realName) ||
            (w.alternateNames && w.alternateNames.some((n) => testSearch(n))),
        )
      : false;

    const applyFilters = (list) => {
      const filtered = list.filter((w) => {
        let matchesSearch;
        if (!searchRe) {
          matchesSearch = true;
        } else {
          matchesSearch =
            testSearch(w.name) ||
            testSearch(w.realName) ||
            (w.alternateNames && w.alternateNames.some((n) => testSearch(n))) ||
            (!hasDirectNameMatch &&
              w.championships &&
              w.championships.some((c) => c.title && testSearch(c.title))) ||
            (!hasDirectNameMatch &&
              w.eras &&
              w.eras.some((e) => {
                if (!e.character) return false;
                const charName = e.character.split(' — ')[0];
                return testSearch(charName);
              }));
        }
        const matchesEra = selectedEra === 'all' || w.eras.some((e) => e.era === selectedEra);
        const matchesFav = !favoritesOnly || favorites[w.id];
        const matchesAdvanced = matchesAdvancedFilters(w, advancedFilters);
        return matchesSearch && matchesEra && matchesFav && matchesAdvanced;
      });
      const eraOrder = ERAS.map((e) => e.id);
      return [...filtered].sort((a, b) => {
        switch (sortMode) {
          case 'championships': return (b.totalTitleReigns || 0) - (a.totalTitleReigns || 0) || a.name.localeCompare(b.name);
          case 'hof': return (a.hallOfFame ? 0 : 1) - (b.hallOfFame ? 0 : 1) || a.name.localeCompare(b.name);
          case 'era': {
            const aIdx = Math.min(...(a.eras || []).map((e) => eraOrder.indexOf(e.era)).filter((i) => i >= 0), 999);
            const bIdx = Math.min(...(b.eras || []).map((e) => eraOrder.indexOf(e.era)).filter((i) => i >= 0), 999);
            return aIdx - bIdx || a.name.localeCompare(b.name);
          }
          default: return a.name.localeCompare(b.name);
        }
      });
    };
    const filterOthers = (list) => {
      if (!searchRe && !favoritesOnly) return [...list].sort((a, b) => a.name.localeCompare(b.name));
      return list.filter((o) => {
        if (favoritesOnly && !favorites[o.id]) return false;
        if (!searchRe) return true;
        return searchRe.test(o.name) || searchRe.test(o.realName) ||
          searchRe.test(o.role) || (o.notableFor && searchRe.test(o.notableFor));
      }).sort((a, b) => a.name.localeCompare(b.name));
    };
    return {
      filteredIndividuals: applyFilters(allIndividuals),
      filteredTagTeams: applyFilters(allTagTeams),
      filteredFactions: applyFilters(allFactions),
      filteredOthers: filterOthers(allOthers),
    };
  }, [debouncedSearch, selectedEra, favoritesOnly, favorites, advancedFilters, sortMode, allIndividuals, allTagTeams, allFactions, allOthers, allBrowsable]);

  const overlayWrestler = overlayWrestlerId
    ? (WRESTLERS_MERGED.find((w) => w.id === overlayWrestlerId) || allOthers.find((o) => o.id === overlayWrestlerId))
    : null;
  const isOverlayFav = overlayWrestler && favorites[overlayWrestler.id];

  const handleSelectWrestler = useCallback((id) => {
    setOverlayWrestlerId((prev) => {
      const newId = prev === id ? null : id;
      if (newId) addToRecentlyViewed(newId);
      return newId;
    });
    setEditingNote(false);
    setShowImageModal(false);
    navHistoryRef.current = [];
    setCanGoBack(false);
  }, [addToRecentlyViewed]);

  const handleNavigateToWrestler = (name) => {
    const lName = name.toLowerCase();
    const baseName = lName.replace(/\s*\(.*\)$/, '').trim();
    const parenMatch = lName.match(/\(([^)]+)\)/);
    const parenNames = parenMatch
      ? parenMatch[1].split(',').map((n) => n.trim())
      : [];

    const nonDupes = WRESTLERS_MERGED.filter((w) => classifyEntry(w) !== 'duplicate');

    let match = nonDupes.find((w) => {
      const wName = w.name.toLowerCase();
      return (wName === lName || wName === baseName) && classifyEntry(w) === 'individual';
    });
    if (!match) {
      match = nonDupes.find((w) => {
        const wName = w.name.toLowerCase();
        return wName === lName || wName === baseName;
      });
    }
    if (!match) {
      match = nonDupes.find((w) => {
        const wReal = w.realName?.toLowerCase();
        const wAlts = w.alternateNames?.map((n) => n.toLowerCase()) || [];
        return [wReal, ...wAlts].filter(Boolean).some((n) => n === lName || n === baseName) &&
          classifyEntry(w) === 'individual';
      });
    }
    if (!match) {
      match = nonDupes.find((w) => {
        const wReal = w.realName?.toLowerCase();
        const wAlts = w.alternateNames?.map((n) => n.toLowerCase()) || [];
        return [wReal, ...wAlts].filter(Boolean).some((n) => n === lName || n === baseName);
      });
    }
    if (!match && parenNames.length > 0) {
      for (const pn of parenNames) {
        match = nonDupes.find((w) => {
          const all = [w.name, w.realName, ...(w.alternateNames || [])].filter(Boolean);
          return all.some((n) => n.toLowerCase() === pn);
        });
        if (match) break;
      }
    }

    if (match) {
      navHistoryRef.current.push({
        id: overlayWrestlerId,
        sectionIndex: wikiSectionRef.current,
      });
      setCanGoBack(true);
      setOverlayWrestlerId(match.id);
      addToRecentlyViewed(match.id);
      setEditingNote(false);
      setShowImageModal(false);
    }
  };

  // Recently viewed wrestler objects
  const recentWrestlers = useMemo(
    () => recentlyViewed.map((id) => WRESTLERS_MERGED.find((w) => w.id === id)).filter(Boolean),
    [recentlyViewed],
  );

  // Auto-expand collapsed sections when searching (render-time state update)
  const [prevSearchForCollapse, setPrevSearchForCollapse] = useState('');
  if (search !== prevSearchForCollapse) {
    setPrevSearchForCollapse(search);
    if (search.trim()) {
      setSectionCollapsed({ individuals: false, tagTeams: false, factions: false });
    }
  }

  // Scroll-to-top: detect scroll in content area (capture phase catches child scrolls)
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const onScroll = (e) => {
      const target = e.target;
      if (target && target.scrollTop !== undefined) {
        setShowScrollTop(target.scrollTop > 400);
      }
    };
    el.addEventListener('scroll', onScroll, true);
    return () => el.removeEventListener('scroll', onScroll, true);
  }, []);

  const scrollToTop = useCallback(() => {
    const el = contentRef.current;
    if (!el) return;
    const findScrolled = (node) => {
      if (node.scrollTop > 0) {
        node.scrollTo({ top: 0, behavior: 'smooth' });
        return true;
      }
      for (const child of node.children) {
        if (findScrolled(child)) return true;
      }
      return false;
    };
    findScrolled(el);
    setShowScrollTop(false);
  }, []);

  // Global keyboard shortcuts (Escape, "/" to search)
  useKeyboardShortcuts({
    onEscape: useCallback(() => {
      if (overlayWrestlerId) {
        setOverlayWrestlerId(null);
        setEditingNote(false);
        setShowImageModal(false);
      }
    }, [overlayWrestlerId]),
    onSearch: useCallback(() => {
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }, []),
  });

  return (
    <ErrorBoundary>
    <div className="app-container">
      <Header
        search={search}
        setSearch={(val) => {
          setSearch(val);
          if (!val) setOverlayWrestlerId(null);
        }}
        searchInputRef={searchInputRef}
        favorites={favorites}
        favoritesOnly={favoritesOnly}
        setFavoritesOnly={setFavoritesOnly}
        wrestlers={allBrowsable}
        onSelectWrestler={handleSelectWrestler}
      />
      <div ref={contentRef} style={{ display: 'flex', flex: 1, overflow: 'hidden', position: 'relative' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <EraFilter selectedEra={selectedEra} setSelectedEra={(era) => { setSelectedEra(era); }} />
          <AdvancedFilters
            advancedFilters={advancedFilters}
            setAdvancedFilters={setAdvancedFilters}
            isOpen={showAdvancedFilters}
            onClose={() => setShowAdvancedFilters(false)}
          />
          {(search || selectedEra !== 'all' || favoritesOnly || countActiveFilters(advancedFilters) > 0) && (
            <div
              style={{
                padding: '5px 20px',
                background: '#111',
                borderBottom: '1px solid #1a1a1a',
                fontFamily: "'Oswald', sans-serif",
                fontSize: 12,
                color: '#888',
                letterSpacing: 1,
                display: 'flex',
                gap: 12,
              }}
            >
              <span>
                <span style={{ color: '#e8e0d0' }}>{filteredIndividuals.length}</span> wrestlers
              </span>
              <span>
                <span style={{ color: '#4a9eff' }}>{filteredTagTeams.length}</span> tag teams
              </span>
              <span>
                <span style={{ color: '#9C27B0' }}>{filteredFactions.length}</span> factions
              </span>
              <span style={{ color: '#555' }}>
                ({filteredIndividuals.length + filteredTagTeams.length + filteredFactions.length} total)
              </span>
            </div>
          )}
          <WrestlerList
            individuals={filteredIndividuals}
            tagTeams={filteredTagTeams}
            factions={filteredFactions}
            others={filteredOthers}
            totalIndividualCount={totalCount}
            totalTagTeamCount={totalTagTeamCount}
            totalFactionCount={totalFactionCount}
            totalOthersCount={totalOthersCount}
            favorites={favorites}
            notes={notes}
            onSelectWrestler={handleSelectWrestler}
            onToggleFavorite={toggleFavorite}
            collapsed={sectionCollapsed}
            setCollapsed={setSectionCollapsed}
            savedScrollTopRef={listScrollRef}
            recentWrestlers={recentWrestlers}
            focusedId={null}
            advancedFilters={advancedFilters}
            showAdvancedFilters={showAdvancedFilters}
            setShowAdvancedFilters={setShowAdvancedFilters}
            onClearFilters={() => { setAdvancedFilters(DEFAULT_FILTERS); setSearch(''); setFavoritesOnly(false); setSelectedEra('all'); }}
          />
        </div>
        {showScrollTop && (
          <button className="scroll-to-top" onClick={scrollToTop} title="Back to top" aria-label="Scroll back to top">
            ▲ Top
          </button>
        )}
      </div>

      {/* Overlay Drawer — wrestler detail panel */}
      {overlayWrestler && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${overlayWrestler.name} details`}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 2000,
            display: 'flex',
          }}
        >
          {/* Backdrop */}
          <div
            aria-label="Close detail panel"
            onClick={() => { setOverlayWrestlerId(null); setEditingNote(false); setShowImageModal(false); }}
            style={{
              flex: 1,
              background: 'rgba(0,0,0,0.6)',
              cursor: 'pointer',
              animation: 'backdropFadeIn 0.2s ease-out',
            }}
          />
          {/* Drawer */}
          <div
            style={{
              width: '50vw',
              maxWidth: '90vw',
              height: '100vh',
              background: '#0d0d0d',
              borderLeft: '1px solid #333',
              boxShadow: '-8px 0 32px rgba(0,0,0,0.5)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              animation: 'drawerSlideIn 0.25s ease-out',
            }}
          >
            {overlayWrestler.isOther ? (
              /* Other (non-wrestler) detail */
              <div style={{ flex: 1, overflowY: 'auto', padding: '20px 24px' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 8 }}>
                  <button
                    onClick={() => { setOverlayWrestlerId(null); setEditingNote(false); setShowImageModal(false); }}
                    className="close-btn"
                  >
                    ×
                  </button>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                  <div style={{
                    width: 64, height: 64, borderRadius: '50%', background: '#27ae60',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 24, fontWeight: 700, color: '#fff' }}>
                      {overlayWrestler.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 26, color: '#FFD700', margin: 0, letterSpacing: 1 }}>
                      {overlayWrestler.name}
                    </h2>
                    {overlayWrestler.realName !== overlayWrestler.name && (
                      <div style={{ fontFamily: "'Crimson Pro', serif", fontSize: 14, color: '#888' }}>{overlayWrestler.realName}</div>
                    )}
                    <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 12, color: '#27ae60', letterSpacing: 1, textTransform: 'uppercase', marginTop: 2 }}>
                      {(overlayWrestler.roles || [overlayWrestler.role]).join(' · ')}
                    </div>
                  </div>
                </div>
                {overlayWrestler.hallOfFame && (
                  <div style={{
                    background: '#1a1400', border: '1px solid #3a2800', borderRadius: 6,
                    padding: '8px 14px', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8,
                  }}>
                    <span style={{ fontSize: 16 }}>&#x1F3C6;</span>
                    <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 13, color: '#FFD700', letterSpacing: 1 }}>
                      HALL OF FAME CLASS OF {overlayWrestler.hallOfFame}
                    </span>
                  </div>
                )}
                {overlayWrestler.deceased && (
                  <div style={{
                    background: '#1a1111', border: '1px solid #3a1111', borderRadius: 6,
                    padding: '8px 14px', marginBottom: 12, fontFamily: "'Crimson Pro', serif", fontSize: 13, color: '#999',
                  }}>
                    Passed away in {overlayWrestler.deceased.year}{overlayWrestler.deceased.details ? ` — ${overlayWrestler.deceased.details}` : ''}
                  </div>
                )}
                <div style={{
                  background: '#111', border: '1px solid #222', borderRadius: 8, padding: 16, marginBottom: 12,
                }}>
                  <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 11, color: '#666', letterSpacing: 2, marginBottom: 6, textTransform: 'uppercase' }}>
                    About
                  </div>
                  <div style={{ fontFamily: "'Crimson Pro', serif", fontSize: 15, color: '#e8e0d0', lineHeight: 1.6 }}>
                    {overlayWrestler.notableFor}
                  </div>
                </div>
                {overlayWrestler.years && (
                  <div style={{
                    background: '#111', border: '1px solid #222', borderRadius: 8, padding: 16, marginBottom: 12,
                  }}>
                    <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 11, color: '#666', letterSpacing: 2, marginBottom: 6, textTransform: 'uppercase' }}>
                      Years Active
                    </div>
                    <div style={{ fontFamily: "'Crimson Pro', serif", fontSize: 15, color: '#e8e0d0' }}>
                      {overlayWrestler.years}
                    </div>
                  </div>
                )}
                {overlayWrestler.associations && overlayWrestler.associations.length > 0 && (
                  <div style={{
                    background: '#111', border: '1px solid #222', borderRadius: 8, padding: 16, marginBottom: 12,
                  }}>
                    <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 11, color: '#666', letterSpacing: 2, marginBottom: 8, textTransform: 'uppercase' }}>
                      Notable Associations
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {overlayWrestler.associations.map((name) => (
                        <span
                          key={name}
                          onClick={() => handleNavigateToWrestler(name)}
                          style={{
                            padding: '4px 10px', borderRadius: 14, background: '#1a1a1a', border: '1px solid #333',
                            fontFamily: "'Oswald', sans-serif", fontSize: 12, color: '#e8e0d0', cursor: 'pointer',
                          }}
                        >
                          {name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <ErrorBoundary featureName="Detail Panel" onReset={() => setOverlayWrestlerId(null)}>
                <DetailPanel
                  wrestler={overlayWrestler}
                  isFav={isOverlayFav}
                  notes={notes}
                  editingNote={editingNote}
                  noteText={noteText}
                  showImageModal={showImageModal}
                  setSelectedWrestler={setOverlayWrestlerId}
                  setEditingNote={setEditingNote}
                  setNoteText={setNoteText}
                  setShowImageModal={setShowImageModal}
                  toggleFavorite={toggleFavorite}
                  startEditNote={startEditNote}
                  saveNote={saveNote}
                  onNavigateToWrestler={handleNavigateToWrestler}
                  onNavigateBack={handleNavigateBack}
                  canGoBack={canGoBack}
                  restoreSectionIndex={restoreSectionIndex}
                  setRestoreSectionIndex={setRestoreSectionIndex}
                  wikiSectionRef={wikiSectionRef}
                  allWrestlers={allIndividuals}
                />
              </ErrorBoundary>
            )}
          </div>
        </div>
      )}
    </div>
    </ErrorBoundary>
  );
}
