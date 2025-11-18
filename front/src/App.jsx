import './App.css';
import { useEffect, useState } from 'react';

function KaizenList() {
  const [kaizen, setkaizen] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchKaizen = async () => {
      try {
        const res = await fetch('http://localhost:3000/kaizen');
        if (!res.ok) {
          throw new Error(`HTTPエラー:${res.status}`);
        }

        const data = await res.json();
        setkaizen(data);
      } catch (err) {
        console.error(err);
        setError('データ取得失敗');
      } finally {
        setLoading(false);
      }
    };
    fetchKaizen();
  }, []);

  if (loading) {
    return <p>読み込み中</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div>
      <h1>Kaizen 一覧</h1>
      {kaizen.length === 0 ? (
        <p>データがありません</p>
      ) : (
        <ul>
          {kaizen.map((item) => (
            <li key={item.id}>
              <strong>{item.id}</strong>
              <br />
              {item.theme}
              <br />
              効果:{item.Effect_Amount}
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: '16px' }}>
      <KaizenList />
    </div>
  );
}
export default App;
