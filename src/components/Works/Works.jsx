import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.css'

const Works = () => {

    return (

        <div id="category">
            <h2>Au fil des années, nous avons pu accompagner les meilleurs.</h2>
            <p>Découvrez pas à pas comment nous avons été présents pour lancer vos marques préférées.</p>
            <p>Fiou, en voilà de bien beaux, des cas d'études !</p>
            <p>Vas-y l'artiste, clique donc sur l'un des liens ci-dessous : </p>
            <div id="buttons">
                <NavLink to="/works/solane-study-case">
                    <li>Solane</li>
                </NavLink>
                <NavLink to="/works/platon-study-case">
                    <li>Platon</li>
                </NavLink>
                <NavLink to="/works/sedal-study-case">
                    <li>Sedal</li>
                </NavLink>
            </div>
        </div>
    );
};

export default Works;