import React from "react";
import { Container, Row, Col, Card, CardBody, CardTitle } from "reactstrap";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="d-flex">
      {/* Main Content */}
      <div className="flex-grow-1 p-3">
        {/* Header */}
        <div className="dashboard-header mb-4">
          <h3 className="fw-bold text-white">My Dashboard</h3>
        </div>

        {/* Dashboard Cards */}
        <Container fluid>
          <Row className="g-4">
            <Col md="4">
              <Card className="dashboard-card">
                <CardBody>
                  <CardTitle tag="h5" className="card-label">Users</CardTitle>
                  <h1 className="card-value">1,245</h1>
                </CardBody>
              </Card>
            </Col>

            <Col md="4">
              <Card className="dashboard-card">
                <CardBody>
                  <CardTitle tag="h5" className="card-label">Sales</CardTitle>
                  <h1 className="card-value">$23,400</h1>
                </CardBody>
              </Card>
            </Col>

            <Col md="4">
              <Card className="dashboard-card">
                <CardBody>
                  <CardTitle tag="h5" className="card-label">Performance</CardTitle>
                  <h1 className="card-value">87%</h1>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>

        {/* Nested Routes */}
        <div className="mt-4">
          <Outlet />
        </div>

        {/* Custom Styles */}
        <style>{`
          .dashboard-header {
            background: linear-gradient(90deg, #1d3557, #457b9d);
            padding: 15px;
            border-radius: 14px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            text-align: center;
          }

          .dashboard-card {
            border: none;
            border-radius: 16px;
            padding: 20px 10px;
            text-align: center;
            background: #fff;
            box-shadow: 0 2px 8px rgba(0,0,0,0.06);
            transition: 0.3s;
          }

          .dashboard-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 6px 15px rgba(0,0,0,0.12);
          }

          .card-label {
            font-size: 15px;
            font-weight: 600;
            color: #555;
            margin-bottom: 6px;
            text-transform: uppercase;
            letter-spacing: 0.8px;
          }

          .card-value {
            font-weight: 700;
            font-size: 42px;
            color: #1d3557;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Dashboard;
