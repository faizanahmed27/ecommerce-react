import React from "react";
import { Container, Row, Col, Card, CardBody, CardTitle } from "reactstrap";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
 <div className="d-flex">
    {/* Main Content */}

    <div className="flex-grow-1">

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

  );
};

export default Dashboard;
