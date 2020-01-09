import React, {useState} from 'react';
import Header from './Header';
import { Container, Row, Col, Form, Button } from 'react-bootstrap' ;
import { useHistory } from 'react-router-dom'


const Login = ({handleSubmitLogin}) => {
    const[validate,setValidate] = useState(false)
    const history = useHistory()

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.nickname.value.length===0 || form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
          }
        else{
            handleSubmitLogin(form.nickname.value)   
            history.push("/chat")  

        }
        setValidate(true) 
    }


    return (
        <div>
            <Header />
            <Container>
                <Row className="justify-content-center pt-5">
                    <Col></Col>
                    <Col xs={6} className="text-center">
                        <Form noValidate validated={validate} onSubmit={handleSubmit}>
                        <Form.Group>
                        <Form.Label>Nickname : </Form.Label>
                        <Form.Control required type="text" name="nickname" placeholder="Enter your nickname" />
                        <Form.Control.Feedback type="invalid">
                        Please choose a username.
                        </Form.Control.Feedback>
                        </Form.Group> 
                        <Button variant="danger" type="submit">
                            Enter
                        </Button>
                        </Form> 
                    </Col>
                    <Col></Col>
                    </Row>
            </Container>
        </div>
    )
}

export default Login
