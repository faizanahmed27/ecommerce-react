import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function ChartLine({ data }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="sales" stroke="#4F46E5" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}
