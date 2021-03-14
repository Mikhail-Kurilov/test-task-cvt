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
                <div className="authorizationOff" onClick={() => this.authorizationToggle(false)}>
                </div>
                <form className="authorization">
                    <p className="enterWord">Вход</p>
                    <span className="authorizationContainer">
                        <input id="login" type="email"></input> 
                        <input id="password" type="password"></input>
                    </span>
                    <span className="checkBox">
                        <input id="checkMark" type="checkbox"></input>
                        <label className="rememberWord" for="checkMark">Запомнить</label>
                    </span>
                    <button className="buttonAuth" onClick={() => this.login()}>Войти</button>
                </form>
                
            </div>
        )
    }
}

export default Authorization;