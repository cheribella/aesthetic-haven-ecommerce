"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

interface OverviewProps {
  data: any[];
}

export const Overview: React.FC<OverviewProps> = ({ data }) => {
  const conversionRate = 50;
  const valueMultiplier = 1000;

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => {
            const formattedValue = value * conversionRate / valueMultiplier;
            const roundedValue = formattedValue >= 1 ? formattedValue.toFixed(0) : formattedValue.toFixed(2);
            return `₱${roundedValue.endsWith('.00') ? roundedValue.slice(0, -3) : roundedValue}K`;
          }}
          
          
        />
        <Bar dataKey="total" fill="#3498db" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};
