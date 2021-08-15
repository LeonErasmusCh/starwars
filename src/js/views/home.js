import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Card } from "../component/card";
import { CardPerson } from "../component/cardPerson";
import { CardVehicle } from "../component/cardVehicle";
import { CardPlanet } from "../component/cardPlanet";

export const Home = () => (
	<>
		<h2 className="my-2 text-light">Characters</h2>
		<div className="container-fluid scrolling-wrapper">
			<div className="row d-flex flex-nowrap">
				<CardPerson />
			</div>
		</div>

		<h2 className="my-2 text-light">Planets</h2>
		<div className="container-fluid scrolling-wrapper">
			<div className="row d-flex flex-nowrap">
				<CardPlanet />
			</div>
		</div>
		<h2 className="my-2 text-light">Vehicles</h2>
		<div className="container-fluid scrolling-wrapper">
			<div className="row d-flex flex-nowrap">
				<CardVehicle />
			</div>
		</div>
	</>
);
