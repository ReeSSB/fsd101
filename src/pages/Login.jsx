import React,{useState} from 'react';
import {Container, Form, Button} from 'react-bootstrap';
import "../styles/Login.css";
import {Link, useNavigate} from "react-router-dom";

const Login = () => {
   const [formData, SetFormData] = useState({
      email:"",
      password:""
   })
   //const navigate= useNavigate();
    const handleChange=(e)=>{
      const {name, value}= e.target;
      SetFormData({...formData,
      [name]:value})
   }

   const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData)
   }

  return (
   <Container>
   <h1>Login Form</h1>
<Form onSubmit={handleSubmit}>    
  <Form.Group>
    <Form.Label>Email</Form.Label>
    <Form.Control
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      required
    />
  </Form.Group>
  <Form.Group>
    <Form.Label>Password</Form.Label>
    <Form.Control
      type="password"
      name="password"
      value={formData.password}
      onChange={handleChange}
      required
    />
  </Form.Group>
  <Button variant="primary" type="submit">Register</Button>
</Form>
{/* <p>Don't have an account?</p><Link to="register">Register</Link> */}
</Container>
  )
}

export default Login