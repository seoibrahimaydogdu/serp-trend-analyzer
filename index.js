
import { useState } from 'react';

export default function Home() {
  const [sector, setSector] = useState('');
  const [keyword, setKeyword] = useState('');
  const [result, setResult] = useState(null);

  const handleAnalyze = () => {
    const exampleOutput = {
      trends: [
        'Liste içerikleri ("En iyi X") bu ay öne çıkıyor.',
        'FAQ içeren içerikler daha görünür hale geliyor.',
        'YouTube videolu destekli içerikler üst sıralarda.'
      ],
      exampleURL: 'https://example.com/ornek-trend-icerik',
      action: 'Bu ay uzun format + liste + video içeren içerikler üretmelisin.'
    };
    setResult(exampleOutput);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '1rem', fontFamily: 'sans-serif' }}>
      <h1>Serp Trend Analyzer</h1>
      <label>Sektör Seç:</label><br/>
      <select value={sector} onChange={(e) => setSector(e.target.value)} style={{ width: '100%', padding: '8px' }}>
        <option value="">Seçiniz</option>
        <option value="finans">Finans</option>
        <option value="saglik">Sağlık</option>
        <option value="moda">Moda</option>
        <option value="teknoloji">Teknoloji</option>
      </select><br/><br/>
      <input type="text" placeholder="Anahtar kelime (isteğe bağlı)" value={keyword}
             onChange={(e) => setKeyword(e.target.value)} style={{ width: '100%', padding: '8px' }}/><br/><br/>
      <button onClick={handleAnalyze} style={{ padding: '10px 20px', backgroundColor: '#2563eb', color: 'white', border: 'none' }}>
        Trendleri Gör
      </button>
      {result && (
        <div style={{ marginTop: '2rem', backgroundColor: '#f9fafb', padding: '1rem', borderRadius: '8px' }}>
          <h2>Trendler:</h2>
          <ul>
            {result.trends.map((trend, idx) => <li key={idx}>{trend}</li>)}
          </ul>
          <p><strong>Örnek içerik:</strong> <a href={result.exampleURL} target="_blank" rel="noopener noreferrer">{result.exampleURL}</a></p>
          <p><strong>Ne yapmalısın?</strong> {result.action}</p>
        </div>
      )}
    </div>
  );
}
