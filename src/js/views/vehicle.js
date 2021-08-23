import React, { useEffect } from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Vehicle = () => {
	const { store, actions } = useContext(Context);
	const { vehicleid } = useParams();

	useEffect(() => {
		actions.vehicleDetail(vehicleid);
	}, []);

	return (
		<div>
			<div className="container text-white text-center mt-5">
				<h1>
					<span className="text-warning">Name</span> {store.vehicleDetail.name}
				</h1>
				<h3>
					<span className="text-warning">Model</span> {store.vehicleDetail.model}
				</h3>
				<h3>
					<span className="text-warning">Vehicle Class </span> {store.vehicleDetail.vehicle_class}
				</h3>
				<h3>
					<span className="text-warning">Crew</span> {store.vehicleDetail.crew}
				</h3>
			</div>
		</div>
	);
};
