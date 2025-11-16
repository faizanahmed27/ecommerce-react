import React, { useState } from "react";
import { Card, Col, Container, Form, Row, Label, Input, CardBody, Button } from "reactstrap";
import { login as loginUser } from "./Service/UserService";
import { ToastContainer, toast } from 'react-toastify';
import { storeLocalStorage } from "./Auth";
import { useNavigate } from "react-router-dom";
import Base from './Base';
import { useAuth } from '../Context/AuthContext';

function Login() {
    // create Navigate for other page
    const { login } = useAuth();
    const navigate = useNavigate();

    // getting Login Information
    const [loginDate, setLoginData] = useState({
        email: '',
        password: ''
    });

    const setValue = (event, fieldName) => {
        setLoginData({ ...loginDate, [fieldName]: event.target.value });
    }

    // Reset Button for all Fieds
    const reset = () => {
        setLoginData({
            email: '',
            password: ''
        })
    }

    // Submit the Login Form and Data
    const loginFormSubmit = (event) => {
        event.preventDefault();
        console.log("Login Submitted");

        if (!loginDate?.email || loginDate.email.trim() === '') {
            toast.error("Username and password must be required");
            return;
        }

        if (!loginDate?.password || loginDate.password.trim() === '') {
            toast.error("Username and password must be required");
            return;
        }

        // login method from UserService.js file
        // funcatio start...
        loginUser(loginDate).then(response => {
            
            console.log("Login Details: ",response);
            if (response?.status !=='failed') {
                // call storeLocalStorage method from index.js/Auth
                    login(response); // This should update auth context & localStorage
                    storeLocalStorage(response, () =>{
                    navigate("/user/dashboard");
                });
                toast.success(`Login Successfully ${response.userName}`);  
            }else{
                 toast.error(response.message);
            }
           
        }).catch(error =>{
           if (error.code === 'ECONNREFUSED' || error.message.includes('Network Error')) {
            toast.error("Unable to connect to the server. Please try again later.");
        } else {
            toast.error("Error Getting:", error);
        }
        });
        
    }

    return (
        <Base>
        <Container>

            <Row>

                <Col md={{ size: 6, offset: 3 }}>

                    <Card color="light" className=" shadow-lg m-3">
                        {JSON.stringify(loginDate)}
                        <CardBody>
                            <h3 className="text-center">Login Here</h3>
                            <Form onSubmit={loginFormSubmit}>
                                <div className="m-3">
                                    <Label id="email" for="email">Username</Label>
                                    <Input value={loginDate.email} onChange={(event) => setValue(event, 'email')} type="text" id="email" placeholder="Enter Your Usename"></Input>
                                </div>

                                <div className="m-3">
                                    <Label id="password" for="password">Password</Label>
                                    <Input value={loginDate.password} onChange={(event) => setValue(event, 'password')} type="password" id="password" placeholder="Enter Your Password"></Input>
                                </div>

                                <div className="m-3 text-center">
                                    <Button size="sm" color="success">Login</Button>
                                    <Button onClick={reset} style={{ marginLeft: '50px' }} size="sm" color="warning">Reset</Button>
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

export default Login;