import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios';

import Btn from '../components/Btn'

// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import FilePondPluginImageTransform from 'filepond-plugin-image-transform';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// Register the plugins
registerPlugin(
	FilePondPluginImageExifOrientation,
	FilePondPluginImagePreview,
	FilePondPluginFileValidateType,
	FilePondPluginImageCrop,
	FilePondPluginImageTransform,
	FilePondPluginFileValidateSize
);

const PostCreate = (props) => {

	// Declare states
	const [title, setTitle] = useState("")
	const [features, setFeatures] = useState("")
	const [category, setCategory] = useState()
	const [price, setPrice] = useState()
	const [description, setDescription] = useState()
	const [pictures, setPictures] = useState("")

	console.log(pictures)
	console.log(props.message + props.errors)

	// Get csrf token
	const token = document.head.querySelector('meta[name="csrf-token"]');

	// Get history for page location
	const history = useHistory()

	// Declare new FormData object for form data
	const formData = new FormData();

	const onSubmit = (e) => {
		e.preventDefault()

		// Postd form data to FormData object
		formData.append("title", title);
		formData.append("category", category);
		formData.append("features", features);
		formData.append("category", category);
		formData.append("description", description);
		formData.append("price", price);
		formData.append("pictures", pictures);

		// Send data to PostsController
		// Get csrf cookie from Laravel inorder to send a POST request
		axios.get('sanctum/csrf-cookie').then(() => {
			axios.post(`${props.url}/api/posts`, formData)
				.then((res) => {
					props.setMessage(res.data)
					// Update Posts
					axios.get(`${props.url}/api/posts`)
						.then((res) => props.setPosts(res.data))
					setTimeout(() => history.push('/'), 1000)
				}).catch(err => {
					const resErrors = err.response.data.errors
					var resError
					var newError = []
					for (resError in resErrors) {
						newError.push(resErrors[resError])
					}
					// Get other errors
					// newError.push(err.response.data.message)
					console.log(err.response.data)
					props.setErrors(newError)
				})
		})
	}

	return (
		<div className="row">
			<div className="col-1"></div>
			<div className="col-10">
				<div className="contact-form text-center call-to-action-content wow fadeInUp mt-4" data-wow-delay="0.5s">
					<h2>Upload your Post</h2>
					<h5>It's free</h5>
					<br />
					<div className="form-group">
						<form onSubmit={onSubmit}>
							<input
								type="text"
								name="title"
								className="form-control"
								placeholder="Title"
								required={true}
								onChange={(e) => { setTitle(e.target.value) }} />
							<br />
							<br />

							<select
								name='category'
								className='form-control'
								placeholder='Select Category'
								required={true}
								onChange={(e) => { setCategory(e.target.value) }}>
								<option defaultValue value="">Select Category</option>
								<option value="Vehicles">Vehicles</option>
								<option value="Property">Property</option>
								<option value="Mobile Phones & Tablets">Mobile Phones & Tablets</option>
								<option value="Electronics">Electronics</option>
								<option value="Home, Furniture & Appliances">Home, Furniture & Appliances</option>
								<option value="Health & Beauty">Health & Beauty</option>
								<option value="Fashion">Fashion</option>
								<option value="Sports, Arts & Outdoors">Sports, Arts & Outdoors</option>
								<option value="Seeking Work CVs">Seeking Work CVs</option>
								<option value="Services">Services</option>
								<option value="Jobs">Jobs</option>
								<option value="Babies & Kids">Babies & Kids</option>
								<option value="Animals & Pets">Animals & Pets</option>
								<option value="Agriculture & Food<">Agriculture & Food</option>
								<option value="Commercial Equipment & Tools">Commercial Equipment & Tools</option>
								<option value="Repair & Construction">Repair & Construction</option>
							</select>
							<br />
							<br />

							<input
								type="text"
								name="features"
								className="form-control"
								placeholder="Features"
								required={true}
								onChange={(e) => setFeatures(e.target.value)} />
							<br />
							<br />

							<textarea
								type="text"
								name="description"
								className="form-control"
								placeholder="Say something about your Post"
								cols="30"
								rows="10"
								required={true}
								onChange={(e) => setDescription(e.target.value)}>
							</textarea>
							<br />
							<br />

							<input
								type="number"
								name="price"
								className="form-control"
								placeholder="Price"
								required={true}
								onChange={(e) => setPrice(e.target.value)} />
							<br />
							<br />

							<label className="text-light">Upload Pictures</label>

							<FilePond
								name="filepond"
								labelIdle='Drag & Drop your Image or <span class="filepond--label-action"> Browse </span>'
								imageCropAspectRatio="16:9"
								acceptedFileTypes={['image/*']}
								stylePanelAspectRatio="16:9"
								allowRevert={true}
								// allowMultiple={true}
								server={{
									url: `${props.url}/api`,
									process: {
										url: "/posts",
										headers: { 'X-CSRF-TOKEN': token.content },
										onload: res => setPictures(res),
										onerror: (err) => console.log(err.response.data)
									},
									revert: {
										url: `/posts/${pictures.substr(4)}`,
										headers: { 'X-CSRF-TOKEN': token.content },
										onload: res => props.setMessage(res),
									},
								}} />
							<br />
							<br />

							{/* {{-- Collapse --}} */}
							<button type="reset" className="btn btn-danger onesoko-btn mr-2">reset</button>
							<button
								className="btn btn-primary onesoko-btn ml-2"
								type="button"
								data-toggle="collapse"
								data-target="#collapseExample"
								aria-expanded="false"
								aria-controls="collapseExample">
								next
							</button>
							<div className="collapse" id="collapseExample">
								<div className="">
									<br />
									<h3>Before you upload</h3>
									<h6>By uploading you agree that you <b>own</b>.</h6>
									<br />
									<Btn btnClass="btn btn-success onesoko-btn" text="upload advertisement" />
								</div>
							</div>
							{/* {{-- Collapse End --}} */}
						</form>
						<br />
						<br />
						<Link to="/account" className="btn btn-dark onesoko-btn">go to account</Link>
					</div>
				</div>
			</div>
			<div className="col-1"></div>
		</div>
	)
}

export default PostCreate