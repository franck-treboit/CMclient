import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

export default function DisplaySinglePhotoAndText(props) {

    var toto = 'message';

    const [message, setMessage] = useState(toto);

    props.socket.on('message', (newMessage) => {
        setMessage([...message, newMessage]);
        console.log(message);
    });

    return (
        <div className="list-action" id="liste-action">
            <img src={message} />
        </div>
    );
}
