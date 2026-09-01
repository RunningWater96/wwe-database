import { useEffect, useRef } from 'react';

export default function ImageLightbox({ imageUrl, wrestlerName, onClose }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    // Focus the overlay to trap focus inside the modal
    overlayRef.current?.focus();
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div
      ref={overlayRef}
      onClick={onClose}
      role="dialog"
      aria-label={`${wrestlerName} photo`}
      tabIndex={-1}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.85)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        outline: 'none',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          maxWidth: '80vw',
          maxHeight: '85vh',
          borderRadius: 8,
          overflow: 'hidden',
          border: '2px solid #FFD700',
          boxShadow: '0 0 60px rgba(255,215,0,0.2)',
        }}
      >
        <img
          src={imageUrl}
          alt={wrestlerName}
          style={{ display: 'block', maxWidth: '80vw', maxHeight: '85vh', objectFit: 'contain' }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
            padding: '20px 16px 12px',
            fontFamily: "'Oswald', sans-serif",
            fontSize: 18,
            fontWeight: 700,
            color: '#FFD700',
            letterSpacing: 1,
            textAlign: 'center',
          }}
        >
          {wrestlerName}
        </div>
        <button
          onClick={onClose}
          aria-label="Close image"
          style={{
            position: 'absolute',
            top: 8,
            right: 8,
            background: 'rgba(0,0,0,0.6)',
            border: '1px solid #555',
            color: '#e8e0d0',
            width: 32,
            height: 32,
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
