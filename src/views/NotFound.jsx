import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
	return (
		<div>
			<h2>OH NOES</h2>
			<p>Where are you my friend? Are you lost? Do not lose hope! </p>
			<p>
				Go back <Link to="/">home</Link>
			</p>
		</div>
	);
}
