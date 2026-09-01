import { WWE_SHOWS } from '../data';

const DAY_ORDER = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
  'Weekly',
];

function ShowCard({ show }) {
  return (
    <div className="schedule-show-card" style={{ borderLeft: `4px solid ${show.color}` }}>
      <div className="schedule-show-header">
        <div className="schedule-show-name" style={{ color: show.color }}>{show.name}</div>
        <span className="schedule-show-badge">{show.network}</span>
      </div>
      <div className="schedule-show-details">
        <div className="schedule-detail-row">
          <span className="schedule-label">When</span>
          <span>{show.day}s at {show.time}</span>
        </div>
        <div className="schedule-detail-row">
          <span className="schedule-label">Duration</span>
          <span>{show.duration}</span>
        </div>
        <div className="schedule-detail-row">
          <span className="schedule-label">Watch Live</span>
          <span>{show.network}</span>
        </div>
        <div className="schedule-detail-row">
          <span className="schedule-label">Streaming</span>
          <span>{show.streaming}</span>
        </div>
      </div>
      <div className="schedule-show-desc">{show.description}</div>
      <div className="schedule-established">Est. {show.established}</div>
    </div>
  );
}

function WeeklyScheduleBar() {
  const sorted = [...WWE_SHOWS].sort(
    (a, b) => DAY_ORDER.indexOf(a.day) - DAY_ORDER.indexOf(b.day),
  );

  return (
    <div className="schedule-weekly-bar">
      {sorted.map((show) => (
        <div
          key={show.id}
          className="schedule-weekly-item"
          style={{ borderTop: `3px solid ${show.color}` }}
        >
          <div className="schedule-weekly-day">{show.day}</div>
          <div className="schedule-weekly-show" style={{ color: show.color }}>
            {show.name.replace('Monday Night ', '').replace('Friday Night ', '')}
          </div>
          <div className="schedule-weekly-time">{show.time}</div>
          <div className="schedule-weekly-network">{show.network}</div>
        </div>
      ))}
    </div>
  );
}

export default function ScheduleView() {
  return (
    <div className="schedule-container">
      <div className="stats-header">WWE TV Schedule</div>
      <div className="stats-subtitle">Weekly shows, channels, and streaming info</div>

      <div className="schedule-section">
        <WeeklyScheduleBar />
        <div className="schedule-shows-grid">
          {[...WWE_SHOWS]
            .sort((a, b) => DAY_ORDER.indexOf(a.day) - DAY_ORDER.indexOf(b.day))
            .map((show) => (
              <ShowCard key={show.id} show={show} />
            ))}
        </div>
      </div>
    </div>
  );
}
