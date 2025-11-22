import React, { useState } from "react";
import { Row, Col, Container, Card, CardBody, Label, Input, CardHeader, option, CardFooter, Button, Form } from "reactstrap";
import { createUser } from "./Service/UserService";
import { ToastContainer, toast } from 'react-toastify';
import Base from "./Base";

function SignUp() {

    const [user, setUser] = useState({
        userName: '',
        email: '',
        password: '',
        address: '',
        about: '',
        gender: '',
        phone: ''
    });

    const [error, setError] = useState('');
    const onFieldChange = (event, fieldName) => {
        //console.log(event.target.value)
        setUser({ ...user, [fieldName]: event.target.value })
    }

    const registerUser = (event) => {
        event.preventDefault();
        //console.log("Submit Button Click", user.userName);
        if (!user?.userName || user.userName.trim() === '') {
            //alert("Name is should not be blank OR empty");
            setError('Name should not be blank or empty');
            return;
        }

        // createUser method from UserService.js file
        createUser(user).then(response => {
            console.log(response);
            if (response) {
                toast.success("Register Successfully");
            } else {
                toast.error("Failed to register");
            }
        }).catch(error => {
            if (error.code === 'ECONNREFUSED' || error.message.includes('Network Error')) {
                toast.error("Unable to connect to the server. Please try again later.");
            } else {
                toast.error("Something went wrong. Please check");
            }
        });

    }
    // Reset Form Values
    const reset = () => {
        //console.log("Reset Button Click");
        setUser({
            userName: '',
            email: '',
            password: '',
            address: '',
            about: '',
            gender: '',
            phone: ''
        });
    }

    return (
        <Base>
        <Container>

            <Row>
                <Col md={{ size: 6, offset: 3 }}>
                    <Card className="shadow-sm mt-3" color="light" style={{ marginLeft: 150 }}>
                        <CardHeader>
                            <h3 className="text-center">Signup Here!</h3>
                        </CardHeader>
                        <CardBody>
                            {/* {JSON.stringify(user)} */}
                            <Form onSubmit={registerUser}>
                                <div>

                                    <div className="my-3">
                                        <Label for="userName">Enter Your Name</Label> <b> <Label style={{ color: "red" }}>*</Label></b>
                                        <Input value={user.userName} onChange={(event) => onFieldChange(event, 'userName')} type="text" id="userName" placeholder="Enter Your Name"></Input>
                                        {user.userName ? "" : <span style={{ color: "red", marginLeft: "50px", marginTop: '4px' }} className="text-center">Name is required</span>}
                                        {error && <p style={{ color: 'red' }}>{error}</p>}
                                    </div>

                                    <div className="my-3">
                                        <Label for="email">Enter Your Email</Label> <b> <Label style={{ color: "red" }}>*</Label></b>
                                        <Input value={user.email} onChange={(event) => onFieldChange(event, 'email')} type="text" id="email" placeholder="Enter Your Email"></Input>
                                        {user.email ? "" : <span style={{ color: "red", marginLeft: "50px", marginTop: '4px' }} className="text-center">Email is required</span>}
                                    </div>

                                    <div className="my-3">
                                        <Label for="password">Enter Your Password</Label> <b> <Label style={{ color: "red" }}>*</Label></b>
                                        <Input value={user.password} onChange={(event) => onFieldChange(event, 'password')} type="password" id="password" placeholder="Enter Your Password"></Input>
                                        {user.password ? "" : <span style={{ color: "red", marginLeft: "50px", marginTop: '4px' }} className="text-center">Password is required</span>}
                                    </div>

                                    <div className="my-3">
                                        <Label for="address">Enter Your Address</Label> <b> <Label style={{ color: "red" }}>*</Label></b>
                                        <Input value={user.address} onChange={(event) => onFieldChange(event, 'address')} type="textarea" id="address" placeholder="Enter Your Address"></Input>
                                        {user.address ? "" : <span style={{ color: "red", marginLeft: "50px", marginTop: '4px' }} className="text-center">Address is required</span>}
                                    </div>

                                    <div className="my-3">
                                        <Label for="about">Enter About Your Self</Label> <b> <Label style={{ color: "red" }}>*</Label></b>
                                        <Input value={user.about} onChange={(event) => onFieldChange(event, 'about')} type="textarea" id="about" placeholder="Enter About Your Self"></Input>
                                        {user.about ? "" : <span style={{ color: "red", marginLeft: "50px", marginTop: '4px' }} className="text-center">About is required</span>}
                                    </div>

                                    <div className="my-3">
                                        <Label for="gender">Select Your Gender</Label> <b> <Label style={{ color: "red" }}>*</Label></b>
                                        <Input value={user.gender} onChange={(event) => onFieldChange(event, 'gender')} type="select" id="gender">
                                            <option>Select</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Others</option>
                                        </Input>
                                        {user.gender ? "" : <span style={{ color: "red", marginLeft: "50px", marginTop: '4px' }} className="text-center">Gender is required</span>}
                                    </div>

                                    <div className="my-3">
                                        <Label for="phone">Enter Your Contact Number</Label> <b> <Label style={{ color: "red" }}>*</Label></b>
                                        <Input value={user.phone} onChange={(event) => onFieldChange(event, 'phone')} type="text" id="phone" placeholder="Enter Your Contact Number"></Input>
                                        {user.phone ? "" : <span style={{ color: "red", marginLeft: "50px", marginTop: '4px' }} className="text-center">Contact Number is required</span>}
                                    </div>

                                    <CardFooter>
                                        <div>
                                            <Button className="my-3" block color="success">Signup</Button>
                                        </div>
                                        <div>
                                            <Button onClick={reset} className="my-3" block color="warning">Reset</Button>
                                        </div>
                                    </CardFooter>

                                </div>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </Container>
</Base>
    )
}

export default SignUp;