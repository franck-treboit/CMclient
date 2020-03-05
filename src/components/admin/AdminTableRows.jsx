import React from 'react';
import { Link } from 'react-router-dom';
// custom tools
import FormatDate from './../FormatDate';

export const RowMedia = ({ data }) => {
	const avg = data.avg ? data.avg.toFixed(2) : null;
	return (
		<React.Fragment>

			<td>{data.title}</td>
			<td><FormatDate date= {data.date_of_publication} /></td>
			<td>{data.type}</td>
			<td>{data.author_first_name}</td>
			<td>{data.author_last_name}</td>
			<td>{data.resource}</td>
			<td>{data.preview}</td>
			<td>{data.media_text}</td>
			<td>{data.media_url}</td>
			<td>{data.description}</td>
			<td>{data.duration}</td>
			<td>{data.wine_association}</td>
			<td>
				<Link className="link" to={`/medias/${data._id}`}>
					{data._id}
				</Link>
			</td>
		</React.Fragment>
        
	);
};

export const getTableRowsTemplate = (endpoint, deleteClbk, editClbk) => {
	const rowTemplate = {
		medias: RowMedia
	}[endpoint];

	return rowTemplate;
};
