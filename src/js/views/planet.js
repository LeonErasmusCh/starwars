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
			<div className="container text-white text-center mt-5">
				<h1>
					<span className="text-warning">Name</span> {store.planetDetail.name}
				</h1>
				<h3>
					<span className="text-warning">Diameter</span> {store.planetDetail.diameter}
				</h3>
				<h3>
					<span className="text-warning">Population</span> {store.planetDetail.population}
				</h3>
				<h3>
					<span className="text-warning">Terrain</span> {store.planetDetail.terrain}
				</h3>
			</div>
		</div>
	);
};
