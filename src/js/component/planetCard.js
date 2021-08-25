import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const PlanetCard = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [favs, setFavs] = useState([]);

	useEffect(() => {
		console.log(store.favourites);
	});

	return (
		<>
			{store.loadPlanets.map((planet, position) => {
				return (
					<div className=" col-xs-12 col-sm-6 col-md-4 col-lg-3" key={position}>
						<div className="card m-1">
							<div className="card-body">
								<h5 className="card-title">{planet.name}</h5>
								<p className="card-text">
									{planet.uid}
									Some quick example text to build on the card title and make up the bulk of the cards
									content.
								</p>
								<Link to={"./planet/" + planet.uid}>
									<a href="#" className="btn btn-warning text-dark">
										Read more
									</a>
								</Link>

								<a href="#" className="btn btn-outline-warning float-right">
									<i className="fas fa-heart text-warning" />
								</a>
								<button
									onClick={() => {
										setFavs([...favs, planet.name]);
										store.favourites.push(planet.name);
									}}>
									Send to fluxStore
								</button>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};
