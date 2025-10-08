import React from "react";

import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AppCgart = ({ ratings }) => {
  const data = ratings;
  return (
    <div className="w-full md:w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          layout="vertical"
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" vertical={false} horizontal={false} />
          <XAxis
            type="number"
            dataKey="count"
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            dataKey="name"
            type="category"
            scale="band"
            axisLine={false}
            tickLine={false}
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" barSize={20} fill="#FF8811" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AppCgart;
