import React from 'react';
import {Grogu, container, cookie, egg, frog, storageCabinet, cargoArea, cargoAreaGrogu, youWon, youLost}
    from '../../assets/exportedAssets'

export default function Pieces () {
    return (
        <div className="pieces">
            <h2>Get familiar with the game's pieces</h2>
            <ul>
                <li><img src={cargoArea} alt="Cargo area"/> Cargo area (6)</li>
                <li><img src={storageCabinet} alt="Storage cabinet"/> Storage cabinet (1)</li>
                <li><img src={container} alt="Container"/> Container (3)</li>
                <li><img src={cookie} alt="Blue-cookie box"/> Blue-cookie box (3)</li>
                <li><img src={egg} alt="Unfertilized frog's egg"/> Unfertilized frog's egg (3)</li>
                <li><img src={frog} alt="Frog"/> Frog (3)</li>
                <li><img src={Grogu} alt="Grogu"/> Grogu (1)</li>
            </ul>
        </div>
    )
};