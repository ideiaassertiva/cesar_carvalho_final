"use client";

import { motion } from "framer-motion";
import { LineChart, Line, ResponsiveContainer, XAxis, Tooltip, YAxis, CartesianGrid } from 'recharts';

const data = [
  { name: 'Q1', current: 4000, projected: 4000 },
  { name: 'Q2', current: 4500, projected: 6000 },
  { name: 'Q3', current: 4800, projected: 9000 },
  { name: 'Q4', current: 5000, projected: 14000 },
];

export function DataVizGraphic() {
  return (
    <div className="w-full h-full min-h-[200px] mt-4 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10 pointer-events-none" />
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
          <XAxis dataKey="name" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip
            contentStyle={{ backgroundColor: '#111', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
            itemStyle={{ color: '#fff' }}
          />
          <Line
            type="monotone"
            dataKey="current"
            stroke="#666"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="projected"
            stroke="#fff"
            strokeWidth={3}
            dot={{ fill: '#fff', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
