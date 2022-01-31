import React from "react";
import '../layout/Button.css'

export default function Button (props) {
    return (
        <div className="neon-button">
            <button onClick={props.onClick} className="neons">{props.name}</button>
        </div>
    )
}