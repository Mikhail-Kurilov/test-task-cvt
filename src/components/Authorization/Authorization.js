import React from 'react';

import './Authorization.css';

class Authorization extends React.Component {
    constructor(props) {
        super(props);

        this.authorizationToggle = props.authorizationToggle;
        this.authorizationResult = props.authorizationResult;
    }

    login() {
        const password = document.getElementById('password').value;
        const login = document.getElementById('login').value;
        
        if (login.length >=3 && login.length <=20 && password.length >=3 && password.length <=20) {
            this.authorizationResult(true);
        } else {
            this.authorizationResult(false);
        }
    }

    render() {
        return (
            <div className="authorizationWrapper">
                <div className="authorizationWrapper__authorizationOff" onClick={() => this.authorizationToggle(false)}>
                </div>
                <form className="authorizationWrapper_authorization">
                    <p className="authorizationWrapper_authorization_enterWord">Вход</p>
                    <span className="authorizationWrapper_authorization_authorizationContainer">
                        <input id="login" type="email"></input> 
                        <input id="password" type="password"></input>
                    </span>
                    <span className="authorizationWrapper_authorization_checkBox">
                        <input id="checkMark" type="checkbox"></input>
                        <label className="authorizationWrapper_authorization_checkBox_rememberWord" for="checkMark">Запомнить</label>
                    </span>
                    <button className="authorizationWrapper_authorization_buttonAuth" onClick={() => this.login()}>Войти</button>
                </form>
            </div>
        )
    }
}

export default Authorization;