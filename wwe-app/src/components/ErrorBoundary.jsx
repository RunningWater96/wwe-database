import { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error(`[${this.props.featureName || 'ErrorBoundary'}]`, error, info);
  }

  reset = () => {
    this.setState({ hasError: false, error: null });
    this.props.onReset?.();
  };

  render() {
    if (this.state.hasError) {
      const featureName = this.props.featureName || 'This feature';
      const errorMessage = this.state.error?.message || 'Unknown error';
      const truncated =
        errorMessage.length > 200 ? errorMessage.slice(0, 200) + '...' : errorMessage;

      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '40vh',
            padding: '2rem',
            background: '#1a1a1a',
            color: '#e8e0d0',
            fontFamily: "'Oswald', sans-serif",
            borderRadius: '8px',
            margin: '1rem',
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: '50%',
              background: '#2a1a1a',
              border: '2px solid #FFD700',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#FFD700',
              marginBottom: '1rem',
            }}
          >
            !
          </div>
          <h2
            style={{
              fontSize: '1.4rem',
              color: '#FFD700',
              marginBottom: '0.5rem',
              textAlign: 'center',
            }}
          >
            {featureName} crashed
          </h2>
          <pre
            style={{
              background: '#111',
              color: '#999',
              padding: '0.75rem 1.25rem',
              borderRadius: '6px',
              maxWidth: '500px',
              width: '100%',
              overflow: 'auto',
              fontFamily: "'Crimson Pro', monospace",
              fontSize: '0.85rem',
              marginBottom: '1.5rem',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              textAlign: 'left',
            }}
          >
            {truncated}
          </pre>
          <button
            onClick={this.reset}
            style={{
              background: '#FFD700',
              color: '#0a0a0a',
              border: 'none',
              padding: '0.6rem 2rem',
              borderRadius: '4px',
              fontFamily: "'Oswald', sans-serif",
              fontSize: '1rem',
              cursor: 'pointer',
              fontWeight: 600,
              letterSpacing: 0.5,
            }}
          >
            Try Again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
