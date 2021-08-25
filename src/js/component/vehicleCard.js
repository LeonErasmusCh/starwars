import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const VehicleCard = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<>
			{store.loadVehicles.map((vehicle, position) => {
				return (
					<div className=" col-xs-12 col-sm-6 col-md-4 col-lg-3" key={position}>
						<div className="card m-1">
							<div className="card-body">
								<h5 className="card-title">{vehicle.name}</h5>
								<p className="card-text">
									{vehicle.uid}
									Some quick example text to build on the card title and make up the bulk of the cards
									content.
								</p>
								<Link to={"./vehicle/" + vehicle.uid}>
									<a href="#" className="btn btn-warning text-dark">
										Read more
									</a>
								</Link>

								<a
									href="#"
									className="btn btn-outline-warning float-right"
									onClick={() => {
										store.favourites.push(vehicle.name);
									}}>
									<i className="fas fa-heart text-warning" />
								</a>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};
