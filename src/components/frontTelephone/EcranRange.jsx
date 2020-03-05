import React, { useState, useEffect } from 'react';
import ElementRange from './ElementRange';
import './../../styles/range.css';


// les choix (ensuite regroupés dans un tableau grâce au choices, setChoices)
const montyPython = {
    name: 'Monty Python',
    value: '5'
};

const bowie = {
    name: 'David Bowie',
    value: '5'
};

const truffaut = {
    name: 'François Truffaut',
    value: '5'
};

const beaubourg = {
    name: 'Centre Beaubourg',
    value: '5'
};

const tokyo = {
    name: 'Tokyo',
    value: '5'
};

export default function EcranRange(props) {
	let localCle = 'cle';

	const [ cle, setCle ] = useState(localCle);

	const [ choices, setChoices ] = useState([ tokyo, montyPython, truffaut, bowie, beaubourg  ]);


    // fonction déclenchée qui permet d'envoyer un media par le socket.
	function handleVoteMedia(e) {
        e.preventDefault();
		props.socket.emit('send-media', choices);
		console.log("j'ai compris qu'il fallait handleVote Media");
    }

    function sendVote(e){
        let votes = [choices[0].value, choices[1].value, choices[2].value, choices[3].value, choices[4].value]
        console.log(votes);
        e.preventDefault();
        props.socket.emit('send-votes', votes);
    }
    
    function handleRangeInput(value, name) {
        let choicesToUpdate = [... choices.filter(choice => choice.name !== name), {name: name, value : value}];
        setChoices([...choicesToUpdate.sort((a, b) => a.name < b.name ? +1 : -1)], console.log("ce sont les choix du public", choicesToUpdate)) ;
        console.log("ici ça devrait être bon", choices)
    }

	props.socket.on('privateRegister', (newMessage) => {
		setCle([ ...cle, newMessage ]);
		console.log(cle);
	});

	props.socket.on('privateRegister', function(idRecu) {
		console.log('MonprivateRegister', idRecu);
	});


    //composant qui map à travers le tableau de choix potentiels pour proposer à l'utilisateur un input range par choix. Les valeurs des inputs lui remontent grâce à la callback
	return (
		<div>
			<button className="vote" onClick={handleVoteMedia}>
				VOTER pour CE media
			</button>
			--{cle}--
			<form onSubmit={handleVoteMedia}>
                <p>Nobody knows Chris Marker.
                    But do you know these things?
                </p>
				{choices.map((choice, k) => {
                    {console.log(choice)}
                return <ElementRange clbk={handleRangeInput} choice={choice} key={k}/>})	
            }

				<button type="submit" onClick={sendVote}>
					This is how well I know these things
				</button>
			</form>
		</div>
	);
}
