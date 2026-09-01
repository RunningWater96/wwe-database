import { useState, useMemo, useEffect } from 'react';
import { WRESTLER_IMAGES } from '../data';
import { getWrestlerInitials, getPlaceholderColor } from '../utils/wrestlerHelpers';
import WikiTab from './tabs/WikiTab';
import ImageLightbox from './ImageLightbox';

function getSimilarWrestlers(wrestler, allWrestlers) {
  if (!allWrestlers || allWrestlers.length === 0) return [];
  const wEras = new Set((wrestler.eras || []).map((e) => e.era));
  const wRivals = new Set((wrestler.rivals || []).map((r) => (typeof r === 'string' ? r : r.name || '')));
  const wAllies = new Set((wrestler.allies || []).map((a) => (typeof a === 'string' ? a : a.name || '')));
  const wFactions = new Set((wrestler.factions || []).map((f) => f.name));

  return allWrestlers
    .filter((w) => w.id !== wrestler.id)
    .map((w) => {
      let score = 0;
      const oEras = new Set((w.eras || []).map((e) => e.era));
      for (const e of wEras) if (oEras.has(e)) score += 2;
      for (const r of wRivals) if (r === w.name) score += 5;
      for (const a of wAllies) if (a === w.name) score += 5;
      const oFactions = new Set((w.factions || []).map((f) => f.name));
      for (const f of wFactions) if (oFactions.has(f)) score += 4;
      const oRivals = new Set((w.rivals || []).map((r) => (typeof r === 'string' ? r : r.name || '')));
      const oAllies = new Set((w.allies || []).map((a) => (typeof a === 'string' ? a : a.name || '')));
      const sharedRivals = [...wRivals].filter((r) => oRivals.has(r)).length;
      const sharedAllies = [...wAllies].filter((a) => oAllies.has(a)).length;
      score += sharedRivals + sharedAllies;
      return { wrestler: w, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map((x) => x.wrestler);
}

function CareerStatsCard({ stats }) {
  const winPct = stats.totalMatches > 0
    ? ((stats.wins / stats.totalMatches) * 100).toFixed(1)
    : '0.0';

  const statBoxStyle = {
    flex: '1 1 0', minWidth: 70, textAlign: 'center', padding: '8px 4px',
    background: '#111', borderRadius: 6, border: '1px solid #1a1a1a',
  };
  const numStyle = {
    fontFamily: "'Oswald', sans-serif", fontSize: 18, fontWeight: 700, color: '#FFD700',
    lineHeight: 1.1,
  };
  const labelStyle = {
    fontFamily: "'Oswald', sans-serif", fontSize: 9, color: '#666', letterSpacing: 0.8,
    textTransform: 'uppercase', marginTop: 2,
  };

  return (
    <div style={{
      background: '#0a0a0a', border: '1px solid #1a1a1a', borderRadius: 8,
      padding: '12px 14px', marginBottom: 14,
    }}>
      <div style={{
        fontFamily: "'Oswald', sans-serif", fontSize: 13, color: '#FFD700',
        letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 10,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <span>Career Stats</span>
        <span style={{ fontSize: 11, color: '#555', fontWeight: 400, letterSpacing: 0.5 }}>
          {stats.yearsActive}
        </span>
      </div>

      {/* W-L-D Record */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10,
        padding: '8px 12px', background: '#0d0d0d', borderRadius: 6, border: '1px solid #1a1a1a',
      }}>
        <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 22, fontWeight: 700, color: '#4CAF50' }}>
          {stats.wins.toLocaleString()}
        </span>
        <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 11, color: '#555' }}>W</span>
        <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 15, color: '#333' }}>–</span>
        <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 22, fontWeight: 700, color: '#CC0000' }}>
          {stats.losses.toLocaleString()}
        </span>
        <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 11, color: '#555' }}>L</span>
        <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 15, color: '#333' }}>–</span>
        <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 22, fontWeight: 700, color: '#888' }}>
          {stats.draws}
        </span>
        <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 11, color: '#555' }}>D</span>
        <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
          <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 18, fontWeight: 700, color: '#e8e0d0' }}>
            {winPct}%
          </div>
          <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 9, color: '#555', letterSpacing: 0.5 }}>
            WIN RATE
          </div>
        </div>
      </div>

      {/* Stat Grid */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        <div style={statBoxStyle}>
          <div style={numStyle}>{stats.totalMatches.toLocaleString()}</div>
          <div style={labelStyle}>Matches</div>
        </div>
        <div style={statBoxStyle}>
          <div style={numStyle}>{stats.ppvMatches}</div>
          <div style={labelStyle}>PPV</div>
        </div>
        <div style={statBoxStyle}>
          <div style={numStyle}>{stats.mainEvents}</div>
          <div style={labelStyle}>Main Events</div>
        </div>
        <div style={statBoxStyle}>
          <div style={numStyle}>{stats.rumbleAppearances}</div>
          <div style={labelStyle}>Rumbles</div>
        </div>
        <div style={statBoxStyle}>
          <div style={numStyle}>{stats.rumbleEliminations}</div>
          <div style={labelStyle}>Rumble Elims</div>
        </div>
        {stats.longestReign > 0 && (
          <div style={statBoxStyle}>
            <div style={numStyle}>{stats.longestReign.toLocaleString()}</div>
            <div style={labelStyle}>Longest Reign (days)</div>
          </div>
        )}
      </div>

      {/* Longest Reign Detail */}
      {stats.longestReign > 0 && stats.longestReignTitle && (
        <div style={{
          marginTop: 8, padding: '6px 10px', background: '#111', borderRadius: 4,
          fontFamily: "'Crimson Pro', serif", fontSize: 13, color: '#888',
          borderLeft: '3px solid #FFD700',
        }}>
          Longest reign: <span style={{ color: '#e8e0d0' }}>{stats.longestReign.toLocaleString()} days</span> as{' '}
          <span style={{ color: '#FFD700' }}>{stats.longestReignTitle}</span>
        </div>
      )}
    </div>
  );
}

export default function DetailPanel({
  wrestler,
  isFav,
  notes,
  editingNote,
  noteText,
  showImageModal,
  setSelectedWrestler,
  setEditingNote,
  setNoteText,
  setShowImageModal,
  toggleFavorite,
  startEditNote,
  saveNote,
  onNavigateToWrestler,
  onNavigateBack,
  canGoBack,
  restoreSectionIndex,
  setRestoreSectionIndex,
  wikiSectionRef,
  allWrestlers,
}) {
  const [imgFailed, setImgFailed] = useState(false);
  const similar = useMemo(() => getSimilarWrestlers(wrestler, allWrestlers || []), [wrestler, allWrestlers]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedWrestler(null);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [setSelectedWrestler]);

  return (
    <div
      className="detail-panel"
      role="complementary"
      aria-label={`Details for ${wrestler.name}`}
      style={{
        flex: 1,
        overflowY: 'auto',
        background: '#0d0d0d',
        padding: '16px 20px',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: 14,
          gap: 12,
        }}
      >
        <div
          onClick={() => WRESTLER_IMAGES[wrestler.id] && setShowImageModal(true)}
          style={{
            width: 100,
            height: 100,
            borderRadius: '50%',
            overflow: 'hidden',
            flexShrink: 0,
            background: getPlaceholderColor(wrestler.id),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '3px solid #333',
            cursor: WRESTLER_IMAGES[wrestler.id] ? 'pointer' : 'default',
            transition: 'border-color 0.15s',
          }}
          onMouseEnter={(e) => {
            if (WRESTLER_IMAGES[wrestler.id]) e.currentTarget.style.borderColor = '#FFD700';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#333';
          }}
        >
          {WRESTLER_IMAGES[wrestler.id] && !imgFailed ? (
            <img
              src={WRESTLER_IMAGES[wrestler.id]}
              alt={wrestler.name}
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
              onError={() => setImgFailed(true)}
            />
          ) : (
            <span
              style={{
                display: 'flex',
                fontFamily: "'Oswald', sans-serif",
                fontSize: 32,
                fontWeight: 700,
                color: '#e8e0d0',
                letterSpacing: 2,
                userSelect: 'none',
              }}
            >
              {getWrestlerInitials(wrestler.name)}
            </span>
          )}
        </div>
        <div style={{ flex: 1, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
          {/* Name + AKA */}
          <div style={{ flex: '0 1 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
              <div
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: 26,
                  fontWeight: 700,
                  letterSpacing: 1,
                  color: isFav ? '#FFD700' : '#e8e0d0',
                  lineHeight: 1,
                }}
              >
                {wrestler.name}
              </div>
              <button
                className={`icon-btn ${isFav ? 'fav-active' : ''}`}
                onClick={(e) => toggleFavorite(e, wrestler.id)}
              >
                {isFav ? '⭐ Favorited' : '☆ Add Favorite'}
              </button>
              <button
                className="icon-btn"
                onClick={(e) => startEditNote(e, wrestler.id)}
                style={{ borderColor: notes[wrestler.id] ? '#555' : '#333' }}
              >
                ✏️ {notes[wrestler.id] ? 'Edit Note' : 'Add Note'}
              </button>
            </div>
            {wrestler.alternateNames?.length > 0 && (
              <div style={{ display: 'flex', gap: 6, marginTop: 5, flexWrap: 'wrap', alignItems: 'center' }}>
                <span
                  style={{
                    fontSize: 11,
                    fontFamily: "'Oswald', sans-serif",
                    color: '#666',
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                  }}
                >
                  AKA:
                </span>
                {wrestler.alternateNames.map((n) => (
                  <span
                    key={n}
                    style={{
                      fontSize: 14,
                      fontFamily: "'Oswald', sans-serif",
                      color: '#bbb',
                      background: '#1a1a1a',
                      padding: '2px 8px',
                      borderRadius: 3,
                      border: '1px solid #333',
                    }}
                  >
                    {n}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center', flexShrink: 0 }}>
          {canGoBack && (
            <button
              className="close-btn"
              onClick={onNavigateBack}
              title="Go back to previous wrestler"
              aria-label="Go back to previous wrestler"
              style={{ fontSize: 16 }}
            >
              &#10094;
            </button>
          )}
          <button className="close-btn" onClick={() => setSelectedWrestler(null)} aria-label="Close detail panel">
            ×
          </button>
        </div>
      </div>

      {/* Note editing */}
      {editingNote === wrestler.id && (
        <div
          style={{
            background: '#161400',
            border: '1px solid #3a3000',
            borderRadius: 4,
            padding: '12px 14px',
            marginBottom: 14,
          }}
        >
          <div
            style={{
              fontSize: 9,
              fontFamily: "'Oswald', sans-serif",
              letterSpacing: 2,
              color: '#B8860B',
              marginBottom: 6,
            }}
          >
            YOUR NOTE
          </div>
          <textarea
            className="note-textarea"
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            placeholder="Write your thoughts on this wrestler..."
            autoFocus
          />
          <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
            <button className="save-btn" onClick={saveNote}>
              Save
            </button>
            <button
              className="cancel-btn"
              onClick={() => {
                setEditingNote(false);
                setNoteText('');
              }}
            >
              Cancel
            </button>
            {notes[wrestler.id] && (
              <button
                className="cancel-btn"
                style={{ color: '#cc4444', borderColor: '#3a0000' }}
                onClick={() => {
                  setNoteText('');
                  saveNote();
                }}
              >
                Delete Note
              </button>
            )}
          </div>
        </div>
      )}

      {/* Saved note display */}
      {notes[wrestler.id] && editingNote !== wrestler.id && (
        <div
          style={{
            background: 'linear-gradient(135deg, #1a1400, #120f00)',
            border: '1px solid #3a2800',
            borderLeft: '3px solid #FFD700',
            borderRadius: 4,
            padding: '10px 14px',
            marginBottom: 14,
            cursor: 'pointer',
          }}
          onClick={(e) => startEditNote(e, wrestler.id)}
        >
          <div
            style={{
              fontSize: 9,
              fontFamily: "'Oswald', sans-serif",
              letterSpacing: 2,
              color: '#B8860B',
              marginBottom: 3,
            }}
          >
            YOUR NOTE <span style={{ color: '#555' }}>— click to edit</span>
          </div>
          <div
            style={{
              fontSize: 13,
              fontFamily: "'Crimson Pro', serif",
              fontStyle: 'italic',
              color: '#d4b86a',
              lineHeight: 1.5,
            }}
          >
            {notes[wrestler.id]}
          </div>
        </div>
      )}

      {/* Similar Wrestlers */}
      {similar.length > 0 && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 10 }}>
          <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 1.5, color: '#FFD700', textTransform: 'uppercase' }}>
            Similar:
          </span>
          {similar.map((sw) => (
            <div
              key={sw.id}
              onClick={() => onNavigateToWrestler(sw.name)}
              style={{
                display: 'flex', alignItems: 'center', gap: 5, padding: '3px 8px 3px 3px',
                background: '#151515', border: '1px solid #2a2a2a', borderRadius: 20,
                cursor: 'pointer', transition: 'border-color 0.15s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#FFD700')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#2a2a2a')}
            >
              <div style={{
                width: 22, height: 22, borderRadius: '50%', overflow: 'hidden', flexShrink: 0,
                background: getPlaceholderColor(sw.id), display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {WRESTLER_IMAGES[sw.id] ? (
                  <img src={WRESTLER_IMAGES[sw.id]} alt={sw.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                ) : (
                  <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 8, fontWeight: 700, color: '#e8e0d0' }}>
                    {getWrestlerInitials(sw.name)}
                  </span>
                )}
              </div>
              <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 11, color: '#bbb', letterSpacing: 0.3 }}>
                {sw.name}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Career Stats */}
      {wrestler.stats && <CareerStatsCard stats={wrestler.stats} />}

      {/* Encyclopedia */}
      <WikiTab
        wrestler={wrestler}
        onNavigateToWrestler={onNavigateToWrestler}
        restoreSectionIndex={restoreSectionIndex}
        setRestoreSectionIndex={setRestoreSectionIndex}
        sectionIndexRef={wikiSectionRef}
      />

      {/* Image Lightbox Modal */}
      {showImageModal && WRESTLER_IMAGES[wrestler.id] && (
        <ImageLightbox
          imageUrl={WRESTLER_IMAGES[wrestler.id]}
          wrestlerName={wrestler.name}
          onClose={() => setShowImageModal(false)}
        />
      )}
    </div>
  );
}
