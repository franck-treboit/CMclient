import React, {useEffect, useState} from "react";
import BoutonVote from './BoutonVote';
import apiHandler from "../../api/apiHandler";
import './../../styles/device.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

// const apiHandler  = new ApiHandler();

export default function EcranActionTel({socket, medias, avatar}) {

console.log("ce sont les médias", medias)



  return (
    <div className="list-action">

  <p>Dear {avatar.nom}, please click on the media you yourself want to vote for so that we know what media you, as a group, wish to see. Please.</p>
      {medias ? medias.map((media, key) => {
      return <>

        {/* <p>{media._id}</p> */}
        <div className ="mediaBB" key={key} onClick={ (e) => handleVoteMedia(media)}>
          {media.type === "image" 
          ? 
          <img src={media.media_url}></img>
          : media.type === "video" 
          ?
          <iframe src={media.media_url}>
          </iframe>
        : <p>{media.media_text}</p>

        }
        </div>
        </>
      }) : ""
    }
    </div>
  )

  function handleVoteMedia(media){

    socket.emit('send-vote-media', [media, avatar.nom ]);
    alert(`very well ${avatar.nom}, we have registered your vote`)
    console.log("j'ai compris qu'il fallait handleVote Media", media)
  }


}
