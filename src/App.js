import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import Home from './Home.js';
import Contact from './Contact.js';
//import CTAButton from './CTAButton.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
            <NavBar/>
            <div className='App2'>
                <Header/>
                <div className='FooterGoesDown'>
                    <div className='Container'>
                        <Switch>
                            <Route exact={true} path='/' component={Home} />
                            <Route path='/Contact' component={Contact} />
                        </Switch>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
      </Router>
    );
  }
}

class NavBar extends Component {
    render() {
        return (
            <div>
                <ul className='Navbar'>
                    <li className='Navbar-li lihover Nav-button'><Link to="/">HOME</Link></li>
                    <li className='Navbar-li lihover Nav-button'><Link to="/">HELP TREES</Link></li>
                    <li className='Navbar-li lihover Nav-button'><Link to="/">TREES SPEAK</Link></li>
                    <li className='Navbar-li lihover Nav-button'><Link to="/Contact">CONTACT</Link></li>
                </ul>
            </div>
        );
    }
}

class Header extends Component {
    render() {
        return (
            <header className='App-header Header-size'>
                <h1 className='App-title'>Healthy Trees R Us</h1>
                <h3 className='App-subtitle'>Trees Help Us, Let Us Help Them</h3>
            </header>
        );
    }
}

class Footer extends Component {
    render() {
        return (
            <footer className='App-footer'>
                <p>Designed and Developed by Heart Lotus Web</p>
                <p>Content is &copy;HealthyTreesRUs.com 2018 - All Rights Reserved</p>
            </footer>
        );
    }
}

export default App;
