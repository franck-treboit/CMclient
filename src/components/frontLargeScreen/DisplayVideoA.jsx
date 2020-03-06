import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
let tata = 'media';

export default function DisplayVideo(props) {

    const [media, setMedia] = useState(tata);

    props.socket.on('private',  function(mediaRecu){
        setMedia( mediaRecu);
    });

    return (
        <div className="list-media-video" id="liste-media">
            <video  autoplay="autoplay" controls autoplay className="list-media-video" >
                <source src="https://www.atomisation.net/marker/soleil.mp4" type="video/mp4" />
            </video>
        </div>
    );
}


