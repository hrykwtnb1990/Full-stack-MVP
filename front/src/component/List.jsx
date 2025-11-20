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
        setError('データ取得に失敗しました');
      } finally {
        setLoading(false);
      }
    };
    fetchKaizen();
  }, []);
  if (loading) {
    return (
      <div className="flex items-center justify-center py-16">
        <p className="text-gray-600 animate-pulse">読み込み中...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex items-center justify-center py-16">
        <p className="text-red-500 font-semibold">{error}</p>
      </div>
    );
  }
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-xl overflow-hidden">
        {/* ヘッダー */}
        <div className="bg-blue-600 px-6 py-4">
          <h1 className="text-2xl font-semibold text-white">Kaizen 一覧</h1>
        </div>
        {/* 本文 */}
        {kaizen.length === 0 ? (
          <p className="px-6 py-8 text-center text-gray-500">
            データがありません
          </p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {kaizen.map((item) => (
              <li
                key={item.id}
                className="px-6 py-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  {/* 左側：ID */}
                  <div>
                    <p className="text-xs text-gray-400">ID</p>
                    <p className="font-semibold text-gray-900">#{item.id}</p>
                  </div>
                  {/* 右側：詳細 */}
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">{item.department}</p>
                    <p className="mt-1 font-medium text-gray-900">
                      {item.name}{' '}
                      <span className="text-xs text-gray-400">
                        ({item.number})
                      </span>
                    </p>
                    <p className="mt-2 text-sm text-gray-700">
                      <span className="font-semibold">{item.theme}</span>
                      <span className="ml-2 text-xs text-gray-500">の効果</span>
                      <span className="ml-2 font-semibold text-emerald-600">
                        {item.Effect_Amount?.toLocaleString
                          ? item.Effect_Amount.toLocaleString()
                          : item.Effect_Amount}
                        円
                      </span>
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
export default KaizenList;
