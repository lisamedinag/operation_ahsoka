import React from "react";

export default function GameResult(props) {
    if(props.isGameWon){return <div className="won"><h1>YOU HAVE WON</h1></div>}
    else if (props.isGameLost){return <div className="lost"><h1>YOU HAVE LOST</h1></div>}
}