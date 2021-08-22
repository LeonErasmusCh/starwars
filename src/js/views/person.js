import React, { useEffect } from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Person = () => {
	const { store, actions } = useContext(Context);
	const { personid } = useParams();
	useEffect(() => {
		actions.loadPeople(personid);
	}, []);
	return (
		<div>
			<h1>{store.loadPeople.name}</h1>
		</div>
	);
};
