import React, { useState } from 'react';

const PopupLogin = ({pressClose, setLoggedOut, setLoggedIn, loggedIn }) => {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ loginSuccess, setLoginSuccess ] = useState(false);
    const [ logoutSuccess, setLogoutSuccess ] = useState(false);
    const [ loginErrorInvalid, setLoginErrorInvalid ] = useState(false);

    const pressLogin = () => {
        if ( username !== 'admin' || password !== 'admin' ) { setLoginErrorInvalid(true); }
        if ( username == 'admin' && password == 'admin' ) {
            setLoginSuccess(true)
            setLoggedIn(true)
            setLoggedOut(false)
            
        }
    }

    const pressLogout = () => {
        setLoggedOut(true)
        setLogoutSuccess(true)
        setLoginSuccess(false)
        setLoggedIn(false)
    }

    return (
        <div className="popup">
            <div className="popup_con">
                <div className="popup_close" onClick={() => pressClose()}>x</div>
                <div className="popup_body">
                    { loginSuccess ? (
                        <>
                            <h3>Success!</h3>
                            <p>Welcome back Admin!</p>
                            <div className="popup_btns">
                                <button onClick={() => pressClose()}>Close</button>
                            </div>
                        </>
                    ) : loggedIn ? (
                        <>
                            <h3>Logout</h3>
                            <p>Do you want to logout?</p>
                            <div className="popup_btns">
                                <button onClick={() => pressLogout()}>Yes</button>
                                <button onClick={() => pressClose()}>Close</button>
                            </div>
                        </>
                    ) : logoutSuccess ? (
                        <>
                            <h3>Thank you!</h3>
                            <p>See you again Admin!</p>
                            <div className="popup_btns">
                                <button onClick={() => pressClose()}>Close</button>
                            </div>
                        </>
                    ) : (
                        <>
                            <h3>Login</h3>
                            <p>Input username and password below to login.</p>
                            { loginErrorInvalid ? (
                                <p className="loginerror">Invalid username or password!</p>
                            ) : null }
                            <form onSubmit={pressLogin}>
                                <input type="text" placeholder="Admin username..." onChange={e => setUsername(e.target.value)} value={username} />
                                <input type="password" placeholder="Admin password..." onChange={e => setPassword(e.target.value)} value={password} />
                                <button onClick={pressLogin}>Login</button>
                                <button onClick={() => pressClose()}>Cancel</button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PopupLogin;