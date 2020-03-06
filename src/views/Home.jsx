import React, {useState, useEffect} from "react";

import io from 'socket.io-client';

// import { Link } from 'react-router-dom';
import './../styles/style.css';
import DisplayPhoto from "../components/frontLargeScreen/DisplayPhoto";
import DisplayGraph from './../components/frontLargeScreen/DisplayGraph';
import DisplayVideo from './../components/frontLargeScreen/DisplayVideo';
import Aside from './../components/frontLargeScreen/Aside';
import DisplayMedia from './../components/frontLargeScreen/DisplayMedia';


import './../styles/device.css';
// const ioClient = io.connect('http://localhost:4000');
export default function Home() {
    const [displayPhoto, setDisplayPhoto] = useState(false);
    const [displayGraph, setDisplayGraph] = useState(false);
    const [displayMedia, setDisplayMedia] = useState(false);
    const [displayVideo, setDisplayVideo] = useState(false);
    const [displaySequence, setDisplaySequence] = useState(1);
    const [socket, setSocket] = useState( io(`${process.env.REACT_APP_BACKEND_URL}`))

    useEffect(() => {
        socket.emit("register", "iamfront" );
    }, [])
    //attention on mpeut mettre les inititialtialisons ici par exemple DisplayGraph dans le deps

	function sendMessage() {
		socket.emit('send-message', 'salut les potos');
	}

    socket.on("choixAffichage", data => {
        console.log("DDDDDDDdata",data);
        setDisplaySequence(data);
        if ( data == 1){
            setDisplayPhoto(true);
            setDisplayGraph(false);
            setDisplayVideo(false);
        } else if ( data == 2) {
            setDisplayPhoto(true);
            setDisplayGraph(false);
            setDisplayVideo(false);
        } else if ( data == 3) {
            setDisplayPhoto(false);
            setDisplayGraph(true);
            setDisplayVideo(false);
        } else if ( data == 4) {
            setDisplayPhoto(false);
            setDisplayGraph(false);
            setDisplayVideo(true);
        } else if ( data == 5) {
            setDisplayPhoto(true);
            setDisplayGraph(false);
            setDisplayVideo(true);
        } else if ( data == 6) {
            setDisplayPhoto(true);
            setDisplayGraph(false);
            setDisplayVideo(true);
        }    })

    socket.on("votes", data => {
        console.log("voteee",  data );
        setDisplayGraph(true);
    })

    return (
        <div className="home">
            <main>
              {displayPhoto &&  <DisplayPhoto  socket={socket}  sequence={displaySequence} />}
              {displayGraph &&  <DisplayGraph  socket={socket}  sequence={displaySequence} />}
              {displayMedia &&  <DisplayMedia  socket={socket}  sequence={displaySequence} />}
              {displayVideo &&  <DisplayVideo  socket={socket}  sequence={displaySequence}/>}
            </main>
            <Aside socket={socket} />
        </div>
    )
}
