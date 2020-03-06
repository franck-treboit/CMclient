import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
let tata = 'media';
let titi = '';

export default function DisplayPhoto(props) {

    const [media, setMedia] = useState(tata);
    const [mediaSequence, setmediaSequence] = useState(titi);

    console.log("props photo sequence", props.sequence );

    props.socket.on('private',  function(mediaRecu){
        setMedia( mediaRecu);
    });

    props.socket.on('choixAffichage',  function(mediaRecu){
        //setMedia( mediaRecu);
        console.log("props photo sequence RRRRR", props.sequence );
        if ( props.sequence == 1) {
            setMedia("https://www.atomisation.net/marker/screen1.jpg");
        }
        if ( props.sequence == 2) {
            setMedia("https://www.atomisation.net/marker/screen2.jpg");
        }
        if ( props.sequence == 3) {
            setMedia("");
        }
        if ( props.sequence == 4) {
            setMedia("");
        }
        if ( props.sequence == 5) {
            setMedia("");
        }
        if ( props.sequence == 6) {
            setMedia("");
        }
        if ( props.sequence == 7) {
            setMedia("");
        }
        if ( props.sequence == 8) {
            setMedia("");
        }
        if ( props.sequence == 9) {
            setMedia("");
        }

    });


    return (
        <div className="list-media" id="liste-media">
            <img src={media} />
        </div>
    );
}