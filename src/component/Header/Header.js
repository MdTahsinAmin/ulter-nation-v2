import React from 'react';
import logo from '../../images/44860.png'
import './Header.css'
import {Image} from 'react-bootstrap'
const Header = () => {
  
    return (
        <div className ='header'>
            <Image src={logo}  rounded/>
            <nav>
                <a href="/countries">Countries</a>
                <a href="/help">Help</a>
            </nav>
        </div>
    );
};

export default Header;