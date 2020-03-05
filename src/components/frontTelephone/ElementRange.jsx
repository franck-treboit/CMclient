import React from 'react';
import './../../styles/range.css'


// fabrique un élément range pour le props qu'on lui passe et balance la valeur au parent EcranRange grâce à une callback
export default function ElementRange({choice, clbk}) {

    // transforme les noms lisibles en humain par des id lisibles en ordinateur
    const id = choice.name.split(" ").join("-").toLowerCase();
	return (
	
			<div className="range-elem flex-ctnr vertical">
				
                <label htmlFor={id}>{choice.name}</label>
                <input type="range"  name={choice.name} min="0" max="5" onChange={(e) => clbk(e.target.value, choice.name)} />
				
			</div>
		
	);
}
