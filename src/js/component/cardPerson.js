import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardPerson = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="card" style={{ width: "18rem" }}>
				<img className="card-img-top" src="..." alt="Card image cap" />
				<div className="card-body">
					{store.people.map((person, position) => {
						return (
							<h5 className="card-title" key={position}>
								{person.name}
							</h5>
						);
					})}

					<p className="card-text">
						Some quick example text to build on the card title and make up the bulk of the cards content.
					</p>
					<Link to="./person">
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
};
