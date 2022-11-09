import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { loginRequest } from "./authConfig";


const Home = () => {
    const { instance } = useMsal();
    const { accounts } = useMsal();
    //in case you need to access the userinfo for further processing
    //console.log(accounts);
    //console.log(accounts[0]?.username);

    return (
        <>
            <UnauthenticatedTemplate>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                            Edit <code>src/App.js</code> and save to reload.
                        </p>
                        <button onClick={() => instance.loginRedirect(loginRequest)}>
                            Login
                        </button>
                    </header>
                </div>
            </UnauthenticatedTemplate>

            <AuthenticatedTemplate>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />

                        <p>
                            Hello {accounts[0]?.name}!
                        </p>

                        <button onClick={() => instance.logoutRedirect({ postLogoutRedirectUri: "/" })}>
                            Logout
                        </button>
                    </header>
                </div>
            </AuthenticatedTemplate>
        </>
    )
}

export default Home;