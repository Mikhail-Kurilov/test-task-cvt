import React from 'react';
import Helmet from 'react-helmet';

import './App.css';


import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Authorization from './components/Authorization/Authorization';
import Body from './components/Body/Body';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      login: false
    };
  }

  authorizationToggle(value) {
    this.setState({ login: value });
  }

  authorizationResult(value) {
    this.setState({ login: !value });
    this.header.setState({ authorizationState: value })
  }

  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Видеосервис</title>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet"></link>
        </Helmet>
        {this.state.login ?
          <Authorization
            authorizationResult={(val) => this.authorizationResult(val)}
            authorizationToggle={(val) => this.authorizationToggle(val)}
          /> : ''
        }
        <Header
          ref={header => this.header = header}
          authorizationToggle={(val) => this.authorizationToggle(val)}
          authorizationState={this.state.login}
        />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
