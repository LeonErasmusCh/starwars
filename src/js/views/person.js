import React from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Person = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<>
			<h1>{params.personid}</h1>
			{store.peopleList.map((value, position) => {
				return (
					<div className="text-white" key={postion}>
						<p>{value.uid}</p>
						<p>Datos</p>
						<p>Datos</p>
					</div>
				);
			})}
		</>
	);
};
