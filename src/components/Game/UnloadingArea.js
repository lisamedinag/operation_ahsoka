import React from "react";
import {cargoArea, Grogu, storageCabinet} from "../../assets/exportedAssets";

export default function UnloadingArea (props) {
    let inicialPositions = [0, 1, 2, 3, 4, 5, 6, 7];

    return (
        <div className="wrapper">
            {
                inicialPositions.map((element, index) => {
                    if(props.grogusPosition === index){
                        return <div key={index}> <img src={Grogu} alt="Grogu"/></div>
                    } else if (index === 7 && props.grogusPosition < 7){
                        return <div key={index}> <img src={storageCabinet} alt="Storage cabinet"/></div>
                    } else {
                        return <div key={index}> <img src={cargoArea} alt="Cargo area"/></div>
                    }
                })
            }
        </div>
    )
};