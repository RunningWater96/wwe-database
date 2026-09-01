import { useRef, useMemo, memo } from 'react';
import { WRESTLER_IMAGES, ERAS, ERA_COLORS, BRAND_COLORS } from '../data';
import WrestlerImage from './WrestlerImage';

function getCompleteness(w) {
  const checks = [
    !!WRESTLER_IMAGES[w.id],
    w.realName && w.realName !== 'N/A' && !w.realName.startsWith('Already'),
    (w.eras || []).some((e) => e.era !== 'all' && e.character),
    (w.championships || []).length > 0,
    (w.allies || []).length > 0 || (w.rivals || []).length > 0,
    (w.tagTeams || []).length > 0 || (w.factions || []).length > 0,
    !!w.stats,
    (w.alternateNames || []).length > 0,
    !!w.currentBrand,
  ];
  return Math.round((checks.filter(Boolean).length / checks.length) * 100);
}

function CompletenessRing({ pct }) {
  const r = 26;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;
  const color = pct >= 80 ? '#00E676' : pct >= 50 ? '#FFD700' : '#FF6B35';
  return (
    <svg
      width="56"
      height="56"
      style={{ position: 'absolute', top: -2, left: -2, pointerEvents: 'none' }}
    >
      <circle cx="28" cy="28" r={r} fill="none" stroke="#222" strokeWidth="2" />
      <circle
        cx="28"
        cy="28"
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 28 28)"
        style={{ transition: 'stroke-dashoffset 0.3s' }}
      />
    </svg>
  );
}

export default memo(function WrestlerCard({
  wrestler: w,
  isSelected,
  isFavorite,
  note,
  onSelect,
  onToggleFavorite,
  isFocused,
}) {
  const cardRef = useRef(null);

  const pct = useMemo(() => getCompleteness(w), [w]);
  const eraIds = [...new Set(w.eras.filter((e) => e.era !== 'all').map((e) => e.era))];
  return (
    <div
      ref={cardRef}
      role="listitem"
      aria-label={w.name}
      className={`card ${isSelected ? 'sel' : ''} ${isFavorite ? 'fav' : ''} ${isFocused ? 'kb-focus' : ''}`}
      onClick={onSelect}
      style={{
        padding: '20px 20px',
        borderColor: isFocused ? '#4a9eff' : isSelected ? '#FFD700' : isFavorite ? '#3a2a00' : '#2a2a2a',
        display: 'flex',
        alignItems: 'flex-start',
        overflow: 'visible',
      }}
    >
      {isFavorite && (
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 4,
            background: 'linear-gradient(180deg, #FFD700, #B8860B)',
          }}
        />
      )}
      <div
        style={{ position: 'relative', flexShrink: 0, marginRight: 14, width: 52, height: 62 }}
        title={`Profile: ${pct}% complete`}
      >
        <CompletenessRing pct={pct} />
        <WrestlerImage id={w.id} name={w.name} size={48} style={{ margin: '2px 0 0 2px' }} />
        <div
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: 9,
            color: pct >= 80 ? '#00E676' : pct >= 50 ? '#FFD700' : '#FF6B35',
            textAlign: 'center',
            marginTop: 2,
            letterSpacing: 0.5,
            opacity: 0.8,
          }}
        >
          {pct}%
        </div>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: 22,
                  fontWeight: 600,
                  color: isFavorite ? '#FFD700' : '#e8e0d0',
                  letterSpacing: 0.5,
                }}
              >
                {w.name}
              </span>
              {w.currentBrand && BRAND_COLORS[w.currentBrand] && (
                <span
                  className="brand-badge"
                  style={{
                    color: BRAND_COLORS[w.currentBrand],
                    background: BRAND_COLORS[w.currentBrand] + '18',
                    border: `1px solid ${BRAND_COLORS[w.currentBrand]}44`,
                  }}
                >
                  {w.currentBrand}
                </span>
              )}
              {w.deceased && (
                <span
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: 10,
                    color: '#888',
                    letterSpacing: 1,
                    background: '#1a1a1a',
                    padding: '1px 6px',
                    borderRadius: 2,
                    border: '1px solid #333',
                  }}
                >
                  DECEASED
                </span>
              )}
            </div>
            {w.realName !== w.name && w.realName !== 'N/A' && w.realName !== 'Already covered' && (
              <div
                style={{
                  fontSize: 14,
                  color: '#777',
                  fontStyle: 'italic',
                  fontFamily: "'Crimson Pro', serif",
                  marginTop: 2,
                }}
              >
                {w.realName}
              </div>
            )}
          </div>
          <div
            style={{ display: 'flex', alignItems: 'center', gap: 8, marginLeft: 10, flexShrink: 0 }}
          >
            {w.totalTitleReigns > 0 && (
              <span style={{ fontSize: 13, color: '#888', fontFamily: "'Oswald', sans-serif" }}>
                {w.totalTitleReigns}×
              </span>
            )}
            {w.hallOfFame && (
              <span style={{ fontSize: 13, color: '#B8860B', fontFamily: "'Oswald', sans-serif" }}>
                HOF
              </span>
            )}
            <button
              className={`icon-btn ${isFavorite ? 'fav-active' : ''}`}
              onClick={onToggleFavorite}
              title={isFavorite ? 'Remove favorite' : 'Add favorite'}
              aria-label={`${isFavorite ? 'Remove' : 'Add'} ${w.name} ${isFavorite ? 'from' : 'to'} favorites`}
              style={{ fontSize: 16, padding: '2px 8px' }}
            >
              {isFavorite ? '⭐' : '☆'}
            </button>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6, marginTop: 8, flexWrap: 'wrap' }}>
          {eraIds.map((eraId) => {
            const era = ERAS.find((e) => e.id === eraId);
            const color = ERA_COLORS[eraId];
            if (!color) return null;
            return (
              <span
                key={eraId}
                className="era-pill"
                style={{ background: color + '22', color, border: `1px solid ${color}44` }}
              >
                {era?.label}
              </span>
            );
          })}
        </div>
        {isFavorite && note && (
          <div
            style={{
              marginTop: 8,
              padding: '5px 10px',
              background: '#1a1400',
              borderLeft: '2px solid #FFD700',
              fontSize: 13,
              color: '#c8b870',
              fontFamily: "'Crimson Pro', serif",
              fontStyle: 'italic',
            }}
          >
            {note}
          </div>
        )}
      </div>
    </div>
  );
})
