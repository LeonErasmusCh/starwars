import React from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Person = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="text-white">
			<h1>Character {params.personid}</h1>
			<p>Datos</p>
			<p>Datos</p>
			<p>Datos</p>
			<p>Datos</p>
		</div>
	);
};
