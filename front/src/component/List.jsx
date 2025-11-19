import { useState, useEffect } from 'react';

export function KaizenList() {
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
    <div className="text-xl max-w-3xl text-center mx-auto border p-4">
      <h1 className="bg-blue-500 text-3xl">Kaizen 一覧</h1>
      {kaizen.length === 0 ? (
        <p>データがありません</p>
      ) : (
        <ul className="text-left">
          {kaizen.map((item) => (
            <li key={item.id}>
              <strong>{item.id}</strong>
              <br />
              {item.department}
              <br />
              {item.name}:{item.number}
              <br />
              {item.theme}の効果:{item.Effect_Amount}円
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default KaizenList;
