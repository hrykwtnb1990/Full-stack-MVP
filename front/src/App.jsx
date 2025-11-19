import './App.css';
import { useEffect, useState } from 'react';
import './component/Form';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Form from './component/Form';
import Page2 from './component/page2';

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
    <div class="text-xl max-w-3xl text-center mx-auto border p-4">
      <h1 class="bg-blue-500 text-3xl">Kaizen 一覧</h1>
      {kaizen.length === 0 ? (
        <p>データがありません</p>
      ) : (
        <ul class="text-center">
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
    <BrowserRouter>
      <div>
        <KaizenList />

        <Link to="Form">提案する</Link>
        <Link to="Page2">PAGE2</Link>
      </div>
      <Routes>
        <Route path="/Form" element={<Form />} />
        <Route path="/Page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
