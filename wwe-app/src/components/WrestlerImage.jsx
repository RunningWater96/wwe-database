import { useState, memo } from 'react';
import { WRESTLER_IMAGES } from '../data';
import { getWrestlerInitials, getPlaceholderColor } from '../utils/wrestlerHelpers';

/**
 * Shared wrestler image component with error fallback and fade-in.
 * Replaces raw <img> tags to provide consistent loading UX.
 */
export default memo(function WrestlerImage({ id, name, size = 48, style = {}, eager = false }) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const src = WRESTLER_IMAGES[id];
  const initials = getWrestlerInitials(name);
  const bg = getPlaceholderColor(id);
  const fontSize = Math.max(10, Math.round(size * 0.33));

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        overflow: 'hidden',
        flexShrink: 0,
        background: bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        ...style,
      }}
    >
      {src && !failed ? (
        <>
          {/* Placeholder initials shown while loading */}
          {!loaded && (
            <span
              style={{
                position: 'absolute',
                fontFamily: "'Oswald', sans-serif",
                fontSize,
                fontWeight: 700,
                color: '#e8e0d0',
                letterSpacing: 1,
                userSelect: 'none',
              }}
            >
              {initials}
            </span>
          )}
          <img
            src={src}
            alt={name}
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={eager ? 'high' : undefined}
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top',
              opacity: loaded ? 1 : 0,
              transition: 'opacity 0.2s ease-in',
            }}
          />
        </>
      ) : (
        <span
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize,
            fontWeight: 700,
            color: '#e8e0d0',
            letterSpacing: 1,
            userSelect: 'none',
          }}
        >
          {initials}
        </span>
      )}
    </div>
  );
});
