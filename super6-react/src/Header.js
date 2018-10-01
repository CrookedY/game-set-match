import React, { Component } from 'react';
import './App.css';

class Header extends Component {
    render() {
        return (
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
                                <li className="active"><a href="">Play Super 6</a></li>
                                <li><a href="">Leaderboard</a></li>
                                <li><a href="">Results</a></li>
                                <li><a href="">Feedback</a></li>
                                <li className="searchItem"><form action="">Search:<input type="search" placeholder="Search"></input></form></li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;