import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './../styles/avatar.css';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(far, fas, fab);

export default function Avatar({ avatar }) {
	const divStyle = {
		backgroundColor: avatar.backgroundColor
	};
	console.log('tout fonctionne');

	return (
		<div className="avatar-ctnr">
			<div style={divStyle} className="avatar">
				<FontAwesomeIcon icon={avatar.pattern} className="bar" color={avatar.awesomeColor} size="3x" />
			</div>
			<div className="foo">
				<p>You are now known as {avatar.nom}</p>
			</div>
		</div>
	);
}
