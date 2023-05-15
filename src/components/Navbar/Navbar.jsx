import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <nav>
                <ul className='nav-elements'>
                    <NavLink to="/">
                        <li>Home</li>
                    </NavLink>
                    <NavLink to="/about">
                        <li>About</li>
                    </NavLink>
                    <NavLink to="/works">
                        <li>Works</li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;