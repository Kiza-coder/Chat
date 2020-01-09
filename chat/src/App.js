import React , { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Chat from "./components/Chat"
import Login from "./components/Login"


function App() {


  const [nickname,setNickname] = useState("")

  const handleSubmitLogin = (nickname) => {
    setNickname(nickname)
  }

  return (
    <div>
         <Router>
      <div>
        <Switch>
          <Route path="/chat">
            <Chat nickname={nickname}/>
          </Route>
          <Route path="/">
            <Login handleSubmitLogin={handleSubmitLogin}/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
