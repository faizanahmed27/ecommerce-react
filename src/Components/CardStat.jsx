export default function CardStat({ title, value }) {
  return (
    <div className="bg-white p-4 shadow rounded">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
}
