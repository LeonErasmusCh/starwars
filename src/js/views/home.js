import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Card } from "../component/card";
import { CardPerson } from "../component/cardPerson";
import { CardVehicle } from "../component/cardVehicle";
import { CardPlanet } from "../component/cardPlanet";

export const Home = props => (
	<div>
		<div className="container-fluid">
			<h2 className="my-2 text-light">Characters</h2>
			<div className="d-flex flex-nowrap scrolling-wrapper">
				<div className="card-deck d-flex flex-nowrap">
					<CardPerson />
					<CardPerson />
					<CardPerson />
					<CardPerson />
					<CardPerson />
					<CardPerson />
					<CardPerson />
				</div>
			</div>
		</div>

		<div className="container-fluid mt-3">
			<h2 className="my-2 text-light">Planets</h2>
			<div className="d-flex flex-nowrap scrolling-wrapper">
				<div className="card-deck d-flex flex-nowrap">
					<CardPlanet />
					<CardPlanet />
					<CardPlanet />
					<CardPlanet />
					<CardPlanet />
					<CardPlanet />
					<CardPlanet />
					<CardPlanet />
					<CardPlanet />
					<CardPlanet />
				</div>
			</div>
		</div>
		<div className="container-fluid mt-3">
			<h2 className="my-2 text-light">Vehicles</h2>
			<div className="d-flex flex-nowrap scrolling-wrapper">
				<div className="card-deck d-flex flex-nowrap">
					<CardVehicle />
					<CardVehicle />
					<CardVehicle />
					<CardVehicle />
					<CardVehicle />
					<CardVehicle />
					<CardVehicle />
					<CardVehicle />
					<CardVehicle />
					<CardVehicle />
					<CardVehicle />
					<CardVehicle />
				</div>
			</div>
		</div>
	</div>
);
