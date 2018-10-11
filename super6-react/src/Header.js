// React Component to create a desktop and mobile menu

import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';
class Header extends Component {
    constructor(props){
        super(props)
    }
    
    

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
                                <li className="active"><Link to="/">Play Super 6</Link></li>
                                <li><Link to="/Login" id='loginHeader' onClick={this.props.handleLogout}>{this.props.loginHeaderMsg}</Link></li>
                                <li><Link to="/Leaderboard">Leaderboard</Link></li>
                                <li><Link to="">Results</Link></li>
                                <li><Link to="/Feedback">Feedback</Link></li>
        
                            </ul>
                        </nav>
                      
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;