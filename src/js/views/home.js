import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Card } from "../component/card";

export const Home = () => (
	<div>
		<div className="container-fluid">
			<h2 className="my-2 text-warning">Characters</h2>
			<div className="d-flex flex-nowrap scrolling-wrapper">
				<div className="card-deck d-flex flex-nowrap">
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</div>

		<div className="container-fluid mt-3">
			<h2 className="my-2 text-warning">Planets</h2>
			<div className="d-flex flex-nowrap scrolling-wrapper">
				<div className="card-deck d-flex flex-nowrap">
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</div>
	</div>
);
