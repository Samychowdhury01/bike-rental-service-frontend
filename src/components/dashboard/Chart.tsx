import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({
  amount,
  from,
  type,
}: {
  amount: number;
  from: number;
  type: string;
}) => {
  console.log(amount, from, type);
  const data = {
    labels:
      type === "user"
        ? ["Returned", "Not Returned"]
        : ["paid user", "Not paid user"],
    datasets: [
      {
        label: type,
        data: [amount, from - amount],
        backgroundColor: ["rgba(54, 162, 235, 0.6)", "rgba(255, 99, 132, 0.6)"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "data",
      },
    },
  };
  return (
    <>
      <div>
        <Doughnut data={data} options={options} />
      </div>
    </>
  );
};

export default Chart;
