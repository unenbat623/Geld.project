import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(CategoryScale, LinearScale, BarElement, ArcElement);

const ExpenseCard = () => {
  const data1 = {
    labels: ["Jul", "Jul", "Jul", "Jul", "Jul", "Jul", "Jul"],
    datasets: [
      {
        label: "My First Dataset",
        backgroundColor: "#85CC16",
        data: [3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000],
      },
      {
        label: "My First Dataset",
        backgroundColor: "#F97316",
        data: [2000000, 2000000, 2000000, 2000000, 2000000, 2000000, 2000000],
      },
    ],
  };
  const options1 = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const data2 = {
    datasets: [
      {
        data: [5000000, 5000000, 5000000, 5000000, 5000000],

        backgroundColor: [
          "#1C64F2",
          "#E74694",
          "#FDBA8C",
          "#16BDCA",
          "#F2901C",
        ],
        hoverBackgroundColor: [
          "#1C64F2",
          "#E74694",
          "#FDBA8C",
          "#16BDCA",
          "#F2901C",
        ],
      },
    ],
    labels: ["Bill", "Food ", "Shopping", "Insurance", "Clothing"],
  };

  const options2 = {
    legend: {
      align: "start",
      position: "right",

      labels: {
        boxWidth: 15,
        padding: 15,
        display: false,
      },
    },
  };
  return (
    <div className="flex justify-center gap-20 my-7 w-full">
      <div className="flex-1 w-96  bg-white ml-36  rounded-lg">
        <h1 className="border-b-2 pb-3 font-semibold">Income - Expense</h1>
        <Bar options={options1} data={data1} />
      </div>

      <div className="flex-1  w-96 h-[510px] bg-white mr-36 rounded-lg ">
        <div className="flex border-b-2  pb-3 p-7 items-center justify-between">
          <h1 className="font-semibold">Income - Expense</h1>
          <h3>Jun 1 - Nov 30</h3>
        </div>

        <div className=" w-96 h-96 mt-8 p-2 flex items-center">
          <Doughnut data={data2} options={options2} />
        </div>
      </div>
    </div>
  );
};

export default ExpenseCard;
