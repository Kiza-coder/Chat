import React from 'react'
import {Card} from 'react-bootstrap'

const Message = ({message}) => {
    return (
        <Card bg="alert" text="info" className="mt-2"border="primary">
            {message.name} : {message.content}
        </Card>
    )
}

export default Message