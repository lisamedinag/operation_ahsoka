import React from 'react';
import {NavLink, Link} from "react-router-dom";

export default function Navbar () {
    return (
        <nav>
            <Link to="/" >Home</Link>
            <NavLink to="/rules">Rules</NavLink>
            <NavLink to="/pieces">Pieces</NavLink>
            <NavLink to="/game">Game</NavLink>
        </nav>
    )
};
