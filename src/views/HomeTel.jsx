import React, {useState, useEffect} from 'react';
import EcranActionTel from '../components/frontTelephone/EcranActionTel';
import io from 'socket.io-client';

import EcranRange from "../components/frontTelephone/EcranRange";
import Chat from './../components/Chat'
import './../styles/tel.css';
import Avatar from '../components/Avatar';

const ioClient = io.connect(`${process.env.REACT_APP_BACKEND_URL}`);
const uuidv4 = require("uuid/v4");

// import { Link } from 'react-router-dom';

export default function HomeTel() {
   
    //states pour l'affichage des composants
    const [displayAvatar, setDisplayAvatar] = useState(false);
    const [displayEcranRange, setDisplayEcranRange] = useState(false);
    const [displayEcranActionTel, setDisplayEcranActionTel] = useState(false);
    // utilisation du socket
    const [socket,setSocket] = useState( io(`${process.env.REACT_APP_BACKEND_URL}`))
    //générer un id unique
    const idUnique = getUniqueId();

    function  getUniqueId() {
        return uuidv4();    
    }

    useEffect(() => {
        socket.emit("registerTel", idUnique );
    }, [])

        socket.on("choixAffichageTel", data => {
            console.log("data", data);
            if ( data[1] == 2) {
                setDisplayAvatar(true);
                setDisplayEcranRange(true);
                setDisplayEcranActionTel(false);
            } else if ( data[1] == 3) {
                setDisplayAvatar(true);
                setDisplayEcranRange(false);
                setDisplayEcranActionTel(true);
            } else {
                setDisplayAvatar(false);
                setDisplayEcranRange(false);
                setDisplayEcranActionTel(false);
            }
        })

    // socket.on('privateRegister', avatar => {
    //     console.log("j'ai bien reçu mon avatar", avatar)
 
    // })

    return (
        <div className="home-tel">
            <h1>BonGEOurrE</h1>
              {displayAvatar &&  <Avatar socket={socket} />}
              {displayEcranRange &&  <EcranRange socket={socket} />}
              {displayEcranActionTel &&  <EcranActionTel  socket={socket} />}
            <Chat />
        </div>
    )
};