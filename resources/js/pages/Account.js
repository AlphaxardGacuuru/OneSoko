import React from 'react'
import { Link } from 'react-router-dom'

const Account = (props) => {

	// Get user's Ads

	return (
		<div className="row">
			<div className="col-sm-1"></div>
			<div className="col-sm-10">
				<table className="table table-responsive">
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
						.ads.map((ad, key) => (
							<tbody key={key}>
								<tr>
									<td>{ad.title}</td>
									<td>{ad.category}</td>
									<td>{ad.features}</td>
									<td>{ad.description}</td>
									<td>{ad.price}</td>
									<td>
										<Link to={`/ad-edit/${ad.id}`} className="btn btn-primary onesoko-btn">edit</Link>
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