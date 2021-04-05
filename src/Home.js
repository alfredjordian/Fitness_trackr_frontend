import React from 'react'
import Login from './Login'
import './css/Home.css'
import NavBox from './NavBox'

// Is there a better way to verify, the token? I feel like this is a bit brittle
function Home({token, setToken, setUsername, username}) {
    return (
        <div className="home">
            {token ? null : <Login token={token} setToken={setToken} username={username} setUsername={setUsername}/>}
           
            <div className="hero">
            </div>
            <NavBox/>
        </div>
    )
}

export default Home
