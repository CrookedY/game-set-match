// React Component to create a desktop and mobile menu

import React, { Component } from 'react';
import './App.css';
import { UserContext } from './UserContext';

class Header extends Component {
    render() {
        return (
            <UserContext.Consumer>
            {({isLoggedIn, user, handleLoginClick}) => (
            <div className="header">
                <header>
                    <div className="burgerMenu">
                        <div className="menuLabel">Menu</div>
                        <div className="bars">
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>
                    </div>
                    <div className="container1">
                        <div className="banner">
                            <h2 className="welcome">Tennis Super 6</h2>
                        </div>
                    </div>
                    <div className="container2">
                        <h1 className="mobH1">Super6</h1>
                        <nav>
                            <ul>
                                <li className="active"><a href="/">Play Super 6</a></li>
                                <li>{ isLoggedIn ? <span>Welcome {user.username}! <a href="/Logout">Log Out</a></span> : <a href="/Login">Log In</a>}</li>
                                <li><a href="/Leaderboard">Leaderboard</a></li>
                                <li><a href="">Results</a></li>
                                <li><a href="/Feedback">Feedback</a></li>
                                <li className="searchItem"><form action="">Search:<input type="search" placeholder="Search"></input></form></li>
                            </ul>
                        </nav>
                      
                    </div>
                </header>
            </div>
            )}
            </UserContext.Consumer>
        );
    }
}

export default Header;