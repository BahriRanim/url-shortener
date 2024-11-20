import React, { useState } from 'react';
import axios from 'axios';

const App: React.FC = () => {
    const [longUrl, setLongUrl] = useState<string>('');
    const [shortCode, setShortCode] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        try {
            const response = await axios.post('http://localhost:5000/api/shorten', { longUrl });
            setShortCode(response.data.shortCode);
        } catch (error) {
            setError('Something went wrong! Please try again.');
        }
    };

    return (
        <div className="App" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>URL Shortener</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="longUrl" style={{ display: 'block', marginBottom: '10px' }}>
                    Enter a long URL:
                </label>
                <input
                    type="text"
                    id="longUrl"
                    value={longUrl}
                    onChange={(e) => setLongUrl(e.target.value)}
                    placeholder="https://example.com"
                    style={{
                        width: '100%',
                        padding: '10px',
                        marginBottom: '20px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                    }}
                />
                <button
                    type="submit"
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                    }}
                >
                    Shorten URL
                </button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {shortCode && (
                <div style={{ marginTop: '20px' }}>
                    <p>Shortened URL:</p>
                    <a href={longUrl} target="_blank" rel="noopener noreferrer">
                        http://short.url/{shortCode}
                    </a>
                </div>
            )}
        </div>
    );
};

export default App;

