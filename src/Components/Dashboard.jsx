// Dashboard.js
import React from "react";
import { Container, Row, Col, Card, CardBody, CardTitle } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Base from "./Base";
import { useAuth } from '../Context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
//import { useEffect, useState } from 'react';

const Dashboard = () => {
  //const [stats, setStats] = useState(null);
  //const [chartData, setChartData] = useState([]);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  return (
    <Base>
      <div className="d-flex">
        {/* Sidebar */}
        <div className="bg-dark text-white p-3" style={{ width: "220px", minHeight: "100vh" }}>
          <h4 className="mb-4">My Dashboard</h4>
          <ul className="list-unstyled">
            <li className="mb-2"><a href="#home" className="text-white">🏠 Home</a></li>
            <li className="mb-2">
              <Link to="/reports" className="text-white">📊 Reports</Link>
            </li>
            <li className="mb-2"><a href="#settings" className="text-white">⚙️ Settings</a></li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-grow-1">
          {/* Top Navbar */}
          <nav className="navbar navbar-light bg-light px-3">
            <span className="navbar-brand">Welcome, {user?.userName} 👋</span>
          </nav>

          {/* Dashboard Content */}
          <Container fluid className="mt-4">
            <Row>
              <Col md="4">
                <Card className="shadow-sm">
                  <CardBody>
                    <CardTitle tag="h5">Users</CardTitle>
                    <h2>1,245</h2>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="shadow-sm">
                  <CardBody>
                    <CardTitle tag="h5">Sales</CardTitle>
                    <h2>$23,400</h2>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="shadow-sm">
                  <CardBody>
                    <CardTitle tag="h5">Performance</CardTitle>
                    <h2>87%</h2>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </Base>
  );
};

export default Dashboard;
