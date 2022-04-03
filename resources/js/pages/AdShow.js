import React from 'react'

import Img from '../components/Img'

const AdShow = (props) => {
	return (
		<div className="row">
			<div className="col-sm-12">
				<center>
					<div className="card">
						<Img
							className="card-img-top"
							src="/storage/ads/4.jpg"
							alt="Card image" />
						<div className="card-body">
							<h4 className="card-title">John Doe</h4>
							<p className="card-text">Some example text.</p>
						</div>
					</div>
					<br />

					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit asperiores deleniti alias nihil
						libero
						error voluptatum, hic suscipit recusandae animi dolore nemo placeat tenetur id laboriosam veniam
						dignissimos obcaecati vel!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa a quaerat
						fugiat dolorem voluptatum ducimus tempore similique possimus, quas optio porro ut magnam totam
						accusamus ab obcaecati dignissimos vero! Iste?Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Ipsam doloremque ipsa, perferendis saepe ducimus cum non? Sapiente, temporibus, eaque, earum
						quisquam non laudantium asperiores saepe autem sed iusto delectus voluptates.
					</p>
				</center>
			</div>
		</div>
	)
}

export default AdShow