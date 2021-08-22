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
			<h1>Name: {store.vehicleDetail.name}</h1>
			<h1>Model: {store.vehicleDetail.model}</h1>
			<h1>vehicle Class: {store.vehicleDetail.vehicle_class}</h1>
			<h1>Crew: {store.vehicleDetail.crew}</h1>
		</div>
	);
};
