import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title
);
export function KaizenChart() {
  const [kaizenData, setKaizenData] = useState([]);
  useEffect(() => {
    const fetchKaizen = async () => {
      const res = await fetch('http://localhost:3000/kaizen');
      const json = await res.json();
      setKaizenData(json);
    };
    fetchKaizen();
  }, []);

  if (kaizenData.length === 0) {
    return <p>読み込み中...</p>;
  }
  const labels = kaizenData.map((item) => `${item.id}: ${item.name}`);
  const effectAmounts = kaizenData.map((item) => item.Effect_Amount);
  const data = {
    labels,
    datasets: [
      {
        label: '効果金額 (20000円以上が赤)',
        data: effectAmounts,
        backgroundColor: effectAmounts.map((value) =>
          value >= 20000 ? 'rgba(255,99,132,0.8)' : 'rgba(54, 162,235,0.8)'
        ),
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '改善テーマごとの効果金額',
      },
      legend: {
        display: true,
      },
    },
    scales: {
      x: {
        ticks: {
          autoskip: false,
          maxRotation: 90,
          minRotation: 90,
          font: { size: 10 },
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <div style={{ width: '100%', maxWidth: '900px', margin: '0 auto' }}>
      <Bar data={data} options={options} />
    </div>
  );
}

export default KaizenChart;
