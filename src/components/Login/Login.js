import React from 'react'
import { useState } from 'react';
import LoginForm from "./LoginForm"
import Navbar from '../Navbar/index'
import "./login.css"

function Login() {
    const [isLoggedIn, setisLoggedIn] = useState(false);
    
    return (
        <div  className="grid-container">
            {isLoggedIn ? "" :  <header><b>LOTEC</b></header>}
            <main>
                <LoginForm loggedIn = {isLoggedIn} setLoggedIn= {setisLoggedIn} />
            </main>
            <footer>
                All Rights Reserved in Lotec
            </footer>
        </div>
    )
}

export default Login
