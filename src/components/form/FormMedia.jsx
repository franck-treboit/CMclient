import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
// custom tools
// import CustomInputFile from "./../icon/IconAvatarAdmin";
import apiHandler from '../../api/apiHandler';

// styles
 import "./../../styles/form.css";
// import "./../../styles/icon-avatar.css";

export default withRouter(function FormMedia({ mode = 'create', _id, history, match }) {
	const [
		{
			title,
			date_of_publication,
			type,
			author_first_name,
			author_last_name,
			resource,
			preview,
			media_text,
			media_url,
			description,
			duration,
			wine_association
		},
		setState
	] = useState({
		title: '',
		date_of_publication: '',
		type: '',
		author: '',
		resource: '',
		preview: '',
		media_url: '',
		media_text: '',
		description: '',
		duration: '',
		wine_association: ''
  });
  

  useEffect(
		() => {
			const initFormData = async () => {
				const apiRes = await apiHandler.get(`/medias/${_id}`);
				delete apiRes.data._id;
				setState({ ...apiRes.data });
			};

			if (mode === 'edit') initFormData();
		},
		[ mode, _id ]
	);

	const handleChange = (e) => {
    e.persist();
		setState((prevValues) => ({
			...prevValues,
			[e.target.id]: e.target.value
		}));
	};

	const handleSubmit = async (e) => {

		e.preventDefault();
		const newMedia = {
			title,
			date_of_publication,
			type,
			author_first_name,
			author_last_name,
			resource,
			preview,
			media_text,
			media_url,
			description,
			duration,
			wine_association
		};
		try {
			if (mode === 'create') await apiHandler.post('/media/medias', newMedia);
			else await apiHandler.patch(`/medias/${match.params.id}`, newMedia);
			// here, we access history as a destructured props (see the parameters of this component)
			// history is accessible because we wrapped the component in the withROuter fiunction
			// history.push('/admin/medias');
		} catch (apiErr) {
			console.error(apiErr);
		}
	};

	// handleDefaultMedia = (index, id, name) =>{
	//   if (id == this.state.mediaId) {
	//     return <option value={id} key={index} selected>{name}</option>
	//   }
	//   else {
	//     return <option value={id} key={index}>{name} </option>
	//   }
	// };

	// handleImageText = () => {
	//   if (this.props.match.params.id) {
	//     return "Change Image"
	//   }
	//   else {
	//     return "Add image"
	//   }
	// };

	return (
    
		<form className="form" onSubmit={handleSubmit} onChange={handleChange}>
			<label className = "label" htmlFor="title">Title</label>
			
			<input className="input" id='title' type="text" placeholder="Media name" defaultValue={title} />
			
			<label className = "label" htmlFor="date_of_publication">Date of publication</label>
			<input className="input" name="date_of_publication" id="date_of_publication" type="date" defaultValue={date_of_publication} />
			<select name="type" className="label" className="input" id="type">
				<option value="" disabled>
					Select a type
				</option>
				<option value="video">video</option>
				<option value="text">text</option>
				<option value="image">image</option>
				<option value="audio">audio</option>
				<option value="music">music</option>
				<option value="text">text</option>
				<option value="pdf">pdf</option>
			</select>
			<label className = "label" htmlFor="author_first_name">Author first name</label>
			<input className="input" id="author_first_name" type="text" placeholder="author first name" defaultValue={author_first_name} />
			<label className = "label" htmlFor="author_last_name">Author last name</label>
			<input className="input" id="author_last_name" type="text" placeholder="author last name" defaultValue={author_last_name} />
			
			<label className = "label" htmlFor="resource">resource</label>
			<input className="input" id="resource" name="resource" type="text" defaultValue={resource} />
			<label className = "label" htmlFor="preview">Preview</label>
			<input className="input" id="preview" type="text" defaultValue={preview}/>
			<label className = "label" htmlFor="media_text">text of the media</label>
			<textarea className="input" name="media_text" id="media_text" cols="30" rows="10" defaultValue={media_text} />
			<label className = "label" htmlFor="media_url">url of the media</label>
			<input className="input" name="media_url" id = 'media_url' type="text" defaultValue={media_url} />
			<label htmlFor="description">description</label>
			<textarea className="input" name="description" id="description" cols="30" rows="10" defaultValue={description} />
			<label className = "label">duration</label>
			<input className="input" id="duration" name="duration" type="number" defaultValue={duration} />
			<label>Wine pairing</label>
			<input className="input" className = "label" id="wine_association" type="text" defaultValue={wine_association} />
			<button type="submit">OK</button>
		</form>
	);
});
