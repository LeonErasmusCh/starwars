import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Card } from "../component/card";
import { CardPerson } from "../component/cardPerson";
//import { CardVehicle } from "../component/cardVehicle";
//import { CardPlanet } from "../component/cardPlanet";

export const Home = () => (
	<>
		<h2 className="my-2 text-light text-center">Characters</h2>
		<div className="container-fluid scrolling-wrapper">
			<div className="row d-flex flex-nowrap">
				<CardPerson />
			</div>
		</div>
	</>
);
