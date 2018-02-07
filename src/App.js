import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import Home from './Home.js';
import Contact from './Contact.js';
//import CTAButton from './CTAButton.js';

class App extends Component {
  //Color palette for this project #fefeff, #a971c0, #9b59b6, #623475, #130a17
  render() {
    return (
      <Router>
        <div className='App'>
            <div className='FooterGoesDown'>
                <NavBar/>
                <Header/>
                <div className='Container'>
                    <Switch>
                        <Route exact={true} path='/' component={Home} />
                        <Route path='/Contact' component={Contact} />
                        <Route path='/About' component={Home} />
                    </Switch>
                </div>
            </div>
            <Footer/>
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
                    <li className='Navbar-li lihover Nav-button'><Link to="/">ABOUT</Link></li>
                    <li className='Navbar-li lihover Nav-button'><Link to="/">WORK</Link></li>
                    <li className='Navbar-li lihover Nav-button'><Link to="/Contact">CONTACT</Link></li>
                </ul>
            </div>
        );
    }
}

class Header extends Component {
    render() {
        return (
            <header className='App-header'>
                <h1 className='App-title'>Heart Lotus Web Design</h1>
                <h3 className='App-subtitle'>Simple, Affordable, Effective</h3>
            </header>
        );
    }
}

class Footer extends Component {
    render() {
        return (
            <footer className='App-footer'>
                <p>Designed and Developed by Heart Lotus Web</p>
                <p>Content is &copy;Heart Lotus Web 2018 - All Rights Reserved</p>
            </footer>
        );
    }
}

export default App;
