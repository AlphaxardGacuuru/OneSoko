import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Account = (props) => {

	// Get user's Posts
	let { id } = useParams()

	return (
		<div className="row">
			<div className="col-sm-1"></div>
			<div className="col-sm-10">
				<table className="table table-responsive mt-4">
					<thead>
						<tr>
							<th>Title</th>
							<th>Category</th>
							<th>Features</th>
							<th>Description</th>
							<th>Price</th>
							<th></th>
						</tr>
					</thead>
					{props
						.posts
						.filter((post) => post.user_id == id)
						.map((post, key) => (
							<tbody key={key}>
								<tr>
									<td>{post.title}</td>
									<td>{post.category}</td>
									<td>{post.features}</td>
									<td>{post.description}</td>
									<td>{post.price}</td>
									<td>
										{props.auth.id &&
											<Link
												to={`/post-edit/${post.id}`}
												className="btn btn-primary onesoko-btn">
												edit
											</Link>}
									</td>
								</tr>
							</tbody>
						))}
				</table>
			</div>
			<div className="col-sm-1"></div>
		</div>
	)
}

export default Account