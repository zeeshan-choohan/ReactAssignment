import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Link,useNavigate } from "react-router-dom";

function SignUp(){
  let navigate = useNavigate()
  const signup = ()=>{
    navigate("/SignIn",{ replace: true })
  }
        return (
            <Card style={{ width: '25rem',margin:'10px auto' }}>
              <Card.Img variant="top" style={{width: '7rem',margin:'10px auto'}} src=" https://cdn-icons-png.flaticon.com/512/5087/5087579.png"/>
              <Card.Body>
                <Card.Title style={{margin:"10px"}}>Sign Up</Card.Title>
                <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Label htmlFor="inputPassword5">Password</Form.Label>
              <Form.Control
                type="password"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
              />
              <Form.Text id="passwordHelpBlock" muted>
                Your password must be 8-20 characters long, contain letters and numbers,
                and must not contain spaces, special characters, or emoji.
              </Form.Text>
            </Form>
                <Button variant="primary" style={{margin:"40px"}} onClick={()=> signup()}>SignIn</Button>
              </Card.Body>
            </Card>
          );
    }
export default SignUp;