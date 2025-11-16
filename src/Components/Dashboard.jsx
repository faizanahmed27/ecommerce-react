// Example usage in Dashboard
import { useAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Base from './Base';
import { useEffect, useState } from 'react';
import CardStat from '../Components/CardStat';
import ChartLine from '../Components/ChartLine';


const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [chartData, setChartData] = useState([]);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  useEffect(() => {
    // dummy fetch
    setStats({ sales: 12500, orders: 230, customers: 120, returns: 5 });
    setChartData([
      { name: 'Jan', sales: 3000 },
      { name: 'Feb', sales: 5000 },
      { name: 'Mar', sales: 7000 },
      { name: 'Apr', sales: 9000 },
      { name: 'May', sales: 12500 },
    ]);
  }, []);

  if (!stats) return <div>Loading...</div>;

  return (
    <Base>
    {/* <div>
      <h1>Welcome, {user?.userName}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div> */}
     <div className="p-4 space-y-6">
      <div className="grid grid-cols-4 gap-4">
        <CardStat title="Sales" value={`$${stats.sales}`} />
        <CardStat title="Orders" value={stats.orders} />
        <CardStat title="Customers" value={stats.customers} />
        <CardStat title="Returns" value={stats.returns} />
      </div>
      <div className="bg-white p-4 shadow rounded">
        <ChartLine data={chartData} />
      </div>
    </div>
    </Base>
  );
};

export default Dashboard;