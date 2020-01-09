import React, {useReducer,useEffect} from 'react'
import axios from 'axios'
import Header from './Header'
import { Container, Card } from 'react-bootstrap'
import ChatDisplay from "./ChatDisplay"
import ChatInsert from "./ChatInsert"
import './chat.css'


const initialState = []

const reducer = (state,action) => {
    switch(action.type){
        case 'add':
            const new_state =  [...state]
            new_state.push({
                content: action.content,
                name : action.name
            })
            console.log(new_state)  
            return new_state 
        default:
            return state
    }

}


const Chat = ({nickname}) =>  {

    const[tabMessage,dispatchTabMessage] = useReducer(reducer,initialState)

    const handleSubmitNewMessage = (new_message) => {
        dispatchTabMessage({type:"add" ,content:new_message, name:nickname})
    }

    useEffect(() =>{
        axios.get('https://google.com/search?q=javascript')
        .then(res => {
            console.log(res.data)
        })
        .catch(e => {
            console.log(e)
        })
    },[tabMessage])


    return (
        <div>
            <Header />
            The Chat :
            <Container>
        
            <Card>
                <Card><ChatDisplay tabMessage={tabMessage} /></Card>
                <Card><ChatInsert tabMessage={tabMessage} nickname={nickname} handleSubmitNewMessage={handleSubmitNewMessage}/></Card>
            </Card>
            </Container>
        </div>
    )
}

export default Chat
