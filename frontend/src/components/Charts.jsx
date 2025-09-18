import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function Charts({ modelName, metrics }) {
  const data = [
    { name: 'Accuracy', value: metrics.accuracy * 100 },
    { name: 'Bias Score', value: metrics.quantum_bias_score * 100 },
    { name: 'Robustness Flip %', value: metrics.robustness_flip_fraction * 100 }
  ];

  return (
    <div style={{ height: 200, marginTop: 12 }}>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ left: 10, right: 10 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
