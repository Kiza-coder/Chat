import React from 'react'
import { Jumbotron, Container, Row, Col, Form } from 'react-bootstrap' ;

const Header = () =>  {
    return (
        <div>
            <Jumbotron fluid className="bg-danger text-white">
                 <Container className="text-center">
                     <h1>Chat</h1>
                </Container>
            </Jumbotron>
            
        </div>
    )
}

export default Header
