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
            <div>
                <form className="authorization">
                    <p className="enterWord">Вход</p>
                    <span className="authorizationContainer">
                        <input id="login"></input> 
                        <input id="password"></input>
                    </span>
                    <span className="checkBox">
                        <input id="checkMark"></input>
                        <p className="rememberWord">Запомнить</p>
                    </span>
                    <button className="buttonAuth" onClick={() => this.login()}>Войти</button>
                </form>
                <div className="authorizationOff" onClick={() => this.authorizationToggle(false)}>
                </div>
            </div>
        )
    }
}

export default Authorization;