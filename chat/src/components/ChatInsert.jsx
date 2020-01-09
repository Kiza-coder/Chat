import React from 'react'
import {Col,Row,Container,Form,Button} from "react-bootstrap"

const ChatInsert = ({tabMessage,nickname,handleSubmitNewMessage}) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.currentTarget
        const new_message = form.new_message.value
        handleSubmitNewMessage(new_message)
        e.currentTarget.new_message.value = ""


    }


    return (
        <Container>
            <Form onSubmit={handleSubmit}>
            <Row className="pt-2">
                <Col xs={10}>
                <Form.Group>
                    <Form.Label>
                    </Form.Label>
                    <Form.Control required type="text" name="new_message" placeholder="Enter your message">
                    </Form.Control>
                </Form.Group>
                </Col>
                <Col className="pt-4">
                  <Button variant="danger" type="submit">
                      Send
                </Button>
                </Col>
            </Row>
            </Form>
        </Container>
    )
}

export default ChatInsert
