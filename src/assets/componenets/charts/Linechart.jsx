import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
function Linechart({ chartdata }) {
  const options = {
    responsive: true,
    scales: {
      y: {
        min: -20,
        max: 50,
        stepSize: 20,
      },
      x: {},
    },
  };
  return (
    <div>
      <Line data={chartdata} options={options} />
    </div>
  );
}
export default Linechart;
