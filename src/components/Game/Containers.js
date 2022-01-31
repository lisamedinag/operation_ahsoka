import React from "react";
import {container, cookie, egg, frog} from "../../assets/exportedAssets";

export default function Containers(props) {
    return <div className="container-wrapper">
        <div>
                        <span className="container-item">
                            <img src={cookie} alt="Cookie"/>: {props.cookieContainer}
                        </span>
            <img src={container} alt="Container" className="container"/>
        </div>
        <div>
                         <span className="container-item">
                             <img src={egg} alt="Frogs eggs" className="container-item"/>: {props.eggContainer}
                         </span>
            <img src={container} alt="Container" className="container"/>
        </div>
        <div>
                        <span className="container-item">
                            <img src={frog} alt="Frogs" className="container-item"/>: {props.frogContainer}
                        </span>
            <img src={container} alt="Container" className="container"/>
        </div>
    </div>;
}