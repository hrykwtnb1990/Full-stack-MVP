import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Form from './component/Form';
import KaizenChart from './component/Chart.jsx';
import KaizenList from './component/List.jsx';
import Layout from './component/Layout.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<KaizenList />} />
          <Route path="/List" element={<KaizenList />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Chart" element={<KaizenChart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
