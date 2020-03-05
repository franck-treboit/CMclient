import React from 'react'

export default function BoutonVote(props) {


    function handleVote(){
            props.socket.emit('send-message', Date());
            console.log("j'ai compris qu'il fallait handleVote")
    }

    function handleSimulerVote(){

        props.socket.emit('send-votes', Date());
        console.log("send-votes")
    }

    return (
        <div>
            <button className="vote" onClick= {handleVote}>
                VOTER pour CE vote
            </button>
            <button className="vote" onClick= {handleSimulerVote}>
                simuler les 5 votes pour franck poser les
            </button>

        </div>

    )
}
