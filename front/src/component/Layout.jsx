import { Link, Outlet, useLocation } from 'react-router-dom';

function Layout() {
  const location = useLocation();

  const baseClass = 'px-6 py-3 rounded-lg font-semibold transition shadow';

  const inactive = baseClass + 'bg-gray-200 text-gray-700 hover:bg-gray-300';

  const active = baseClass + ' bg-blue-500 text-white p-4 hover:bg-blue-400';
  return (
    <div>
      <nav className="flex justify-center space-x-6 my-6 shadow-md">
        <button className={location.pathname === '/Form' ? active : inactive}>
          <Link to="/Form">提出する</Link>
        </button>

        <button className={location.pathname === '/list' ? active : inactive}>
          <Link to="/list">一覧</Link>
        </button>

        <button className={location.pathname === '/chart' ? active : inactive}>
          <Link to="/chart">グラフ</Link>
        </button>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
export default Layout;
