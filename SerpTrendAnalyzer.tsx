'use client';
import React, { useState } from 'react';
export default function SerpTrendAnalyzer() {
  const [sector, setSector] = useState('');
  const [keyword, setKeyword] = useState('');
  const [result, setResult] = useState(null);
  const handleAnalyze = () => {
    const exampleOutput = {
      trends: [
        'Liste içerikleri ("En iyi X") bu ay öne çıkıyor.',
        'FAQ içeren içerikler daha görünür hale geliyor.',
        'YouTube videolu destekli içerikler üst sıralarda.',
      ],
      exampleURL: 'https://example.com/ornek-trend-icerik',
      action: 'Bu ay uzun format + liste + video içeren içerikler üretmelisin.'
    };
    setResult(exampleOutput);
  };
  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h2>Trend Analizi</h2>
      <select onChange={(e) => setSector(e.target.value)} value={sector}>
        <option value="">Sektör Seç</option>
        <option value="finans">Finans</option>
        <option value="saglik">Sağlık</option>
        <option value="moda">Moda</option>
        <option value="teknoloji">Teknoloji</option>
      </select>
      <br/><br/>
      <input type="text" placeholder="Anahtar kelime" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <br/><br/>
      <button onClick={handleAnalyze}>Trendleri Gör</button>
      {result && (
        <div style={{ marginTop: '1rem' }}>
          <h3>Trendler:</h3>
          <ul>{result.trends.map((t, i) => <li key={i}>{t}</li>)}</ul>
          <p><strong>Örnek içerik:</strong> <a href={result.exampleURL}>{result.exampleURL}</a></p>
          <p><strong>Ne yapmalısın?</strong> {result.action}</p>
        </div>
      )}
    </div>
  );
}
