import React, { useEffect } from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planet = () => {
	const { store, actions } = useContext(Context);
	const { planetid } = useParams();

	useEffect(() => {
		actions.planetDetail(planetid);
	}, []);

	return (
		<div>
			<h1>Name: {store.planetDetail.name}</h1>
			<h1>Diameter: {store.planetDetail.diameter}</h1>
			<h1>Population: {store.planetDetail.population}</h1>
			<h1>Terrain: {store.planetDetail.terrain}</h1>
		</div>
	);
};
