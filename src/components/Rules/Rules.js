import React from 'react';
import {Link} from "react-router-dom";

export default function Rules () {
    return (
        <div className="rules">
            <h2>HOW TO PLAY</h2>

            <p>The game board consist on 6 cargo area pieces which are located in the Razor Crest. On the seventh piece
            you can find the storage cabinet with the goods.</p>

            <p>You must unload the goods little by little, as they are very delicate. But be careful, Grogu can take
                advantage of this and get to the cabinet!</p>

            <p>If this happens, Mando won't be able to figure out where Ahsoka is and you fail the mission. Otherwise,
                if you manage to store all the cargo safely in each container, you complete the mission!</p>


            <ol>
            <p>When you throw the dice there are four possible outcomes:</p>
                <li>Unload 1 blue-cookie box</li>
                <li>Unload 1 frog's egg</li>
                <li>Unload 1 frog</li>
                <li>Grogu moves 1 cargo area forward</li>
            </ol>

            <p><strong>If you're unfamiliar with the pieces of the game, check them out
                <Link to="/pieces" style={{color: "#624585"}}> here</Link></strong></p>
        </div>
    )
};