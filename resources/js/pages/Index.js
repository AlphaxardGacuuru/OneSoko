import React from 'react'

import Img from "../components/Img"

const Index = () => {
	return (
		<div className="row">
			<div className="col-sm-1"></div>
			<div className="col-sm-10">
				<span>
					<span
						className="m-1 pb-2 card"
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
						<div className="card-body">
							<h4
								className="card-title"
								style={{
									width: "150px",
									whiteSpace: "nowrap",
									overflow: "hidden",
									textOverflow: "clip"
								}}>Title</h4>
							<p
								className="card-text"
								style={{
									width: "150px",
									whiteSpace: "nowrap",
									overflow: "hidden",
									textOverflow: "clip"
								}}>Price</p>
						</div>
					</span>
				</span>
			</div>
			<div className="col-sm-1"></div>
		</div>
	)
}

export default Index