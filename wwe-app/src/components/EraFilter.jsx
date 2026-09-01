import { ERAS } from '../data';

export default function EraFilter({ selectedEra, setSelectedEra }) {
  return (
    <div
      style={{
        background: '#0d0d0d',
        borderBottom: '1px solid #1e1e1e',
        padding: '8px 20px',
        display: 'flex',
        gap: 5,
        flexWrap: 'wrap',
      }}
    >
      {ERAS.map((era) => (
        <button
          key={era.id}
          className={`era-btn ${selectedEra === era.id ? 'active' : ''}`}
          style={{ '--era-color': era.color }}
          onClick={() => setSelectedEra(era.id)}
        >
          {era.label}
          {era.subtitle ? ` · ${era.subtitle}` : ''}
        </button>
      ))}
    </div>
  );
}
