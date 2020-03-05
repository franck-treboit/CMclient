import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
let tata = 'media';

export default function DisplayPhoto(props) {

    const [media, setMedia] = useState(tata);

    props.socket.on('private',  function(mediaRecu){
        setMedia( mediaRecu);
    });

    return (
        <div className="list-media" id="liste-media">
            Image display 1 <img src={media} />
        </div>
    );
}