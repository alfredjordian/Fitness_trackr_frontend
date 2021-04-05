import './css/App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, {useState} from 'react'
import Home from './Home';
import Routines from './Routines';
import MyRoutines from './MyRoutines';
import Activities from './Activities';
// import Login from './Login';

function App() {

  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");

  return (
  <Router>
   <Switch>
    <div className="App">
     
    <Route exact path = '/home'>
     <Home token={token} setToken={setToken} username={username} setUsername={setUsername}/>
     </Route>

     <Route exact path = '/routines'>
     <Routines token={token} setToken={setToken} username={username} setUsername={setUsername} />
     </Route>

     <Route exact path = '/myroutines'>
     <MyRoutines token={token} setToken={setToken} username={username} setUsername={setUsername} />
     </Route>

     <Route exact path = '/activities'>
     <Activities setToken={setToken} token={token} username={username} setUsername={setUsername} />
     </Route>

     {/* <Routines />
     <MyRoutines/>
     <Activities /> */}
     {/* <Route exact path = '/login'>
     <Login/>
     </Route> */}
    
    </div>

    </Switch> 
  </Router>
  );
}

export default App;
