import React, { Component, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ListBtn = () => {
	const { store, actions } = useContext(Context);
	const [list, setList] = useState([]);

	return (
		<>
			{store.favourites.map((favourite, position) => {
				return (
					<ul key={position}>
						<li>{favourite}</li>
					</ul>
				);
			})}
		</>
	);
};
