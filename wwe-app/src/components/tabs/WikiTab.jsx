import { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import { WRESTLER_BIO, ERAS, ERA_COLORS, WRESTLERS_MERGED, DRAFT_NOTES, THEMES, BRAND_COLORS, getWikiData, getPersonalData } from '../../data';
import { WIKI_SECTIONS, GROUP_SECTIONS, getWrestlerMoves, getTrainingData, initWikiSectionData } from '../../utils/wikiSections';
import { classifyEntry } from '../../utils/wrestlerHelpers';

// Build a set of known wrestler names for clickable link detection
const KNOWN_WRESTLER_NAMES = new Set();
WRESTLERS_MERGED.forEach((w) => {
  if (classifyEntry(w) === 'duplicate') return;
  KNOWN_WRESTLER_NAMES.add(w.name.toLowerCase());
  if (w.realName) KNOWN_WRESTLER_NAMES.add(w.realName.toLowerCase());
  (w.alternateNames || []).forEach((n) => KNOWN_WRESTLER_NAMES.add(n.toLowerCase()));
});

export default function WikiTab({ wrestler, onNavigateToWrestler, restoreSectionIndex, setRestoreSectionIndex, sectionIndexRef }) {
  const bio = WRESTLER_BIO[wrestler.id];

  // Lazy-load wiki, personal, promos, matches, and move GIFs data
  const [wikiData, setWikiData] = useState(null);
  const [personalData, setPersonalData] = useState(null);
  const [promosData, setPromosData] = useState(null);
  const [matchesData, setMatchesData] = useState(null);
  const [moveGifsData, setMoveGifsData] = useState(null);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    Promise.all([
      getWikiData(),
      getPersonalData(),
      initWikiSectionData(),
      import('../../data/promos').then((m) => m.default),
      import('../../data/matches').then((m) => m.default),
      import('../../data/moves').then((m) => m.MOVE_GIFS),
    ]).then(([w, p, , promos, matches, moveGifs]) => {
      if (!cancelled) {
        setWikiData(w);
        setPersonalData(p);
        setPromosData(promos);
        setMatchesData(matches);
        setMoveGifsData(moveGifs);
        setDataLoading(false);
      }
    });
    return () => { cancelled = true; };
  }, []);

  const personal = personalData?.[wrestler.id] ?? null;
  const wiki = wikiData?.[wrestler.id] ?? null;
  const entryType = classifyEntry(wrestler);
  const isGroup = entryType === 'tagTeam' || entryType === 'faction';
  const sectionDefs = isGroup ? GROUP_SECTIONS : WIKI_SECTIONS;

  const availableSections = useMemo(
    () => sectionDefs.filter((s) => s.hasContent(wrestler, bio, personal, wiki)),
    [wrestler, bio, personal, wiki, sectionDefs],
  );

  const [currentIndex, setCurrentIndex] = useState(restoreSectionIndex ?? 0);
  const containerRef = useRef(null);

  // Keep parent's ref in sync with current section index
  useEffect(() => {
    if (sectionIndexRef) sectionIndexRef.current = currentIndex;
  }, [currentIndex, sectionIndexRef]);

  const scrollToTop = useCallback(() => {
    containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  // Reset to section 0 on wrestler change, or restore if navigating back
  useEffect(() => {
    if (restoreSectionIndex != null) {
      setCurrentIndex(restoreSectionIndex);
      setRestoreSectionIndex?.(null);
    } else {
      setCurrentIndex(0);
    }
  }, [wrestler.id]); // eslint-disable-line react-hooks/exhaustive-deps

  // Clamp index if sections change
  const safeIndex = Math.min(currentIndex, Math.max(availableSections.length - 1, 0));
  const currentSection = availableSections[safeIndex];

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => (i <= 0 ? availableSections.length - 1 : i - 1));
    scrollToTop();
  }, [availableSections.length, scrollToTop]);

  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i >= availableSections.length - 1 ? 0 : i + 1));
    scrollToTop();
  }, [availableSections.length, scrollToTop]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [goPrev, goNext]);

  if (dataLoading) {
    return (
      <div className="wiki-empty">
        <div className="wiki-empty-icon">📖</div>
        <div className="wiki-empty-title">Loading Encyclopedia...</div>
        <div className="wiki-skeleton">
          <div className="wiki-skeleton-line wide" />
          <div className="wiki-skeleton-line wide" />
          <div className="wiki-skeleton-line medium" />
          <div className="wiki-skeleton-line" />
          <div className="wiki-skeleton-line wide" />
          <div className="wiki-skeleton-line medium" />
        </div>
      </div>
    );
  }

  if (availableSections.length === 0) {
    return (
      <div className="wiki-empty">
        <div className="wiki-empty-icon">📖</div>
        <div className="wiki-empty-title">Encyclopedia Coming Soon</div>
        <div className="wiki-empty-text">
          Content for {wrestler.name} is still being compiled.
        </div>
        <div className="wiki-skeleton">
          <div className="wiki-skeleton-line wide" />
          <div className="wiki-skeleton-line wide" />
          <div className="wiki-skeleton-line medium" />
          <div className="wiki-skeleton-line" />
          <div className="wiki-skeleton-line wide" />
          <div className="wiki-skeleton-line medium" />
        </div>
      </div>
    );
  }

  const hasWikiContent = isGroup || !!wiki;

  return (
    <div className="wiki-container" ref={containerRef}>
      {/* Banner for wrestlers without generated wiki content */}
      {!hasWikiContent && (
        <div
          style={{
            background: 'linear-gradient(135deg, #1a1400, #120f00)',
            border: '1px solid #3a2800',
            borderLeft: '3px solid #FFD700',
            borderRadius: 4,
            padding: '12px 16px',
            marginBottom: 14,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <span style={{ fontSize: 24 }}>📖</span>
          <div>
            <div
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 1,
                color: '#FFD700',
                marginBottom: 2,
              }}
            >
              Full Encyclopedia Coming Soon
            </div>
            <div
              style={{
                fontFamily: "'Crimson Pro', serif",
                fontSize: 13,
                color: '#999',
                lineHeight: 1.4,
              }}
            >
              Narrative content for {wrestler.name} is still being compiled. Existing data is shown
              below.
            </div>
          </div>
        </div>
      )}

      {/* Section TOC */}
      <div className="wiki-toc">
        {availableSections.map((s, i) => (
          <button
            key={s.id}
            className={`wiki-toc-btn${i === safeIndex ? ' active' : ''}`}
            onClick={() => setCurrentIndex(i)}
            title={`${s.label} (${i + 1}/${availableSections.length})`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Section Content */}
      <div className="wiki-body">
        {renderSection(currentSection.id, wrestler, bio, personal, wiki, onNavigateToWrestler, { promos: promosData, matches: matchesData, moveGifs: moveGifsData })}
      </div>

    </div>
  );
}

// ─── Section Renderers ───────────────────────────────────────────────────────

function renderSection(sectionId, wrestler, bio, personal, wiki, onNavigate, lazyData) {
  switch (sectionId) {
    case 'overview':
      return <OverviewSection wiki={wiki} wrestler={wrestler} bio={bio} />;
    case 'earlyLife':
      return <NarrativeSection text={wiki?.earlyLife} />;
    case 'career':
      return <CareerSection wiki={wiki} wrestler={wrestler} />;
    case 'careerTimeline':
      return <CareerTimelineSection wrestler={wrestler} />;
    case 'inRingStyle':
      return <NarrativeSection text={wiki?.inRingStyle} />;
    case 'promos':
      return <PromosSection wrestler={wrestler} promos={lazyData?.promos} />;
    case 'notableMatches':
      return <NotableMatchesSection wrestler={wrestler} onNavigate={onNavigate} matches={lazyData?.matches} />;
    case 'themeMusic':
      return <ThemeMusicSection wrestler={wrestler} />;
    case 'moves':
      return <MovesSection wrestler={wrestler} moveGifs={lazyData?.moveGifs || {}} />;
    case 'championships':
      return <ChampionshipsSection wrestler={wrestler} />;
    case 'feuds':
      return <FeudsSection wrestler={wrestler} onNavigate={onNavigate} />;
    case 'teams':
      return <TeamsSection wrestler={wrestler} onNavigate={onNavigate} />;
    case 'training':
      return <TrainingSection wrestler={wrestler} onNavigate={onNavigate} />;
    case 'brandHistory':
      return <BrandHistorySection wrestler={wrestler} />;
    case 'personalLife':
      return <PersonalLifeSection personal={personal} onNavigate={onNavigate} />;
    case 'injuries':
      return <InjuriesSection wrestler={wrestler} />;
    case 'legacy':
      return <NarrativeSection text={wiki?.legacy} />;
    case 'trivia':
      return <TriviaSection personal={personal} />;
    case 'groupOverview':
      return <GroupOverviewSection wrestler={wrestler} />;
    case 'members':
      return <MembersSection wrestler={wrestler} onNavigate={onNavigate} />;
    default:
      return null;
  }
}

// ─── Narrative (generated text) ──────────────────────────────────────────────

function NarrativeSection({ text }) {
  if (!text) return null;
  return (
    <div className="wiki-narrative">
      {text.split('\n\n').map((p, i) => (
        <p key={i} className="wiki-paragraph">
          {p}
        </p>
      ))}
    </div>
  );
}

// ─── Overview ────────────────────────────────────────────────────────────────

function OverviewSection({ wiki, wrestler, bio }) {
  return (
    <div className="wiki-narrative">
      {wiki?.overview && (
        <p className="wiki-paragraph" style={{ fontSize: 15, lineHeight: 1.8 }}>
          {wiki.overview}
        </p>
      )}
      {/* Quick stats box */}
      <div className="wiki-stats-box">
        <div className="wiki-stats-title">Quick Facts</div>
        <div className="wiki-stats-grid">
          {wrestler.realName && wrestler.realName !== wrestler.name && (
            <div className="wiki-stat">
              <span className="wiki-stat-label">Real Name</span>
              <span className="wiki-stat-value">{wrestler.realName}</span>
            </div>
          )}
          {bio?.hometown && (
            <div className="wiki-stat">
              <span className="wiki-stat-label">Hometown</span>
              <span className="wiki-stat-value">{bio.hometown}</span>
            </div>
          )}
          {bio?.birthday && (
            <div className="wiki-stat">
              <span className="wiki-stat-label">Born</span>
              <span className="wiki-stat-value">{formatBirthday(bio.birthday)}</span>
            </div>
          )}
          {bio?.height && (
            <div className="wiki-stat">
              <span className="wiki-stat-label">Height</span>
              <span className="wiki-stat-value">{bio.height}</span>
            </div>
          )}
          {bio?.weight && (
            <div className="wiki-stat">
              <span className="wiki-stat-label">Weight</span>
              <span className="wiki-stat-value">{bio.weight}</span>
            </div>
          )}
          {wrestler.totalTitleReigns > 0 && (
            <div className="wiki-stat">
              <span className="wiki-stat-label">Title Reigns</span>
              <span className="wiki-stat-value">{wrestler.totalTitleReigns}</span>
            </div>
          )}
          {wrestler.hallOfFame && (
            <div className="wiki-stat">
              <span className="wiki-stat-label">Hall of Fame</span>
              <span className="wiki-stat-value">{wrestler.hallOfFame}</span>
            </div>
          )}
          {wrestler.deceased && (
            <div className="wiki-stat">
              <span className="wiki-stat-label">Deceased</span>
              <span className="wiki-stat-value">{wrestler.deceased.year}</span>
            </div>
          )}
        </div>
        {wrestler.alternateNames?.length > 0 && (
          <div style={{ marginTop: 10 }}>
            <span className="wiki-stat-label">Also Known As</span>
            <div style={{ marginTop: 4, display: 'flex', flexWrap: 'wrap', gap: 4 }}>
              {wrestler.alternateNames.map((n, i) => (
                <span key={i} className="wiki-aka-badge">
                  {n}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Career ──────────────────────────────────────────────────────────────────

function CareerSection({ wiki, wrestler }) {
  const eras = wrestler.eras.filter((e) => e.era !== 'all' && e.character && e.persona);
  return (
    <div>
      {wiki?.career && <NarrativeSection text={wiki.career} />}
      {eras.length > 0 && (
        <div style={{ marginTop: wiki?.career ? 16 : 0 }}>
          <div className="wiki-sub-heading">Career Timeline</div>
          {eras.map((e, i) => {
            const eraData = ERAS.find((era) => era.id === e.era);
            const color = ERA_COLORS[e.era] || '#888';
            return (
              <div key={i} className="wiki-timeline-item" style={{ borderLeftColor: color }}>
                <div className="wiki-timeline-header">
                  <span className="wiki-timeline-character">{e.character}</span>
                  {eraData && (
                    <span
                      className="era-pill"
                      style={{ background: color + '22', color, border: `1px solid ${color}44` }}
                    >
                      {eraData.label}
                      {eraData.subtitle ? ` \u00B7 ${eraData.subtitle}` : ''}
                    </span>
                  )}
                </div>
                <div className="wiki-timeline-desc">{e.persona}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── Signature Moves ────────────────────────────────────────────────────

const MOVE_CATEGORY_COLORS = {
  strikes: '#CC0000',
  slams: '#FF6600',
  suplexes: '#FFD700',
  submissions: '#27ae60',
  aerial: '#4a9eff',
  throws: '#9C27B0',
  signature: '#b8860b',
};

function ThemeMusicSection({ wrestler }) {
  const themes = THEMES[wrestler.id];
  if (!themes || themes.length === 0) return null;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {themes.map((theme, i) => (
        <div
          key={i}
          style={{
            background: theme.iconic ? 'linear-gradient(135deg, #1a1400, #120f00)' : '#141414',
            border: `1px solid ${theme.iconic ? '#3a2800' : '#222'}`,
            borderLeft: `3px solid ${theme.iconic ? '#FFD700' : '#444'}`,
            borderRadius: 4,
            padding: '10px 14px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 14, color: '#e8e0d0', fontFamily: "'Crimson Pro', serif", fontStyle: 'italic' }}>
              &ldquo;{theme.song}&rdquo;
            </span>
            {theme.iconic && (
              <span style={{
                fontSize: 9,
                fontFamily: "'Oswald', sans-serif",
                letterSpacing: 1,
                color: '#FFD700',
                background: '#2a2000',
                padding: '1px 6px',
                borderRadius: 2,
                border: '1px solid #3a2800',
                textTransform: 'uppercase',
              }}>
                Iconic
              </span>
            )}
          </div>
          <div style={{ fontSize: 13, color: '#999', fontFamily: "'Crimson Pro', serif", marginTop: 3 }}>
            by {theme.artist}
          </div>
          {theme.years && (
            <div style={{ fontSize: 11, color: '#666', fontFamily: "'Oswald', sans-serif", letterSpacing: 1, marginTop: 4 }}>
              {theme.years}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function CareerTimelineSection({ wrestler }) {
  // Collect events from championship reigns, injuries, and eras
  const events = [];

  // Championship reigns
  (wrestler.championships || []).forEach((c) => {
    if (!c.title || c.title.startsWith('See entry')) return;
    const reigns = Array.isArray(c.reigns) ? c.reigns : [];
    reigns.forEach((r) => {
      if (!r.date || r.date === 'N/A') return;
      const yearMatch = r.date.match(/(\d{4})/);
      if (yearMatch) {
        events.push({
          year: parseInt(yearMatch[1]),
          date: r.date,
          type: 'championship',
          label: c.title,
          detail: r.notes || '',
          color: '#FFD700',
        });
      }
    });
    // Fallback: use firstReign if no reigns array
    if (reigns.length === 0 && c.firstReign && c.firstReign !== 'N/A') {
      const yearMatch = c.firstReign.match(/(\d{4})/);
      if (yearMatch) {
        events.push({
          year: parseInt(yearMatch[1]),
          date: c.firstReign,
          type: 'championship',
          label: c.title + (c.count > 1 ? ` (x${c.count})` : ''),
          detail: c.notable || '',
          color: '#FFD700',
        });
      }
    }
  });

  // Injuries
  (wrestler.injuries || []).forEach((inj) => {
    if (inj.year) {
      events.push({
        year: inj.year,
        date: String(inj.year),
        type: 'injury',
        label: inj.injury || 'Injury',
        detail: inj.cause || '',
        color: '#CC0000',
      });
    }
  });

  // Deceased
  if (wrestler.deceased?.year) {
    events.push({
      year: wrestler.deceased.year,
      date: String(wrestler.deceased.year),
      type: 'deceased',
      label: 'Passed Away',
      detail: wrestler.deceased.details || '',
      color: '#666',
    });
  }

  // Sort chronologically
  events.sort((a, b) => a.year - b.year);

  if (events.length === 0) return null;

  const minYear = events[0].year;
  const maxYear = events[events.length - 1].year;

  return (
    <div style={{ position: 'relative', paddingLeft: 20 }}>
      {/* Timeline line */}
      <div style={{
        position: 'absolute', left: 8, top: 0, bottom: 0, width: 2,
        background: 'linear-gradient(to bottom, #FFD700, #333)',
      }} />

      {/* Year range */}
      <div style={{
        fontFamily: "'Oswald', sans-serif", fontSize: 12, color: '#888',
        letterSpacing: 1, marginBottom: 12,
      }}>
        {minYear} — {maxYear === minYear ? 'Present' : maxYear}
      </div>

      {events.map((event, i) => (
        <div key={i} style={{ position: 'relative', marginBottom: 12, paddingLeft: 16 }}>
          {/* Dot */}
          <div style={{
            position: 'absolute', left: -16, top: 4,
            width: 10, height: 10, borderRadius: '50%',
            background: event.color, border: '2px solid #0a0a0a',
          }} />

          <div style={{
            background: event.type === 'championship' ? 'linear-gradient(135deg, #1a1400, #0f0f00)' : '#141414',
            border: `1px solid ${event.type === 'championship' ? '#3a2800' : '#222'}`,
            borderRadius: 4, padding: '8px 12px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
              <span style={{
                fontFamily: "'Oswald', sans-serif", fontSize: 11, color: '#777',
                letterSpacing: 1, background: '#1a1a1a', padding: '1px 6px',
                borderRadius: 2, border: '1px solid #333',
              }}>
                {event.date}
              </span>
              <span style={{
                fontFamily: "'Oswald', sans-serif", fontSize: 9, color: event.color,
                letterSpacing: 1, textTransform: 'uppercase',
              }}>
                {event.type === 'championship' ? 'TITLE' : event.type === 'injury' ? 'INJURY' : event.type.toUpperCase()}
              </span>
            </div>
            <div style={{
              fontFamily: "'Oswald', sans-serif", fontSize: 14, fontWeight: 600,
              color: event.color === '#FFD700' ? '#FFD700' : '#e8e0d0', marginTop: 4,
            }}>
              {event.label}
            </div>
            {event.detail && (
              <div style={{
                fontFamily: "'Crimson Pro', serif", fontSize: 13, color: '#888',
                lineHeight: 1.4, marginTop: 2,
              }}>
                {event.detail}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function PromosSection({ wrestler, promos: promosMap }) {
  const promos = promosMap?.[wrestler.id];
  if (!promos || promos.length === 0) return null;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {promos.map((promo, i) => (
        <div
          key={i}
          style={{
            background: promo.iconic ? 'linear-gradient(135deg, #1a1400, #120f00)' : '#141414',
            border: `1px solid ${promo.iconic ? '#3a2800' : '#222'}`,
            borderLeft: `3px solid ${promo.iconic ? '#FFD700' : '#444'}`,
            borderRadius: 4,
            padding: '12px 16px',
          }}
        >
          <div style={{
            fontFamily: "'Crimson Pro', serif",
            fontSize: 16,
            color: '#e8e0d0',
            fontStyle: 'italic',
            lineHeight: 1.6,
            marginBottom: 6,
          }}>
            &ldquo;{promo.quote}&rdquo;
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <span style={{
              fontFamily: "'Crimson Pro', serif",
              fontSize: 13,
              color: '#999',
            }}>
              {promo.context}
            </span>
            {promo.year && (
              <span style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: 10,
                color: '#777',
                background: '#1a1a1a',
                padding: '1px 6px',
                borderRadius: 2,
                border: '1px solid #333',
                letterSpacing: 1,
              }}>
                {promo.year}
              </span>
            )}
            {promo.iconic && (
              <span style={{
                fontSize: 9,
                fontFamily: "'Oswald', sans-serif",
                letterSpacing: 1,
                color: '#FFD700',
                background: '#2a2000',
                padding: '1px 6px',
                borderRadius: 2,
                border: '1px solid #3a2800',
                textTransform: 'uppercase',
              }}>
                Iconic
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

const MATCH_RESULT_COLORS = {
  Win: '#27ae60',
  Loss: '#cc4444',
  Draw: '#b8860b',
  'Loss (Screwjob)': '#cc4444',
  'Loss (cash-in)': '#cc4444',
};

function NotableMatchesSection({ wrestler, onNavigate, matches: matchesMap }) {
  const matches = matchesMap?.[wrestler.id];
  if (!matches || matches.length === 0) return null;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {matches.map((match, i) => {
        const resultColor = MATCH_RESULT_COLORS[match.result] || '#888';
        return (
          <div
            key={i}
            style={{
              background: match.rating >= 5 ? 'linear-gradient(135deg, #1a1400, #120f00)' : '#141414',
              border: `1px solid ${match.rating >= 5 ? '#3a2800' : '#222'}`,
              borderLeft: `3px solid ${match.rating >= 5 ? '#FFD700' : resultColor}`,
              borderRadius: 4,
              padding: '12px 16px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 6, marginBottom: 4 }}>
              <div>
                <span style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#e8e0d0',
                }}>
                  vs. {match.opponent}
                </span>
                {onNavigate && (
                  <span
                    onClick={() => onNavigate(match.opponent)}
                    style={{
                      marginLeft: 6,
                      fontSize: 11,
                      color: '#FFD700',
                      cursor: 'pointer',
                      fontFamily: "'Oswald', sans-serif",
                      letterSpacing: 1,
                      opacity: 0.6,
                    }}
                    title={`Go to ${match.opponent}`}
                  >
                    &#10095;
                  </span>
                )}
              </div>
              <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                <span style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: 10,
                  color: resultColor,
                  background: `${resultColor}15`,
                  padding: '2px 8px',
                  borderRadius: 10,
                  border: `1px solid ${resultColor}44`,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                }}>
                  {match.result}
                </span>
                {match.rating && (
                  <span style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: 11,
                    color: match.rating >= 5 ? '#FFD700' : match.rating >= 4 ? '#e8e0d0' : '#999',
                    letterSpacing: 1,
                  }}>
                    {'★'.repeat(Math.floor(match.rating))}
                    {match.rating % 1 >= 0.5 ? '½' : ''}
                  </span>
                )}
              </div>
            </div>
            <div style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: 11,
              color: '#888',
              letterSpacing: 1,
              marginBottom: 4,
              display: 'flex',
              gap: 8,
              flexWrap: 'wrap',
            }}>
              <span>{match.event}</span>
              <span style={{ color: '#555' }}>|</span>
              <span>{match.year}</span>
              <span style={{ color: '#555' }}>|</span>
              <span>{match.matchType}</span>
            </div>
            <div style={{
              fontFamily: "'Crimson Pro', serif",
              fontSize: 13,
              color: '#999',
              lineHeight: 1.5,
            }}>
              {match.description}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function MoveCard({ move, wrestler, moveGifs }) {
  const [showGif, setShowGif] = useState(false);
  const color = MOVE_CATEGORY_COLORS[move.category] || '#888';
  const names = [wrestler.name, ...(wrestler.alternateNames || [])];
  const wrestlerMoveName = move.userNames
    ? names.reduce((found, n) => found || move.userNames[n], null)
    : null;
  const gif = moveGifs?.[move.id];

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #1a1a1a, #141414)',
        border: '1px solid #2a2a2a',
        borderLeft: `3px solid ${color}`,
        borderRadius: 4,
        padding: '10px 13px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 4,
          flexWrap: 'wrap',
          gap: 6,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: 14,
              fontWeight: 600,
              color: '#e8e0d0',
            }}
          >
            {wrestlerMoveName || move.name}
          </span>
          {gif && (
            <button
              onClick={() => setShowGif(!showGif)}
              style={{
                background: 'none',
                border: `1px solid ${color}44`,
                color: color,
                fontFamily: "'Oswald', sans-serif",
                fontSize: 10,
                padding: '1px 6px',
                borderRadius: 3,
                cursor: 'pointer',
                letterSpacing: 0.5,
              }}
            >
              {showGif ? 'HIDE GIF' : 'GIF'}
            </button>
          )}
        </div>
        <span
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: 10,
            color,
            background: `${color}15`,
            padding: '2px 8px',
            borderRadius: 10,
            border: `1px solid ${color}44`,
            textTransform: 'uppercase',
            letterSpacing: 1,
          }}
        >
          {move.category}
        </span>
      </div>
      {showGif && gif && (
        <div style={{ margin: '8px 0', borderRadius: 4, overflow: 'hidden', maxWidth: 300 }}>
          <img
            src={gif}
            alt={move.name}
            style={{ width: '100%', borderRadius: 4 }}
            loading="lazy"
          />
        </div>
      )}
      <div
        style={{
          fontSize: 12,
          color: '#999',
          fontFamily: "'Crimson Pro', serif",
          lineHeight: 1.5,
        }}
      >
        {move.description}
      </div>
      {wrestlerMoveName && wrestlerMoveName !== move.name && (
        <div style={{ marginTop: 4 }}>
          <span
            style={{
              fontSize: 10,
              fontFamily: "'Oswald', sans-serif",
              color: '#777',
              background: '#1a1a1a',
              padding: '1px 6px',
              borderRadius: 3,
              border: '1px solid #2a2a2a',
            }}
          >
            aka {move.name}
          </span>
        </div>
      )}
      {move.aka?.filter(
        (a) => !wrestlerMoveName || a.toLowerCase() !== wrestlerMoveName.toLowerCase(),
      ).length > 0 && (
        <div style={{ marginTop: 4, display: 'flex', gap: 4, flexWrap: 'wrap' }}>
          {move.aka
            .filter(
              (a) =>
                !wrestlerMoveName || a.toLowerCase() !== wrestlerMoveName.toLowerCase(),
            )
            .map((name) => (
            <span
              key={name}
              style={{
                fontSize: 10,
                fontFamily: "'Oswald', sans-serif",
                color: '#777',
                background: '#1a1a1a',
                padding: '1px 6px',
                borderRadius: 3,
                border: '1px solid #2a2a2a',
              }}
            >
              aka {name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function MovesSection({ wrestler, moveGifs }) {
  const moves = getWrestlerMoves(wrestler);
  if (moves.length === 0) return null;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      {moves.map((move) => (
        <MoveCard key={move.id} move={move} wrestler={wrestler} moveGifs={moveGifs} />
      ))}
    </div>
  );
}

// ─── Championships ───────────────────────────────────────────────────────────

function ChampionshipsSection({ wrestler }) {
  const titles = wrestler.championships?.filter(
    (c) => c.title && !c.title.startsWith('See entry'),
  ) || [];

  return (
    <div>
      {titles.length > 0 && (
        <div className="wiki-narrative" style={{ marginBottom: 12 }}>
          <p className="wiki-paragraph">
            Throughout their career, {wrestler.name} captured {wrestler.totalTitleReigns || titles.length}{' '}
            championship reign{(wrestler.totalTitleReigns || titles.length) !== 1 ? 's' : ''} across{' '}
            {titles.length} different title{titles.length !== 1 ? 's' : ''}.
            {wrestler.hallOfFame
              ? ` They were inducted into the WWE Hall of Fame in ${wrestler.hallOfFame}.`
              : ''}
          </p>
        </div>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {titles.map((c, i) => (
          <div key={i} className="belt">
            <div
              style={{
                display: 'flex',
                gap: 8,
                alignItems: 'center',
                marginBottom: 3,
                flexWrap: 'wrap',
              }}
            >
              <span
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#FFD700',
                }}
              >
                {c.title}
              </span>
              {(c.reigns ? c.reigns.length : c.count) > 0 && (
                <span
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: 10,
                    color: '#B8860B',
                    background: '#120f00',
                    padding: '1px 5px',
                    borderRadius: 2,
                    border: '1px solid #2a2000',
                  }}
                >
                  {c.reigns ? c.reigns.length : c.count}&times; Champion
                </span>
              )}
            </div>
            {c.reigns
              ? c.reigns.map((r, ri) => (
                  <div
                    key={ri}
                    style={{
                      fontSize: 11,
                      color: '#999',
                      fontFamily: "'Oswald', sans-serif",
                      marginBottom: 2,
                      paddingLeft: 8,
                      borderLeft: '2px solid #2a2000',
                    }}
                  >
                    <span style={{ color: '#B8860B' }}>Reign {ri + 1}:</span>{' '}
                    {typeof r === 'string' ? r : r.date}
                    {typeof r === 'object' && r.notes ? (
                      <span
                        style={{
                          color: '#666',
                          fontFamily: "'Crimson Pro', serif",
                          fontStyle: 'italic',
                        }}
                      >
                        {' '}
                        &mdash; {r.notes}
                      </span>
                    ) : (
                      ''
                    )}
                  </div>
                ))
              : c.firstReign &&
                c.firstReign !== 'N/A' && (
                  <div
                    style={{
                      fontSize: 11,
                      color: '#666',
                      fontFamily: "'Oswald', sans-serif",
                      marginBottom: 3,
                    }}
                  >
                    First reign: {c.firstReign}
                  </div>
                )}
            {c.notable && (
              <div
                style={{
                  fontSize: 12,
                  color: '#888',
                  fontFamily: "'Crimson Pro', serif",
                  fontStyle: 'italic',
                  lineHeight: 1.5,
                  marginTop: 3,
                }}
              >
                {c.notable}
              </div>
            )}
          </div>
        ))}
      </div>
      {wrestler.totalTitleReigns > 0 && (
        <div
          style={{
            marginTop: 8,
            padding: '7px 11px',
            background: '#111',
            border: '1px solid #222',
            borderRadius: 3,
            fontFamily: "'Oswald', sans-serif",
            fontSize: 12,
            color: '#FFD700',
          }}
        >
          Total: {wrestler.totalTitleReigns} reigns
        </div>
      )}
      {titles.length === 0 && wrestler.hallOfFame && (
        <div className="wiki-paragraph">
          While not a championship titleholder, {wrestler.name} was inducted into the WWE Hall of
          Fame in {wrestler.hallOfFame}.
        </div>
      )}
    </div>
  );
}

// ─── Feuds & Rivalries ───────────────────────────────────────────────────────

function FeudItem({ name, onNavigate, scheme }) {
  const displayName = name.replace(/\s*\(.*\)$/, '').trim();
  return (
    <div
      onClick={() => onNavigate?.(name)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        background: scheme.bg,
        border: `1px solid ${scheme.border}`,
        borderLeft: `3px solid ${scheme.borderLeft}`,
        borderRadius: 4,
        padding: '8px 12px',
        cursor: 'pointer',
        transition: 'border-color 0.15s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = scheme.hoverBorder)}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = scheme.border;
        e.currentTarget.style.borderLeftColor = scheme.borderLeft;
      }}
    >
      <span
        style={{
          fontFamily: "'Oswald', sans-serif",
          fontSize: 13,
          color: scheme.textActive,
          fontWeight: 500,
        }}
      >
        {displayName}
      </span>
      <span style={{ marginLeft: 'auto', fontSize: 10, color: scheme.arrow }}>&#10095;</span>
    </div>
  );
}

const RIVAL_SCHEME = {
  bg: '#1a0f0f',
  border: '#3a1a1a',
  borderLeft: '#6a2a2a',
  hoverBorder: '#8a3a3a',
  text: '#8a6a6a',
  textActive: '#d0a0a0',
  underline: '#6a2a2a',
  arrow: '#6a2a2a',
};

const ALLY_SCHEME = {
  bg: '#0f1a0f',
  border: '#1a3a1a',
  borderLeft: '#2a6a2a',
  hoverBorder: '#2a8a2a',
  text: '#6a8a6a',
  textActive: '#a0d0a0',
  underline: '#2a6a2a',
  arrow: '#2a6a2a',
};

const MANAGER_SCHEME = {
  bg: '#1a0f1a',
  border: '#3a1a3a',
  borderLeft: '#6a2a6a',
  hoverBorder: '#8a3a8a',
  text: '#8a6a8a',
  textActive: '#d0a0d0',
  underline: '#6a2a6a',
  arrow: '#6a2a6a',
};

function FeudsSection({ wrestler, onNavigate }) {
  return (
    <div>
      {wrestler.rivals?.length > 0 && (
        <>
          <div className="wiki-sub-heading" style={{ color: '#d05050' }}>
            Rivals & Enemies
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 16 }}>
            {wrestler.rivals.map((rival, i) => (
              <FeudItem key={i} name={rival} onNavigate={onNavigate} scheme={RIVAL_SCHEME} />
            ))}
          </div>
        </>
      )}
      {wrestler.allies?.length > 0 && (
        <>
          <div className="wiki-sub-heading" style={{ color: '#50b060' }}>
            Allies & Partners
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {wrestler.allies.map((ally, i) => (
              <FeudItem key={i} name={ally} onNavigate={onNavigate} scheme={ALLY_SCHEME} />
            ))}
          </div>
        </>
      )}
      {wrestler.managers?.length > 0 && (
        <>
          <div className="wiki-sub-heading" style={{ color: '#b070d0', marginTop: 16 }}>
            Managers & Valets
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {wrestler.managers.map((mgr, i) => (
              <FeudItem key={i} name={mgr} onNavigate={onNavigate} scheme={MANAGER_SCHEME} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ─── Teams & Factions ────────────────────────────────────────────────────────

function TeamsSection({ wrestler, onNavigate }) {
  return (
    <div>
      {wrestler.tagTeams?.length > 0 && (
        <>
          <div className="wiki-sub-heading" style={{ color: '#4a9eff' }}>
            Tag Teams
          </div>
          {wrestler.tagTeams.map((t, i) => (
            <div key={i} className="team-card">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: 5,
                  flexWrap: 'wrap',
                  gap: 5,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: 14,
                    fontWeight: 600,
                    color: '#4a9eff',
                  }}
                >
                  {t.name}
                </div>
                <div style={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                  {(t.eras || []).map((eId) => {
                    const color = ERA_COLORS[eId];
                    const era = ERAS.find((e) => e.id === eId);
                    if (!color) return null;
                    return (
                      <span
                        key={eId}
                        className="era-pill"
                        style={{ background: color + '22', color, border: `1px solid ${color}44` }}
                      >
                        {era?.label}
                      </span>
                    );
                  })}
                </div>
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: '#666',
                  fontFamily: "'Oswald', sans-serif",
                  marginBottom: 4,
                }}
              >
                Partners:{' '}
                <ClickableNames names={t.partners || []} onNavigate={onNavigate} color="#88b8e8" />
              </div>
              {t.notes && (
                <div
                  style={{
                    fontSize: 12,
                    color: '#aaa',
                    fontFamily: "'Crimson Pro', serif",
                    fontStyle: 'italic',
                    lineHeight: 1.5,
                  }}
                >
                  {t.notes}
                </div>
              )}
            </div>
          ))}
        </>
      )}
      {wrestler.factions?.length > 0 && (
        <>
          <div className="wiki-sub-heading" style={{ color: '#b39ddb', marginTop: 12 }}>
            Stables & Factions
          </div>
          {wrestler.factions.map((f, i) => (
            <div key={i} className="faction-card">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: 5,
                  flexWrap: 'wrap',
                  gap: 5,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: 14,
                    fontWeight: 600,
                    color: '#b39ddb',
                  }}
                >
                  {f.name}
                </div>
                <div style={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                  {(f.eras || []).map((eId) => {
                    const color = ERA_COLORS[eId];
                    const era = ERAS.find((e) => e.id === eId);
                    if (!color) return null;
                    return (
                      <span
                        key={eId}
                        className="era-pill"
                        style={{ background: color + '22', color, border: `1px solid ${color}44` }}
                      >
                        {era?.label}
                      </span>
                    );
                  })}
                </div>
              </div>
              {f.members?.length > 0 && (
                <div
                  style={{
                    fontSize: 11,
                    color: '#666',
                    fontFamily: "'Oswald', sans-serif",
                    marginBottom: 4,
                  }}
                >
                  Members:{' '}
                  <ClickableNames names={f.members} onNavigate={onNavigate} color="#c8b0e8" />
                </div>
              )}
              {f.notes && (
                <div
                  style={{
                    fontSize: 12,
                    color: '#aaa',
                    fontFamily: "'Crimson Pro', serif",
                    fontStyle: 'italic',
                    lineHeight: 1.5,
                  }}
                >
                  {f.notes}
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
}

// ─── Training Lineage ───────────────────────────────────────────────────────

const TRAINER_SCHEME = {
  bg: '#1a1400',
  border: '#3a2800',
  borderLeft: '#6a5000',
  hoverBorder: '#FFD700',
  textActive: '#d4b86a',
  arrow: '#6a5000',
};

const TRAINEE_SCHEME = {
  bg: '#0f1a1a',
  border: '#1a3a3a',
  borderLeft: '#2a6a6a',
  hoverBorder: '#40b0b0',
  textActive: '#a0d0d0',
  arrow: '#2a6a6a',
};

function TrainingSection({ wrestler, onNavigate }) {
  const { trainedBy, trainees } = getTrainingData(wrestler);
  return (
    <div>
      {trainedBy.length > 0 && (
        <>
          <div className="wiki-sub-heading" style={{ color: '#FFD700' }}>
            Trained By
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 16 }}>
            {trainedBy.map((name, i) => (
              <FeudItem key={i} name={name} onNavigate={onNavigate} scheme={TRAINER_SCHEME} />
            ))}
          </div>
        </>
      )}
      {trainees.length > 0 && (
        <>
          <div className="wiki-sub-heading" style={{ color: '#40b0b0' }}>
            Trained
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {trainees.map((name, i) => (
              <FeudItem key={i} name={name} onNavigate={onNavigate} scheme={TRAINEE_SCHEME} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ─── Brand History ──────────────────────────────────────────────────────────

function BrandHistorySection({ wrestler }) {
  const history = wrestler.brandHistory || [];
  const draftNote = DRAFT_NOTES[wrestler.id];

  return (
    <div>
      {wrestler.currentBrand && (
        <div style={{ marginBottom: 20 }}>
          <div className="wiki-field-label">Current Brand</div>
          <span
            className="brand-badge"
            style={{
              fontSize: 14,
              padding: '4px 14px',
              color: BRAND_COLORS[wrestler.currentBrand],
              background: (BRAND_COLORS[wrestler.currentBrand]) + '18',
              border: `1px solid ${BRAND_COLORS[wrestler.currentBrand]}44`,
            }}
          >
            {wrestler.currentBrand}
          </span>
        </div>
      )}
      {history.length > 0 && (
        <div style={{ marginBottom: 20 }}>
          <div className="wiki-field-label">Brand Timeline</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {history.map((bh, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '8px 14px',
                  background: '#141414',
                  borderRadius: 4,
                  borderLeft: `3px solid ${BRAND_COLORS[bh.brand] || '#888'}`,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: 14,
                    fontWeight: 600,
                    color: BRAND_COLORS[bh.brand] || '#888',
                    minWidth: 90,
                  }}
                >
                  {bh.brand}
                </span>
                <span style={{ fontFamily: "'Crimson Pro', serif", fontSize: 14, color: '#999' }}>
                  {bh.from}{bh.to && bh.to !== bh.from ? `–${bh.to}` : ''}{!bh.to ? '–present' : ''}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
      {draftNote && (
        <div style={{ marginTop: 16 }}>
          <div className="wiki-field-label">Draft Notes</div>
          <div
            style={{
              padding: '10px 14px',
              background: '#141414',
              borderLeft: '3px solid #FFD700',
              borderRadius: 4,
              fontFamily: "'Crimson Pro', serif",
              fontSize: 14,
              color: '#999',
            }}
          >
            {draftNote}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Personal Life ───────────────────────────────────────────────────────────

function PersonalLifeSection({ personal, onNavigate }) {
  if (!personal) return null;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {personal.spouses?.length > 0 && (
        <>
          <div className="wiki-sub-heading" style={{ color: '#c8845a' }}>
            Relationships & Marriages
          </div>
          {personal.spouses.map((s, i) => (
            <div
              key={i}
              style={{
                background: 'linear-gradient(135deg, #1a1208, #120d05)',
                border: '1px solid #3a2510',
                borderLeft: '3px solid #c8845a',
                borderRadius: 4,
                padding: '10px 13px',
                margin: '3px 0',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: s.notes ? 5 : 0,
                  flexWrap: 'wrap',
                  gap: 6,
                }}
              >
                {(() => {
                  const cleanName = s.name.replace(/\s*\(.*\)$/, '').trim();
                  const isKnown = onNavigate && KNOWN_WRESTLER_NAMES.has(cleanName.toLowerCase());
                  return (
                    <span
                      style={{
                        fontFamily: "'Oswald', sans-serif",
                        fontSize: 14,
                        fontWeight: 600,
                        color: isKnown ? '#FFD700' : '#e8c9a0',
                        cursor: isKnown ? 'pointer' : undefined,
                        textDecoration: isKnown ? 'underline' : undefined,
                        textDecorationColor: 'transparent',
                        transition: 'text-decoration-color 0.15s',
                      }}
                      onClick={isKnown ? () => onNavigate(cleanName) : undefined}
                      onMouseEnter={isKnown ? (e) => (e.currentTarget.style.textDecorationColor = '#FFD700') : undefined}
                      onMouseLeave={isKnown ? (e) => (e.currentTarget.style.textDecorationColor = 'transparent') : undefined}
                    >
                      {s.name}
                    </span>
                  );
                })()}
                {s.years && (
                  <span
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: 10,
                      color: '#c8845a',
                      background: '#1e1008',
                      padding: '1px 6px',
                      borderRadius: 2,
                      border: '1px solid #3a2510',
                    }}
                  >
                    {s.years}
                  </span>
                )}
              </div>
              {s.notes && (
                <div
                  style={{
                    fontSize: 12,
                    color: '#aaa',
                    fontFamily: "'Crimson Pro', serif",
                    fontStyle: 'italic',
                    lineHeight: 1.5,
                  }}
                >
                  {s.notes}
                </div>
              )}
            </div>
          ))}
        </>
      )}
      {personal.children?.length > 0 && (
        <>
          <div className="wiki-sub-heading" style={{ color: '#7eb8a0', marginTop: 10 }}>
            Children
          </div>
          {personal.children.map((c, i) => (
            <div
              key={i}
              style={{
                background: '#0f1a14',
                border: '1px solid #1a3a28',
                borderLeft: '3px solid #3a8a68',
                borderRadius: 4,
                padding: '9px 13px',
                margin: '3px 0',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: c.notes ? 4 : 0,
                  flexWrap: 'wrap',
                  gap: 6,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: 13,
                    fontWeight: 600,
                    color: '#a0c8b8',
                  }}
                >
                  {c.name}
                </span>
                {c.born && (
                  <span
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: 10,
                      color: '#5a9a80',
                      background: '#0a1a12',
                      padding: '1px 6px',
                      borderRadius: 2,
                      border: '1px solid #1a3a28',
                    }}
                  >
                    b. {c.born}
                  </span>
                )}
              </div>
              {c.notes && (
                <div
                  style={{
                    fontSize: 12,
                    color: '#888',
                    fontFamily: "'Crimson Pro', serif",
                    fontStyle: 'italic',
                    lineHeight: 1.5,
                  }}
                >
                  {c.notes}
                </div>
              )}
            </div>
          ))}
        </>
      )}
      {personal.legalIssues?.length > 0 && (
        <>
          <div className="wiki-sub-heading" style={{ color: '#c8784a', marginTop: 10 }}>
            Run-ins with the Law
          </div>
          {personal.legalIssues.map((l, i) => (
            <div
              key={i}
              style={{
                background: 'linear-gradient(135deg, #1a1000, #120a00)',
                border: '1px solid #3a2000',
                borderLeft: '3px solid #c8784a',
                borderRadius: 4,
                padding: '10px 13px',
                margin: '3px 0',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 5,
                  flexWrap: 'wrap',
                  gap: 6,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: 13,
                    fontWeight: 600,
                    color: '#e0a060',
                  }}
                >
                  {l.incident}
                </span>
                <span
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: 10,
                    color: '#c8784a',
                    background: '#1a1000',
                    padding: '2px 6px',
                    borderRadius: 2,
                    border: '1px solid #3a2000',
                  }}
                >
                  {l.year}
                </span>
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: '#aaa',
                  fontFamily: "'Crimson Pro', serif",
                  fontStyle: 'italic',
                  lineHeight: 1.5,
                }}
              >
                {l.details}
              </div>
            </div>
          ))}
        </>
      )}
      {personal.announcing?.length > 0 && (
        <>
          <div className="wiki-sub-heading" style={{ color: '#5a8ab0', marginTop: 10 }}>
            Commentary & Announcing
          </div>
          {personal.announcing.map((a, i) => (
            <div
              key={i}
              style={{
                background: '#0f1520',
                border: '1px solid #1a2a3a',
                borderLeft: '3px solid #5a8ab0',
                borderRadius: 4,
                padding: '10px 13px',
                margin: '3px 0',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: a.notes ? 5 : 0,
                  flexWrap: 'wrap',
                  gap: 6,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: 13,
                    fontWeight: 600,
                    color: '#8ab8e0',
                  }}
                >
                  {a.role} &mdash; {a.show}
                </span>
                {a.years && (
                  <span
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: 10,
                      color: '#5a8ab0',
                      background: '#0a1520',
                      padding: '1px 6px',
                      borderRadius: 2,
                      border: '1px solid #1a2a3a',
                    }}
                  >
                    {a.years}
                  </span>
                )}
              </div>
              {a.notes && (
                <div
                  style={{
                    fontSize: 12,
                    color: '#aaa',
                    fontFamily: "'Crimson Pro', serif",
                    fontStyle: 'italic',
                    lineHeight: 1.5,
                  }}
                >
                  {a.notes}
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
}

// ─── Injuries & Health ───────────────────────────────────────────────────────

function InjuriesSection({ wrestler }) {
  return (
    <div>
      {wrestler.deceased && (
        <div
          style={{
            background: 'linear-gradient(135deg, #1a0a0a, #120505)',
            border: '1px solid #4a1a1a',
            borderLeft: '3px solid #aa3333',
            borderRadius: 4,
            padding: '12px 14px',
            marginBottom: 12,
          }}
        >
          <div
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: 13,
              fontWeight: 600,
              color: '#ff6666',
              marginBottom: 4,
            }}
          >
            Deceased &mdash; {wrestler.deceased.year}
          </div>
          {wrestler.deceased.details && (
            <div
              style={{
                fontSize: 12,
                color: '#aaa',
                fontFamily: "'Crimson Pro', serif",
                fontStyle: 'italic',
                lineHeight: 1.5,
              }}
            >
              {wrestler.deceased.details}
            </div>
          )}
        </div>
      )}
      {wrestler.injuries?.length > 0 && (
        <>
          <div className="wiki-sub-heading" style={{ color: '#cc4444' }}>
            Injury History
          </div>
          {wrestler.injuries.map((inj, i) => (
            <div key={i} className="injury-card">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 5,
                  flexWrap: 'wrap',
                  gap: 5,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: 13,
                    fontWeight: 600,
                    color: '#ff6666',
                  }}
                >
                  {inj.injury}
                </div>
                <span
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: 10,
                    color: '#cc4444',
                    background: '#1a0000',
                    padding: '2px 6px',
                    borderRadius: 2,
                    border: '1px solid #3a0000',
                  }}
                >
                  {inj.year}
                </span>
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: '#aaa',
                  fontFamily: "'Crimson Pro', serif",
                  fontStyle: 'italic',
                  lineHeight: 1.5,
                }}
              >
                {inj.cause}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

// ─── Trivia & Facts ──────────────────────────────────────────────────────────

function TriviaSection({ personal }) {
  if (!personal?.facts?.length) return null;
  return (
    <div
      style={{
        background: '#16101a',
        border: '1px solid #2a1a3a',
        borderRadius: 4,
        padding: '10px 13px',
      }}
    >
      {personal.facts.map((fact, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            gap: 10,
            alignItems: 'flex-start',
            padding: '5px 0',
            borderBottom: i < personal.facts.length - 1 ? '1px solid #2a1a3a' : 'none',
          }}
        >
          <span
            style={{
              color: '#a070d0',
              fontFamily: "'Oswald', sans-serif",
              fontSize: 12,
              marginTop: 1,
              flexShrink: 0,
            }}
          >
            &mdash;
          </span>
          <span
            style={{
              fontSize: 13,
              color: '#c8b8e0',
              fontFamily: "'Crimson Pro', serif",
              lineHeight: 1.55,
            }}
          >
            {fact}
          </span>
        </div>
      ))}
    </div>
  );
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatBirthday(dateStr) {
  try {
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  } catch {
    return dateStr;
  }
}

// ─── Group Sections (Tag Teams & Factions) ──────────────────────────────────

function GroupOverviewSection({ wrestler }) {
  const eraIds = [...new Set(wrestler.eras.filter((e) => e.era !== 'all').map((e) => e.era))];
  const titles =
    wrestler.championships?.filter((c) => c.title && !c.title.startsWith('See entry')) || [];
  const totalReigns = wrestler.totalTitleReigns || 0;

  return (
    <div className="wiki-narrative">
      <div className="wiki-stats-box">
        <div className="wiki-stats-title">Quick Facts</div>
        <div className="wiki-stats-grid">
          {wrestler.realName && wrestler.realName !== wrestler.name && (
            <div className="wiki-stat">
              <span className="wiki-stat-label">Members</span>
              <span className="wiki-stat-value">{wrestler.realName}</span>
            </div>
          )}
          {eraIds.length > 0 && (
            <div className="wiki-stat">
              <span className="wiki-stat-label">Eras Active</span>
              <span className="wiki-stat-value">
                {eraIds
                  .map((id) => {
                    const era = ERAS.find((e) => e.id === id);
                    return era?.label || id;
                  })
                  .join(', ')}
              </span>
            </div>
          )}
          {totalReigns > 0 && (
            <div className="wiki-stat">
              <span className="wiki-stat-label">Title Reigns</span>
              <span className="wiki-stat-value">{totalReigns}</span>
            </div>
          )}
          {titles.length > 0 && (
            <div className="wiki-stat">
              <span className="wiki-stat-label">Championships</span>
              <span className="wiki-stat-value">{titles.length}</span>
            </div>
          )}
          {wrestler.hallOfFame && (
            <div className="wiki-stat">
              <span className="wiki-stat-label">Hall of Fame</span>
              <span className="wiki-stat-value">{wrestler.hallOfFame}</span>
            </div>
          )}
        </div>
        {wrestler.alternateNames?.length > 0 && (
          <div style={{ marginTop: 10 }}>
            <span className="wiki-stat-label">Also Known As</span>
            <div style={{ marginTop: 4, display: 'flex', flexWrap: 'wrap', gap: 4 }}>
              {wrestler.alternateNames.map((n, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: 12,
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
          </div>
        )}
      </div>
    </div>
  );
}

function MembersSection({ wrestler, onNavigate }) {
  const memberNames = wrestler.realName
    .split(/\s*[,&]\s*/)
    .map((n) => n.trim())
    .filter((n) => n && !/^(others|more)$/i.test(n));

  return (
    <div>
      <div className="wiki-sub-heading" style={{ color: '#4a9eff' }}>
        Known Members
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {memberNames.map((name, i) => (
          <div
            key={i}
            onClick={() => onNavigate?.(name)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              background: '#0f1520',
              border: '1px solid #1a2a3a',
              borderLeft: '3px solid #4a9eff',
              borderRadius: 4,
              padding: '8px 12px',
              cursor: 'pointer',
              transition: 'border-color 0.15s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#6ab8ff')}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#1a2a3a';
              e.currentTarget.style.borderLeftColor = '#4a9eff';
            }}
          >
            <span
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: 13,
                color: '#88b8e8',
                fontWeight: 500,
              }}
            >
              {name}
            </span>
            <span style={{ marginLeft: 'auto', fontSize: 10, color: '#4a6a8a' }}>&#10095;</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ClickableNames({ names, onNavigate, color }) {
  if (!names || names.length === 0) return 'None';
  return names.map((name, i) => {
    const displayName = name.replace(/\s*\(.*\)$/, '').trim();
    return (
      <span key={i}>
        <span
          onClick={() => onNavigate?.(name)}
          style={{
            color,
            cursor: 'pointer',
            textDecoration: 'underline',
            textDecorationColor: 'transparent',
            transition: 'text-decoration-color 0.15s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.textDecorationColor = color)}
          onMouseLeave={(e) => (e.currentTarget.style.textDecorationColor = 'transparent')}
        >
          {displayName}
        </span>
        {i < names.length - 1 ? ', ' : ''}
      </span>
    );
  });
}
