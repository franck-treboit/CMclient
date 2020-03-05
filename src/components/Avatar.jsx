import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './../styles/avatar.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { useEffect } from 'react';
library.add(far, fas, fab);

let variableMystere = 'cécile';

export default function Avatar(props) {
	const [ avatar, setAvatar ] = useState({});

	const invColor = 'rgb(12,42,150)';
	const avColor = 'rgb(243,213,105)';
	const avatarIcon = 'allergies';

	const divStyle = {
		backgroundColor: avColor
	};

	console.log(props);
	useEffect(() => {
		props.socket.on('choixAffichageTel', function(avatar) {
			console.log('avatar', avatar);
			setAvatar(avatar);
		});
		props.socket.on('privateRegister', function(avatar) {
			setAvatar(avatar);
		});
	}, []);

	return (
		<div style={divStyle} className="avatar">
			<div className="foo">
				******{avatar.nom}***********
				<FontAwesomeIcon icon={avatar.pattern} className="bar" color={avatar.couleur} size="3x" />
			</div>
		</div>
	);
}
