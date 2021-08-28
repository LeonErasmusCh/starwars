import React, { Component, useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ListBtn = () => {
	const { store, actions } = useContext(Context);
	const [dropdownlist, setDropdownlist] = useState([store.favourites]);

	return (
		<>
			<div className="btn-group">
				<button
					type="button"
					className="btn btn-secondary dropdown-toggle"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favourites
				</button>
				<div className="dropdown-menu dropdown-menu-right" style={{ width: "250px" }}>
					{store.favourites.map((favourite, position) => {
						return (
							<button className="dropdown-item" type="button" key={position}>
								{favourite}
								<i
									className="fa fa-times text-danger float-right"
									onClick={() => {
										actions.removeFavourites(name);
									}}
								/>
							</button>
						);
					})}
				</div>
			</div>
		</>
	);
};
