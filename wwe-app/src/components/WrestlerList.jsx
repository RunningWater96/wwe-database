import { useRef, useEffect, useCallback, useState, useMemo } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import WrestlerCard from './WrestlerCard';
import WrestlerImage from './WrestlerImage';
import { WRESTLER_IMAGES, ERAS } from '../data';
import { classifyEntry } from '../utils/wrestlerHelpers';
import { countActiveFilters } from '../utils/filterHelpers';

function SmartRandomPanel({ individuals, tagTeams, factions, onSelectWrestler, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handlePick = useCallback((filterFn) => {
    const all = [...individuals, ...tagTeams, ...factions];
    const pool = filterFn ? all.filter(filterFn) : all;
    if (pool.length === 0) return;
    const rand = pool[Math.floor(Math.random() * pool.length)];
    onSelectWrestler(rand.id);
    onClose();
  }, [individuals, tagTeams, factions, onSelectWrestler, onClose]);

  const eras = ERAS.filter((e) => e.id !== 'all');

  const typeOptions = [
    { label: 'Any', fn: null },
    { label: 'Champion', fn: (w) => (w.totalTitleReigns || 0) > 0 },
    { label: 'Hall of Famer', fn: (w) => w.hallOfFame },
    { label: 'Female', fn: (w) => w.gender === 'female' },
    { label: 'Tag Team', fn: (w) => classifyEntry(w) === 'tagTeam' },
    { label: 'Faction', fn: (w) => classifyEntry(w) === 'faction' },
    { label: 'Deceased', fn: (w) => w.deceased },
  ];

  return (
    <div className="advanced-filters-overlay" role="dialog" aria-modal="true" aria-label="Random wrestler picker" onClick={onClose}>
      <div className="advanced-filters-panel" onClick={(e) => e.stopPropagation()}>
        <div className="advanced-filters-header">
          <span className="advanced-filters-title">Random</span>
          <button className="advanced-filters-close" onClick={onClose}>✕</button>
        </div>

        <div className="filter-section">
          <span className="filter-section-label">By Type</span>
          <div className="filter-section-options">
            {typeOptions.map((opt) => (
              <button
                key={opt.label}
                className="era-btn"
                onClick={() => handlePick(opt.fn)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-section">
          <span className="filter-section-label">By Era</span>
          <div className="filter-section-options">
            {eras.map((era) => (
              <button
                key={era.id}
                className="era-btn"
                onClick={() => handlePick((w) => w.eras?.some((e) => e.era === era.id))}
                style={{ borderColor: era.color, color: era.color }}
              >
                {era.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ label, count, totalCount, isCollapsed, onToggle, color }) {
  return (
    <div
      className="browse-section-header"
      role="button"
      tabIndex={0}
      aria-expanded={!isCollapsed}
      aria-label={`${label} section, ${count} of ${totalCount}`}
      onClick={onToggle}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onToggle(); } }}
    >
      <div className="browse-section-left">
        <span
          className="browse-section-arrow"
          style={{ transform: isCollapsed ? 'rotate(-90deg)' : 'rotate(0deg)' }}
        >
          ▼
        </span>
        <span className="browse-section-label" style={{ color }}>{label}</span>
      </div>
      <span className="browse-section-count" style={{ color }}>
        {count} OF {totalCount}
      </span>
    </div>
  );
}

function OtherCard({ o, onSelectWrestler }) {
  return (
    <div
      role="listitem"
      tabIndex={0}
      className="wrestler-card"
      onClick={() => onSelectWrestler(o.id)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelectWrestler(o.id); } }}
      style={{ cursor: 'pointer' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px' }}>
        <div style={{
          width: 36, height: 36, borderRadius: '50%', background: '#27ae60',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 13, fontWeight: 700, color: '#fff' }}>
            {o.name.charAt(0)}
          </span>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 14, color: '#e8e0d0', letterSpacing: 0.5 }}>
            {o.name}
          </div>
          <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 10, color: '#27ae60', letterSpacing: 1, textTransform: 'uppercase' }}>
            {o.role}
          </div>
        </div>
        {o.hallOfFame && (
          <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 9, color: '#FFD700', letterSpacing: 1 }}>
            HOF {o.hallOfFame}
          </span>
        )}
        {o.deceased && (
          <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 9, color: '#666', letterSpacing: 1 }}>
            {o.deceased.year}
          </span>
        )}
      </div>
    </div>
  );
}

export default function WrestlerList({
  individuals,
  tagTeams,
  factions,
  others = [],
  totalIndividualCount,
  totalTagTeamCount,
  totalFactionCount,
  totalOthersCount = 0,
  favorites,
  notes,
  onSelectWrestler,
  onToggleFavorite,
  collapsed,
  setCollapsed,
  savedScrollTopRef,
  recentWrestlers,
  focusedId,
  advancedFilters,
  showAdvancedFilters,
  setShowAdvancedFilters,
  onClearFilters,
}) {
  const containerRef = useRef(null);
  const [showRandomMenu, setShowRandomMenu] = useState(false);

  // Restore scroll position on mount
  useEffect(() => {
    if (containerRef.current && savedScrollTopRef.current) {
      containerRef.current.scrollTop = savedScrollTopRef.current;
    }
  }, [savedScrollTopRef]);

  // Save scroll position on every scroll
  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      savedScrollTopRef.current = containerRef.current.scrollTop;
    }
  }, [savedScrollTopRef]);

  const toggleSection = useCallback(
    (section) => {
      setCollapsed((prev) => ({ ...prev, [section]: !prev[section] }));
    },
    [setCollapsed],
  );

  // Featured wrestler spotlight — only when browsing unfiltered
  const isUnfiltered =
    individuals.length === totalIndividualCount && countActiveFilters(advancedFilters) === 0;
  const [spotlightKey] = useState(0);

  const { spotlight, spotlightTrivia } = useMemo(() => {
    if (!isUnfiltered || individuals.length === 0)
      return { spotlight: null, spotlightTrivia: null };

    const candidates = individuals.filter(
      (w) => (w.totalTitleReigns || 0) > 0 && WRESTLER_IMAGES[w.id],
    );
    if (candidates.length === 0) return { spotlight: individuals[0], spotlightTrivia: null };

    let picked;
    if (spotlightKey === 0) {
      const today = new Date();
      const daySeed =
        today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
      const weighted = [];
      for (const w of candidates) {
        const weight = Math.max(1, Math.ceil(Math.sqrt(w.totalTitleReigns || 1)));
        for (let i = 0; i < weight; i++) weighted.push(w);
      }
      picked = weighted[daySeed % weighted.length];
    } else {
      const weighted = [];
      for (const w of candidates) {
        const weight = Math.max(1, Math.ceil(Math.sqrt(w.totalTitleReigns || 1)));
        for (let i = 0; i < weight; i++) weighted.push(w);
      }
      picked = weighted[Math.floor(Math.random() * weighted.length)];
    }

    const trivia = [];
    if (picked.hallOfFame) trivia.push('Hall of Famer');
    if ((picked.eras || []).length >= 4) trivia.push(`Spanned ${picked.eras.length} eras`);
    const rivals = picked.rivals || [];
    if (rivals.length >= 5) trivia.push(`${rivals.length} notable rivalries`);
    const allies = picked.allies || [];
    if (allies.length >= 5) trivia.push(`${allies.length} known allies`);
    const pfactions = picked.factions || [];
    if (pfactions.length >= 3) trivia.push(`Member of ${pfactions.length} factions`);
    if (picked.totalTitleReigns >= 10) trivia.push(`${picked.totalTitleReigns}x champion`);

    return { spotlight: picked, spotlightTrivia: trivia.length > 0 ? trivia[0] : null };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spotlightKey, isUnfiltered]);

  const showIndividuals = individuals.length > 0;
  const showTagTeams = tagTeams.length > 0;
  const showFactions = factions.length > 0;
  const showOthers = others.length > 0;

  const sections = [
    {
      key: 'individuals',
      label: 'Individual Wrestlers',
      count: individuals.length,
      total: totalIndividualCount,
      color: '#e8e0d0',
      show: showIndividuals,
      items: individuals,
    },
    {
      key: 'tagTeams',
      label: 'Tag Teams',
      count: tagTeams.length,
      total: totalTagTeamCount,
      color: '#4a9eff',
      show: showTagTeams,
      items: tagTeams,
    },
    {
      key: 'factions',
      label: 'Factions & Stables',
      count: factions.length,
      total: totalFactionCount,
      color: '#9C27B0',
      show: showFactions,
      items: factions,
    },
    {
      key: 'others',
      label: 'Others',
      count: others.length,
      total: totalOthersCount,
      color: '#27ae60',
      show: showOthers,
      items: others,
    },
  ];

  const visibleSections = sections.filter((s) => s.show);

  // Build flat list of virtual items
  const flatItems = useMemo(() => {
    const items = [];

    // Spotlight
    if (spotlight && isUnfiltered) {
      items.push({ type: 'spotlight', key: 'spotlight' });
    }

    // Recent wrestlers
    if (recentWrestlers && recentWrestlers.length > 0) {
      items.push({ type: 'recent', key: 'recent' });
    }

    // Jump bar
    items.push({ type: 'jumpbar', key: 'jumpbar' });

    // Sections with headers and cards
    for (const section of visibleSections) {
      items.push({
        type: 'section-header',
        key: `header-${section.key}`,
        section,
      });
      if (!collapsed[section.key]) {
        for (const w of section.items) {
          items.push({
            type: section.key === 'others' ? 'other-card' : 'wrestler-card',
            key: `card-${w.id}`,
            wrestler: w,
          });
        }
      }
    }

    // No results
    if (visibleSections.length === 0) {
      items.push({ type: 'no-results', key: 'no-results' });
    }

    return items;
  }, [
    spotlight,
    isUnfiltered,
    recentWrestlers,
    visibleSections,
    collapsed,
  ]);

  const virtualizer = useVirtualizer({
    count: flatItems.length,
    getScrollElement: () => containerRef.current,
    estimateSize: (index) => {
      const item = flatItems[index];
      switch (item.type) {
        case 'spotlight':
          return 160;
        case 'recent':
          return 40;
        case 'jumpbar':
          return 44;
        case 'section-header':
          return 42;
        case 'wrestler-card':
          return 100;
        case 'other-card':
          return 56;
        case 'no-results':
          return 60;
        default:
          return 80;
      }
    },
    overscan: 10,
  });

  // Scroll to section by finding its header index
  const scrollToSection = useCallback(
    (sectionKey) => {
      setCollapsed((prev) => ({ ...prev, [sectionKey]: false }));
      // Find header index after next render
      requestAnimationFrame(() => {
        const idx = flatItems.findIndex(
          (item) => item.type === 'section-header' && item.section.key === sectionKey,
        );
        if (idx >= 0) {
          virtualizer.scrollToIndex(idx, { align: 'start' });
        }
      });
    },
    [flatItems, virtualizer, setCollapsed],
  );

  // Scroll focused card into view
  useEffect(() => {
    if (focusedId) {
      const idx = flatItems.findIndex(
        (item) =>
          (item.type === 'wrestler-card' || item.type === 'other-card') &&
          item.wrestler.id === focusedId,
      );
      if (idx >= 0) {
        virtualizer.scrollToIndex(idx, { align: 'center' });
      }
    }
  }, [focusedId, flatItems, virtualizer]);

  const renderItem = (item) => {
    switch (item.type) {
      case 'spotlight':
        return (
          <div
            style={{
              background: 'linear-gradient(135deg, #1a1400 0%, #0d0d0d 100%)',
              border: '1px solid #3a2800',
              borderRadius: 8,
              padding: '16px 20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 10,
              cursor: 'pointer',
              transition: 'border-color 0.2s',
              textAlign: 'center',
            }}
            onClick={() => onSelectWrestler(spotlight.id)}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#FFD700')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#3a2800')}
          >
            <div
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: 10,
                letterSpacing: 2,
                color: '#B8860B',
                textTransform: 'uppercase',
              }}
            >
              Featured Wrestler
            </div>
            <WrestlerImage id={spotlight.id} name={spotlight.name} size={64} eager style={{ border: '2px solid #FFD700' }} />
            <div>
              <div
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: 22,
                  fontWeight: 700,
                  color: '#FFD700',
                  letterSpacing: 1,
                  lineHeight: 1.1,
                }}
              >
                {spotlight.name}
              </div>
              {spotlight.realName &&
                !spotlight.realName.startsWith('Already') && (
                  <div
                    style={{
                      fontFamily: "'Crimson Pro', serif",
                      fontSize: 13,
                      color: '#888',
                      marginTop: 3,
                    }}
                  >
                    {spotlight.realName}
                  </div>
                )}
              {spotlight.totalTitleReigns > 0 && (
                <div
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    fontSize: 12,
                    color: '#666',
                    marginTop: 3,
                  }}
                >
                  {spotlight.totalTitleReigns} championship reign
                  {spotlight.totalTitleReigns !== 1 ? 's' : ''}
                  {spotlightTrivia && (
                    <span style={{ color: '#B8860B' }}> · {spotlightTrivia}</span>
                  )}
                </div>
              )}
              {!spotlight.totalTitleReigns && spotlightTrivia && (
                <div
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    fontSize: 12,
                    color: '#B8860B',
                    marginTop: 3,
                  }}
                >
                  {spotlightTrivia}
                </div>
              )}
            </div>
          </div>
        );

      case 'recent':
        return (
          <div className="recently-viewed-row">
            <span className="recently-viewed-label">RECENT:</span>
            {recentWrestlers.map((w) => (
              <span
                key={w.id}
                className="recently-viewed-pill"
                role="button"
                tabIndex={0}
                onClick={() => onSelectWrestler(w.id)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelectWrestler(w.id); } }}
              >
                {w.name}
              </span>
            ))}
          </div>
        );

      case 'jumpbar':
        return (
          <div className="browse-jump-bar">
            <div style={{ display: 'flex', gap: 8 }}>
              {visibleSections.length > 1 &&
                visibleSections.map((s) => (
                  <button
                    key={s.key}
                    className="browse-jump-pill"
                    style={{ '--pill-color': s.color }}
                    onClick={() => scrollToSection(s.key)}
                  >
                    <span className="browse-jump-label">{s.label}</span>
                    <span className="browse-jump-count">{s.count}</span>
                  </button>
                ))}
            </div>
            <div
              style={{ display: 'flex', gap: 7, alignItems: 'center', marginLeft: 'auto' }}
            >
              <button
                className={`fav-toggle ${showAdvancedFilters || countActiveFilters(advancedFilters) > 0 ? 'active' : ''}`}
                onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
              >
                {countActiveFilters(advancedFilters) > 0
                  ? `Filters (${countActiveFilters(advancedFilters)})`
                  : 'Filters'}
              </button>
              <button
                className="fav-toggle"
                onClick={() => setShowRandomMenu((prev) => !prev)}
                title="Smart random wrestler"
              >
                Random
              </button>
              {showRandomMenu && (
                <SmartRandomPanel
                  individuals={individuals}
                  tagTeams={tagTeams}
                  factions={factions}
                  onSelectWrestler={onSelectWrestler}
                  onClose={() => setShowRandomMenu(false)}
                />
              )}
            </div>
          </div>
        );

      case 'section-header':
        return (
          <SectionHeader
            label={item.section.label}
            count={item.section.count}
            totalCount={item.section.total}
            isCollapsed={collapsed[item.section.key]}
            onToggle={() => toggleSection(item.section.key)}
            color={item.section.color}
          />
        );

      case 'wrestler-card':
        return (
          <WrestlerCard
            wrestler={item.wrestler}
            isSelected={false}
            isFavorite={!!favorites[item.wrestler.id]}
            note={notes[item.wrestler.id]}
            onSelect={() => onSelectWrestler(item.wrestler.id)}
            onToggleFavorite={(e) => onToggleFavorite(e, item.wrestler.id)}
            isFocused={item.wrestler.id === focusedId}
          />
        );

      case 'other-card':
        return <OtherCard o={item.wrestler} onSelectWrestler={onSelectWrestler} />;

      case 'no-results':
        return (
          <div
            style={{
              color: '#555',
              fontSize: 15,
              fontFamily: "'Oswald', sans-serif",
              letterSpacing: 1,
              padding: '40px 20px',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: 28, marginBottom: 8, opacity: 0.3 }}>?</div>
            <div>NO RESULTS FOUND</div>
            <div style={{ fontSize: 12, color: '#444', marginTop: 8, fontFamily: "'Crimson Pro', serif", letterSpacing: 0 }}>
              Try a different search term or adjust your filters
            </div>
            {onClearFilters && (
              <button
                onClick={onClearFilters}
                style={{
                  marginTop: 14, padding: '6px 16px', background: 'transparent',
                  border: '1px solid #555', color: '#888', borderRadius: 4, cursor: 'pointer',
                  fontFamily: "'Oswald', sans-serif", fontSize: 12, letterSpacing: 1,
                }}
              >
                CLEAR ALL FILTERS
              </button>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      style={{
        flex: 1,
        overflowY: 'auto',
        padding: '12px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          height: virtualizer.getTotalSize(),
          width: '100%',
          position: 'relative',
        }}
      >
        {virtualizer.getVirtualItems().map((virtualRow) => {
          const item = flatItems[virtualRow.index];
          return (
            <div
              key={item.key}
              data-index={virtualRow.index}
              ref={virtualizer.measureElement}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                transform: `translateY(${virtualRow.start}px)`,
              }}
            >
              <div style={{ paddingBottom: 8 }}>{renderItem(item)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
