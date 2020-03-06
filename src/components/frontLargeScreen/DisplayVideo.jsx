import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
let tata = 'media';

export default function DisplayVideo(props) {

    const [media, setMedia] = useState(tata);

    props.socket.on('private',  function(mediaRecu){
        setMedia( mediaRecu);
    });

    props.socket.on('choixAffichage',  function(mediaRecu){
        //setMedia( mediaRecu);
        console.log("props photo sequence RRRRR", props.sequence );
        if ( props.sequence == 1) {
            setMedia("");
        }
        if ( props.sequence == 2) {
            setMedia("");
        }
        if ( props.sequence == 3) {
            setMedia("");
        }
        if ( props.sequence == 4) {
            setMedia("https://www.atomisation.net/marker/annedupuis.mp4");
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
            ksdjfhqlsdkjfhdskjfq
            <video  autoplay="autoplay" controls autoplay>
                <source src={media} type="video/mp4" />
            </video>
        </div>
    );
}