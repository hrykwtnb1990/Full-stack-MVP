import './App.css';
import { useEffect, useState } from 'react';
import Form from './component/Form';

function App() {
  const [message, setMessage] = useState();
  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.text())
      .then((data) => setMessage(data));
  }, []);
  return (
    <div className="App">
      改善提案電子化
      <Form />
    </div>
  );
}
export default App;
