import React, { useEffect } from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Person = () => {
	const { store, actions } = useContext(Context);
	const { personid } = useParams();
	useEffect(() => {
		actions.getPersonDetail(personid);
	}, []);
	return (
		<div>
			<h1>Name: {store.personDetail.name}</h1>
			<h1>Skin Color: {store.personDetail.skin_color}</h1>
			<h1>Hair Color: {store.personDetail.hair_color}</h1>
			<h1>Eye Color: {store.personDetail.eye_color}</h1>
		</div>
	);
};
