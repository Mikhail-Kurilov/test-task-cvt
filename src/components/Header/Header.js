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
                <div className="header__wrapper_enterBox_userButtonBox">
                    <p className="header__wrapper_enterBox_userButtonBox_userName" contentEditable="true">{this.userNameAdd()}</p>
                    <button className="header__wrapper_enterBox_userButtonBox_button" onClick = { (event) => this.switchOff(event) }>Выйти</button>
                </div>
            )
        } else 
        return (
            <div>
                <button className="header__wrapper_enterBox_userButtonBox_button" onClick = { (event) => this.switchOn(event) }>Войти</button>
            </div>
        )
    }

    render() {
        return (
            <header className="header">
                <div className="header__wrapper">
                    <div className="header__wrapper_logoBox">
                        <img src="/sign.png" alt="sign" className="header__wrapper_logoBox_logo"></img>
                        <span className="header__wrapper_logoBox_logoTitle"><h1 className="header__wrapper_logoBox_logoTitle_h1">Видеосервис</h1></span>
                    </div>
                    <form className="header__wrapper_searchBox">
                        <span>
                            <input className="header__wrapper_searchBox_searchWord" type="search" placeholder="Поиск..."></input>
                        </span>
                        <button className="header__wrapper_searchBox_findButton">Найти</button>
                    </form>
                    <div className="header__wrapper_enterBox">
                        {this.authorization()}
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;