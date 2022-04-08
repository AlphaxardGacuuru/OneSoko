import React from 'react'
import { Link, useParams } from 'react-router-dom'

import Img from '../components/Img'
import Btn from '../components/Btn'

const PostShow = (props) => {

	// Get id from URL
	const { id } = useParams();

	var postToShow = []

	if (props.posts.find((ad) => ad.id == id)) {
		var postToShow = props.posts.find((ad) => ad.id == id)
	}

	return (
		<div className="row">
			<div className="col-sm-1"></div>
			<div className="col-sm-10">
				<center>
					<div className="card">
						<Img
							className="card-img-top"
							src={`/storage/${postToShow.pictures}`}
							alt="Card image" />
						<div className="card-body">
							<h4 className="card-title">{postToShow.title}</h4>
							<p className="card-text">{postToShow.category}</p>
							<p className="card-text">{postToShow.features}</p>
							<p className="card-text text-success">KES {postToShow.price}</p>
							<p>{postToShow.description}</p>

							<hr />

							{/* User Area */}
							<div className="d-flex justify-content-center">
								<div className="p-2">
									<Link to="/">
										<Img
											src="storage/img/male_avatar.png"
											imgClass="rounded-circle"
											width="40px"
											height="40px" />
									</Link>
								</div>
								<div className="p-2">Name</div>
								<div className="p-2">
									<Btn
										btnClass="btn btn-success onesoko-btn"
										text="Contact" />
								</div>
							</div>
							{/* User Area End */}
						</div>
					</div>
				</center>
				<br />
				<br />
			</div>
			<div className="col-sm-1"></div>
		</div>
	)
}

export default PostShow