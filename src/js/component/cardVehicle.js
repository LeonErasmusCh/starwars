import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardVehicle = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			{store.vehicles.map((vehicle, position) => {
				return (
					<div className="col-xs-6 col-sm-4 col-md-3" key={position}>
						<div className="card m-1">
							<div className="card-body">
								<h5 className="card-title">
									{vehicle.uid} {vehicle.name}
								</h5>
								<p className="card-text">
									Some quick example text to build on the card title and make up the bulk of the cards
									content.{" "}
								</p>

								<Link to={"./vehicle/" + vehicle.uid + vehicle.name}>
									<a href="#" className="btn btn-warning text-dark">
										Read more
									</a>
								</Link>
								<a href="#" className="btn btn-outline-warning float-right">
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
