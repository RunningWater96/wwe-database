import { useEffect } from 'react';

/**
 * Global keyboard shortcuts for power users.
 *
 * @param {Object} handlers
 * @param {Function} handlers.onEscape  – called when Escape is pressed (outside inputs)
 * @param {Function} handlers.onSearch  – called when "/" is pressed (outside inputs); receives the KeyboardEvent
 */
export default function useKeyboardShortcuts({ onEscape, onSearch }) {
  useEffect(() => {
    const handler = (e) => {
      const tag = document.activeElement?.tagName;
      const isEditable =
        tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' ||
        document.activeElement?.isContentEditable;

      if (e.key === 'Escape') {
        // Escape works even inside inputs (to dismiss/close things)
        if (onEscape) onEscape(e);
        return;
      }

      // All other shortcuts are suppressed while typing in a form field
      if (isEditable) return;

      if (e.key === '/') {
        e.preventDefault();
        if (onSearch) onSearch(e);
      }
    };

    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onEscape, onSearch]);
}
