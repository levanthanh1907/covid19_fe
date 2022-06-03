import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    xv: 4000,
    nv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    xv: 3000,
    nv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    xv: 2000,
    nv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    xv: 2780,
    nv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    xv: 1890,
    nv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    xv: 2390,
    nv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    xv: 3490,
    nv: 4300,
    amt: 2100,
  },
];

export default function Hospitalize() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="nv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="xv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}
