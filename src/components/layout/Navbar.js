import React from 'react';
import {Link} from "react-router-dom";

export default function Navbar () {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/rules">Rules</Link>
            <Link to="/pieces">Pieces</Link>
            <Link to="/game">Game</Link>
        </nav>
    )
};
