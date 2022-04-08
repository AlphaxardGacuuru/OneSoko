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
					{props.posts
						.map((post, key) => (
							<span
								key={key}
								className="m-1 card"
								style={{
									borderRadius: "20px",
									display: "inline-block",
									textAlign: "center"
								}}>
								<div className="thumbnail">
									<Link to={`/post/${post.id}`}>
										<Img
											className="card-img-top"
											src={`storage/${post.pictures}`}
											width="160em"
											height="160em"
											alt="Card image" />
									</Link>
								</div>
								<div className="p-1">
									<Link to={`/post/${post.id}`}>
										<h5
											className="ml-2 mb-0"
											style={{
												width: "140px",
												whiteSpace: "nowrap",
												overflow: "hidden",
												textOverflow: "clip"
											}}>{post.title}</h5>
										<p
											className="card-text text-success"
											style={{
												width: "150px",
												whiteSpace: "nowrap",
												overflow: "hidden",
												textOverflow: "clip"
											}}>KES {post.price}</p>
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