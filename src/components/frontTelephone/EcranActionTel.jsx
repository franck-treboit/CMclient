import React, {useEffect, useState} from "react";
import BoutonVote from './BoutonVote';
import apiHandler from "../../api/apiHandler";
import './../../styles/device.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

// const apiHandler  = new ApiHandler();

export default function EcranActionTel(props) {

  const [medias, setMedias] = useState([])

  useEffect(() => {
    props.socket.on("send-media", randomMedias => {
      console.log(randomMedias)
      setMedias([...randomMedias])
    })
  }, []) 


  const submitMedia = e => {
    const fd = new FormData();
    fd.append("title", this.state.title);
    fd.append("date_of_publication", this.state.date_of_publication);
    fd.append("type", this.state.type);
    fd.append("author_first_name", this.state.author_first_name);
    fd.append("author_last_name", this.state.author_last_name);
    fd.append("resource", this.state.resource);
    fd.append("preview", this.state.preview);
    fd.append("media_text", this.state.media_text);
    fd.append("media_url", this.state.media_url);
    fd.append("description", this.state.description);
    fd.append("duration", this.state.duration);
    fd.append("wine_association", this.state.wine_association);

    apiHandler.post("/tel", fd)
    .then(apiRes => {
      console.log(apiRes);
    })
    .catch(apiErr => console.error(apiErr))
    },
    
    updateState = e => {
      this.setState({ [e.target.title]: e.target.value });
  };
        

  return (
    <div className="list-action">
      mon web socket tel
      {medias ? medias.map(media => {
      return <>
        <div className ="mediaBB" id="media" onClick={handleVoteMedia(media)}>
          {media.type === "image" 
          ? 
          <img src={media.media_url}></img>
          : media.type === "video" 
          ?
          <iframe src={media.media_url}>
          </iframe>
        : 
          <p>{media.media_text}</p>
        }
        </div>
        </>
      }) : ""
    }
    </div>
  )

  function handleVoteMedia(media){

    props.socket.emit('send-vote-media',media );
    console.log("j'ai compris qu'il fallait handleVote Media", media)
  }


}
