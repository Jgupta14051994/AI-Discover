import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const discover = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('/api/discover', {});
      setResult(response.data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1>🤖 AI Discover</h1>
      <p>Click the button below to start your AI discovery journey!</p>
      
      <button 
        onClick={discover} 
        disabled={loading}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: loading ? 'not-allowed' : 'pointer',
          backgroundColor: loading ? '#ccc' : '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px'
        }}
      >
        {loading ? '⏳ Discovering...' : '🚀 Start Discovery'}
      </button>

      {error && (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f8d7da', color: '#721c24', borderRadius: '5px' }}>
          <strong>Error:</strong> {error}
        </div>
      )}

      {result && (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#d1ecf1', borderRadius: '5px' }}>
          <h3>Results:</h3>
          <pre style={{ background: '#f0f0f0', padding: '10px', borderRadius: '5px', overflow: 'auto' }}>
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

export default App;
