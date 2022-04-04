import React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 4220,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 7260,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 5200,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 6000,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 6440,
      revenue: 61000,
    },
  ];
  return (
    <div>
      <div className="my-10 flex justify-center w-full">
        <div>
          <h1 className="text-center text-3xl font-mono font-bold text-violet-700">
            MONTH WISE SELL
          </h1>
          <AreaChart
            width={730}
            height={350}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="sell"
              stroke="green"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
            <Legend verticalAlign="top" height={36} />
          </AreaChart>
        </div>
      </div>
      <div className="my-10 flex justify-center w-full">
        <div>
          <h1 className="text-center text-3xl font-mono font-bold mb-5">
            <span className="text-indigo-500">INVESTMENT</span> VS
            <span className="text-green-500"> REVENUE</span>
          </h1>
          <BarChart width={730} height={350} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="investment" fill="#8884d8" />
            <Bar dataKey="revenue" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
