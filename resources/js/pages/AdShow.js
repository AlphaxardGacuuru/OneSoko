import React from 'react'
import { Link, useParams } from 'react-router-dom'

import Img from '../components/Img'
import Btn from '../components/Btn'

const AdShow = (props) => {

	// Get id from URL
	const { id } = useParams();

	var adToShow = []

	if (props.ads.find((ad) => ad.id == id)) {
		var adToShow = props.ads.find((ad) => ad.id == id)
	}

	return (
		<div className="row">
			<div className="col-sm-1"></div>
			<div className="col-sm-10">
				<center>
					<div className="card">
						<Img
							className="card-img-top"
							src={`/storage/${adToShow.pictures}`}
							alt="Card image" />
						<div className="card-body">
							<h4 className="card-title">{adToShow.title}</h4>
							<p className="card-text">{adToShow.category}</p>
							<p className="card-text">{adToShow.features}</p>
							<p className="card-text text-success">KES {adToShow.price}</p>
							<p>{adToShow.description}</p>

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

export default AdShow