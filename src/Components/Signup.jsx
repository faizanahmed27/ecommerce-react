import React, { useState } from "react";
import {
  Row,
  Col,
  Container,
  Card,
  CardBody,
  Label,
  Input,
  CardHeader,
  CardFooter,
  Button,
  Form
} from "reactstrap";
import { createUser } from "./Service/UserService";
import { toast } from "react-toastify";
import Base from "./Base";

function SignUp() {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    address: "",
    about: "",
    gender: "",
    phone: ""
  });

  const onFieldChange = (event, fieldName) => {
    setUser({ ...user, [fieldName]: event.target.value });
  };

  const registerUser = (event) => {
    event.preventDefault();

    if (!user.userName.trim()) {
      toast.error("Name is required");
      return;
    }

    if (!user.email.trim()) {
      toast.error("Email is required");
      return;
    }

     if (!user.password.trim()) {
      toast.error("Password is required");
      return;
    }

     if (!user.address.trim()) {
      toast.error("Address is required");
      return;
    }

     if (!user.about.trim()) {
      toast.error("Please add something about your self");
      return;
    }

     if (!user.gender.trim()) {
      toast.error("Please select the gender");
      return;
    }

     if (!user.phone.trim()) {
      toast.error("Mobile number is required");
      return;
    }

    createUser(user)
      .then((response) => {
        if (response) {
          toast.success("Registered Successfully");
          reset();
        } else {
          toast.error("Failed to register");
        }
      })
      .catch((error) => {
        if (
          error.code === "ECONNREFUSED" ||
          error.message?.includes("Network Error")
        ) {
          toast.error("Unable to connect to server");
        } else {
          toast.error("Something went wrong");
        }
      });
  };

  const reset = () => {
    setUser({
      userName: "",
      email: "",
      password: "",
      address: "",
      about: "",
      gender: "",
      phone: ""
    });
  };

  return (
    <Base>
      <Container>
        <Row className="justify-content-center">
          <Col xs="12" sm="10" md="8" lg="6">
            <Card className="shadow-sm mt-4">
              <CardHeader>
                <h3 className="text-center mb-0">Signup Here!</h3>
              </CardHeader>

              <CardBody>
                <Form onSubmit={registerUser}>
                  {/* Name */}
                  <div className="mb-3">
                    <Label for="userName">
                      Enter Your Name <span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="text"
                      id="userName"
                      placeholder="Enter your name"
                      value={user.userName}
                      onChange={(e) => onFieldChange(e, "userName")}
                    />
                    {/* {!user.userName && (
                      <small className="text-danger">
                        Name is required
                      </small>
                    )} */}
                  </div>

                  {/* Email */}
                  <div className="mb-3">
                    <Label for="email">
                      Enter Your Email <span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      value={user.email}
                      onChange={(e) => onFieldChange(e, "email")}
                    />
                    {/* {!user.email && (
                      <small className="text-danger">
                        Email is required
                      </small>
                    )} */}
                  </div>

                  {/* Password */}
                  <div className="mb-3">
                    <Label for="password">
                      Enter Your Password{" "}
                      <span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="password"
                      id="password"
                      placeholder="Enter your password"
                      value={user.password}
                      onChange={(e) => onFieldChange(e, "password")}
                    />
                    {/* {!user.password && (
                      <small className="text-danger">
                        Password is required
                      </small>
                    )} */}
                  </div>

                  {/* Address */}
                  <div className="mb-3">
                    <Label for="address">
                      Enter Your Address{" "}
                      <span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="textarea"
                      id="address"
                      placeholder="Enter your address"
                      value={user.address}
                      onChange={(e) => onFieldChange(e, "address")}
                    />
                    {/* {!user.address && (
                      <small className="text-danger">
                        Address is required
                      </small>
                    )} */}
                  </div>

                  {/* About */}
                  <div className="mb-3">
                    <Label for="about">
                      About Yourself{" "}
                      <span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="textarea"
                      id="about"
                      placeholder="Tell us about yourself"
                      value={user.about}
                      onChange={(e) => onFieldChange(e, "about")}
                    />
                    {/* {!user.about && (
                      <small className="text-danger">
                        About is required
                      </small>
                    )} */}
                  </div>

                  {/* Gender */}
                  <div className="mb-3">
                    <Label for="gender">
                      Select Gender{" "}
                      <span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="select"
                      id="gender"
                      value={user.gender}
                      onChange={(e) => onFieldChange(e, "gender")}
                    >
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Others">Others</option>
                    </Input>
                    {/* {!user.gender && (
                      <small className="text-danger">
                        Gender is required
                      </small>
                    )} */}
                  </div>

                  {/* Phone */}
                  <div className="mb-3">
                    <Label for="phone">
                      Contact Number{" "}
                      <span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="text"
                      id="phone"
                      placeholder="Enter contact number"
                      value={user.phone}
                      onChange={(e) => onFieldChange(e, "phone")}
                    />
                    {/* {!user.phone && (
                      <small className="text-danger">
                        Contact number is required
                      </small>
                    )} */}
                  </div>

                  {/* Buttons */}
                  <CardFooter className="bg-transparent border-0 px-0">
                    <Row>
                      <Col xs="12" md="6" className="mb-2">
                        <Button block color="success" type="submit">
                          Signup
                        </Button>
                      </Col>

                      <Col xs="12" md="6">
                        <Button block color="warning" onClick={reset}>
                          Reset
                        </Button>
                      </Col>
                    </Row>
                  </CardFooter>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
}

export default SignUp;
