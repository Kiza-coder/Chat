import React from 'react'
import Message from './Message'
import { Card,Col } from 'react-bootstrap'


const ChatDisplay = ({tabMessage}) => {
    console.log(tabMessage)
    return (
        
            <Col x={6} className="justify-content mt-2 mb-2 pb-3 pt-3">
             {tabMessage.map((message,index) =>
                <Message message={message}/>
            
        
            )}
            </Col>
            
    )
}

export default ChatDisplay
