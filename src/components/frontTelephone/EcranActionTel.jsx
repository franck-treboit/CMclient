import React, {useEffect, useState} from "react";
import BoutonVote from './BoutonVote';
import apiHandler from "../../api/apiHandler";
import './../../styles/device.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

// const apiHandler  = new ApiHandler();

export default function EcranActionTel({socket, medias}) {

console.log("ce sont les médias", medias)



  return (
    <div className="list-action">
      mon web socket tel
      {medias ? medias.map(media => {
      return <>

        <p>{media._id}</p>
        <div className ="mediaBB" id="media" onClick={ (e) => handleVoteMedia(media)}>
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

    socket.emit('send-vote-media', media );
    console.log("j'ai compris qu'il fallait handleVote Media", media)
  }


}
