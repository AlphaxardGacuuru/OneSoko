import React from 'react'
import { Link } from 'react-router-dom'

import Img from "../components/Img"

const Index = (props) => {

	// Random array for dummy loading elements
	const dummyArray = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
	]

	return (
		<div className="row">
			<div className="col-sm-1"></div>
			<div className="col-sm-10">
				<span>
					{props.ads
						.map((item, key) => (
							<span
								key={key}
								className="m-1 card"
								style={{
									borderRadius: "20px",
									display: "inline-block",
									textAlign: "center"
								}}>
								<Img
									className="card-img-top"
									src="/storage/ads/1.jpg"
									width="160em"
									height="90em"
									alt="Card image" />
								<div className="">
									<Link to={`/ad/${item}`}>
										<h5
											className="m-0"
											style={{
												width: "150px",
												whiteSpace: "nowrap",
												overflow: "hidden",
												textOverflow: "clip"
											}}>Title</h5>
										<p
											className="card-text text-success"
											style={{
												width: "150px",
												whiteSpace: "nowrap",
												overflow: "hidden",
												textOverflow: "clip"
											}}>Price</p>
									</Link>
								</div>
							</span>
						))}
				</span>
			</div>
			<div className="col-sm-1"></div>
		</div>
	)
}

export default Index