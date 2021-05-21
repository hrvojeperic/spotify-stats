import React, { Component } from 'react';
import Stats from './Stats';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const Login = (props) => {
    return (
        <div>
            <button onClick={props.login}>Login</button>
        </div>
    );
}


export default Login;