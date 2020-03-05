import React, {useState, useEffect} from "react";
import './../../styles/graph.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
let tata = 'vote';

function drawSquares(n) {
    const tpl = [];
    for (let i = 0; i < 80; i += 1) {
        if (i < n ) tpl.push(<div className="full"></div>)
        else tpl.push(<div className="empty"></div>)
    }
    return tpl
}

export default function DisplayGraph(props) {

    const [vote, setVote] = useState(tata);
    const [StyleTableau, setStyleTableau] = useState([0,0,0,0,0,0,0]);


    useEffect(() => {
        props.socket.on('votes',  function(voteRecu){
            setVote(voteRecu);
            console.log("recu",voteRecu);
            setStyleTableau(ancienStyle => {
                let NewStyleTableau =[] ;
                NewStyleTableau[0] = Number(ancienStyle[0]) + Number(voteRecu[0]);
                NewStyleTableau[1] = Number(ancienStyle[1]) + Number(voteRecu[1]);
                NewStyleTableau[2] = Number(ancienStyle[2]) + Number(voteRecu[2]);
                NewStyleTableau[3] = Number(ancienStyle[3]) + Number(voteRecu[3]);
                NewStyleTableau[4] = Number(ancienStyle[4]) + Number(voteRecu[4]);
                return NewStyleTableau;
            });
        });
    }, [])


    return (
        <div className="fondVote" >
            <div className="col-sm-12 tokyo">
                {drawSquares(StyleTableau[0])}
            </div>
            <div className="col-sm-12 monty">
                {drawSquares(StyleTableau[1])}
            </div>
            <div className="col-sm-12 truffaud">
                {drawSquares(StyleTableau[2])}
            </div>
            <div className="col-sm-12 bowie">
                {drawSquares(StyleTableau[3])}
            </div>
            <div className="col-sm-12 beaubourg">
                {drawSquares(StyleTableau[4])}
            </div>
        </div>

    );
}