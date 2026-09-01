import { useEffect } from 'react';
import { DEFAULT_FILTERS, DECADES, countActiveFilters, loadMoveCategoriesForFilter } from '../utils/filterHelpers';

export default function AdvancedFilters({ advancedFilters, setAdvancedFilters, isOpen, onClose }) {
  // Preload move categories when filter panel opens (needed for Fighting Style filter)
  useEffect(() => {
    if (isOpen) loadMoveCategoriesForFilter();
  }, [isOpen]);

  if (!isOpen) return null;

  const activeCount = countActiveFilters(advancedFilters);

  const toggleArrayFilter = (key, value) => {
    setAdvancedFilters((prev) => {
      const arr = prev[key];
      return {
        ...prev,
        [key]: arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value],
      };
    });
  };

  const toggleSingleFilter = (key, value) => {
    setAdvancedFilters((prev) => ({
      ...prev,
      [key]: prev[key] === value ? null : value,
    }));
  };

  return (
    <div className="advanced-filters-overlay" onClick={onClose}>
      <div className="advanced-filters-panel" onClick={(e) => e.stopPropagation()}>
        <div className="advanced-filters-header">
          <span className="advanced-filters-title">Filters</span>
          <button className="advanced-filters-close" onClick={onClose}>✕</button>
        </div>
      {/* Status */}
      <div className="filter-section">
        <span className="filter-section-label">Status</span>
        <div className="filter-section-options">
          <button
            className={`era-btn${advancedFilters.status.includes('active') ? ' active' : ''}`}
            onClick={() => toggleArrayFilter('status', 'active')}
          >
            Active
          </button>
          <button
            className={`era-btn${advancedFilters.status.includes('deceased') ? ' active' : ''}`}
            onClick={() => toggleArrayFilter('status', 'deceased')}
          >
            Deceased
          </button>
          <button
            className={`era-btn${advancedFilters.status.includes('hallOfFame') ? ' active' : ''}`}
            onClick={() => toggleArrayFilter('status', 'hallOfFame')}
          >
            Hall of Famer
          </button>
        </div>
      </div>

      {/* Gender */}
      <div className="filter-section">
        <span className="filter-section-label">Gender</span>
        <div className="filter-section-options">
          <button
            className={`era-btn${advancedFilters.gender === 'male' ? ' active' : ''}`}
            onClick={() => toggleSingleFilter('gender', 'male')}
          >
            Male
          </button>
          <button
            className={`era-btn${advancedFilters.gender === 'female' ? ' active' : ''}`}
            onClick={() => toggleSingleFilter('gender', 'female')}
          >
            Female
          </button>
          <button
            className={`era-btn${advancedFilters.gender === 'mixed' ? ' active' : ''}`}
            onClick={() => toggleSingleFilter('gender', 'mixed')}
          >
            Mixed
          </button>
        </div>
      </div>

      {/* Championships */}
      <div className="filter-section">
        <span className="filter-section-label">Championships</span>
        <div className="filter-section-options">
          {[
            { value: 'has', label: 'Has Titles' },
            { value: 'none', label: 'No Titles' },
            { value: '5plus', label: '5+' },
            { value: '10plus', label: '10+' },
          ].map((opt) => (
            <button
              key={opt.value}
              className={`era-btn${advancedFilters.championships === opt.value ? ' active' : ''}`}
              onClick={() => toggleSingleFilter('championships', opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Decade Active */}
      <div className="filter-section">
        <span className="filter-section-label">Decade Active</span>
        <div className="filter-section-options">
          {DECADES.map((decade) => (
            <button
              key={decade}
              className={`era-btn${advancedFilters.decades.includes(decade) ? ' active' : ''}`}
              onClick={() => toggleArrayFilter('decades', decade)}
            >
              {decade}
            </button>
          ))}
        </div>
      </div>

      {/* Fighting Style */}
      <div className="filter-section">
        <span className="filter-section-label">Fighting Style</span>
        <div className="filter-section-options">
          {[
            { value: 'strikes', label: 'Strikes' },
            { value: 'slams', label: 'Slams' },
            { value: 'suplexes', label: 'Suplexes' },
            { value: 'submissions', label: 'Submissions' },
            { value: 'aerial', label: 'Aerial' },
            { value: 'throws', label: 'Throws' },
            { value: 'signature', label: 'Signature' },
          ].map((opt) => (
            <button
              key={opt.value}
              className={`era-btn${advancedFilters.fightingStyle === opt.value ? ' active' : ''}`}
              onClick={() => toggleSingleFilter('fightingStyle', opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Clear All */}
        <div className="advanced-filters-footer">
          <button
            className="filter-clear-btn"
            disabled={activeCount === 0}
            onClick={() => {
              setAdvancedFilters(DEFAULT_FILTERS);
            }}
          >
            {activeCount > 0 ? `Clear All Filters (${activeCount})` : 'No Active Filters'}
          </button>
        </div>
      </div>
    </div>
  );
}
