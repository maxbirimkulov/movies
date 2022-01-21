import React from 'react';
import './header.css'

const Header = () => {
    return (
        <header className='header'>
            <nav className='#2196f3 blue header__nav '>
                <div className="nav-wrapper container">
                    <a href="#" className="brand-logo">IT-RUN </a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="sass.html">Movies</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;