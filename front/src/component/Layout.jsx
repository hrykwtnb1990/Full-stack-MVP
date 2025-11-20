import { Link, Outlet, useLocation } from 'react-router-dom';

function Layout() {
  const location = useLocation();

  const baseClass =
    'px-6 py-3 rounded-lg font-semibold transition shadow inline-block';

  const inactive = baseClass + ' bg-gray-200 text-gray-700 hover:bg-gray-300';

  const active = baseClass + ' bg-blue-500 text-white hover:bg-blue-400';

  return (
    <div>
      <nav className="flex justify-center space-x-6 my-6 shadow-md py-4 bg-white">
        <Link
          to="/Form"
          className={location.pathname === '/Form' ? active : inactive}
        >
          提出する
        </Link>

        <Link
          to="/list"
          className={location.pathname === '/list' ? active : inactive}
        >
          一覧
        </Link>

        <Link
          to="/chart"
          className={location.pathname === '/chart' ? active : inactive}
        >
          グラフ
        </Link>
      </nav>

      <main className="px-4">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
