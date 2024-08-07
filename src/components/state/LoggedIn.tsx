import { useState } from "react";

const LoggedIn = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true)
    }
    const handleLogOut = () => {
        setIsLoggedIn(0)
    }
  return (
    <div>
        <button onClick={handleLogin}>LogIn</button>
        <button onClick={handleLogOut}>LogOut</button>
        <div>User is {isLoggedIn.length ? 'Logged in' : 'Logged Out'}</div>
    </div>
  )
}

// here when we pass 0 (in JS it is known as false) but here TS is taken care of it...... 

export default LoggedIn;