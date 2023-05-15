import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <NavLink to="/">
                        <li>Home</li>
                    </NavLink>
                    <NavLink to="/about">
                        <li>About</li>
                    </NavLink>
                    <NavLink to="/works">
                        <li>Works</li>
                    </NavLink>
                    <NavLink to="/studycase/solane">
                        <li>Solane</li>
                    </NavLink>
                    <NavLink to="/studycase/platon">
                        <li>Platon</li>
                    </NavLink>
                    <NavLink to="/studycase/sedal">
                        <li>Sedal</li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;