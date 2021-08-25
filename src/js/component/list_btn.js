import React, { Component, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ListBtn = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="btn-group">
				<button
					type="button"
					className="btn btn-secondary dropdown-toggle"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Right-aligned menu
				</button>
				<div className="dropdown-menu dropdown-menu-right">
					{store.favourites.map((favourite, position) => {
						return (
							<button className="dropdown-item" type="button" key={position}>
								{favourite}
							</button>
						);
					})}
				</div>
			</div>
		</>
	);
};
