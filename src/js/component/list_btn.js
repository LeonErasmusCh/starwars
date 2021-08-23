import React, { Component, useContext } from "react";

import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ListBtn = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<div className="dropdown show">
				<a
					className="btn btn-warning dropdown-toggle dropleft"
					href="#"
					role="button"
					id="dropdownMenuLink"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites
				</a>

				<div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
					<a className="dropdown-item" href="#">
						Something
					</a>
					<a className="dropdown-item" href="#">
						Something else here
					</a>
					<a className="dropdown-item" href="#">
						{store.favourites.name}
					</a>
					{store.favourites.map((item, key) => {
						return (
							<a className="dropdown-item" href="#" key={key}>
								{item.name}
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);
};
