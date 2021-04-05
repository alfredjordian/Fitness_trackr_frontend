import './css/App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import Home from './Home';
import Routines from './Routines';
import MyRoutines from './MyRoutines';
import Activities from './Activities';
import { getUserName } from './api';
// import Login from './Login';

function App() {

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await getUserName(token)
        
      const routData = result
      //.forEach(r => console.log(r.name, r.description))
      
      setUsername(routData)
    };
 
    fetchData();
  }, [setUsername, token]);

  // setToken(localStorage.getItem("token"));


  return (
    <div className="App">
  <Router>
   <Switch>
   
     
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
    

    </Switch> 
  </Router>
  </div>
  );
}

export default App;
