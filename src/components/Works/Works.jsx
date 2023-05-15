import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.css'

const Works = () => {



    return (


        <div>
            <p>Fiou, en voilà de bien beaux, des cas d'études !</p>
            <p>Vas-y l'artiste, clique donc sur l'un des liens ci-dessous : </p>
            <div className='works'>
                <NavLink to="/studycase/solane">
                    <li>Solane</li>
                </NavLink>
                <NavLink to="/studycase/platon">
                    <li>Platon</li>
                </NavLink>
                <NavLink to="/studycase/sedal">
                    <li>Sedal</li>
                </NavLink>
            </div>
        </div>
    );
};

export default Works;