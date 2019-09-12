import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navi" style={navStyles}>
            <div><p><NavLink  to="/">Home</NavLink></p></div>
        </div>
    )
}

const navStyles = {
    backgroundColor: '#19B5FE',
}

export default Navbar;
