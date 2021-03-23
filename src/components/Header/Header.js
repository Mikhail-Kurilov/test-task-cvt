import React from 'react';

import './Header.css';

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.authorizationToggle = props.authorizationToggle;
        this.state = { 
            authorizationState: props.authorizationState
        }
    }

    switchOn() {
        this.authorizationToggle(true);
    }

    switchOff() {
        this.setState( {authorizationState: false} )
    }

    userNameAdd() {
        return localStorage.getItem('userName') ? localStorage.getItem('userName') : 'Константин К.';
    }

    userNameSaveStorage(event) {
        const userName = event.target.innerHTML;
        let name = userName.replaceAll('&nbsp;', '');
        name = name.trim();
         if (name !== '') {
             localStorage.setItem('userName', name);
         } 
    }

    authorization() {
        if (this.state.authorizationState) {
            return (
                <div className="userButtonBox">
                    <p className="userName" contentEditable="true">{this.userNameAdd()}</p>
                    <button className="button" onClick = { (event) => this.switchOff(event) }>Выйти</button>
                </div>
            )
        } else 
        return (
            <div>
                <button className="button" onClick = { (event) => this.switchOn(event) }>Войти</button>
            </div>
        )
    }

    render() {
        return (
            <header className="header">
                <div className="wrapper">
                    <div className="logoBox">
                        <img src="/sign.png" alt="sign" className="logo"></img>
                        <span className="logoTitle"><h1 className="h1">Видеосервис</h1></span>
                    </div>
                    <form className="searchBox">
                        <span>
                            <input className="searchWord" type="search" placeholder="Поиск..."></input>
                        </span>
                        <button className="findButton">Найти</button>
                    </form>
                    <div className="EnterBox">
                        {this.authorization()}
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;