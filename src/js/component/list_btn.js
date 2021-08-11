import React, { Component } from "react";

export const ListBtn = () => {
	return (
		<div>
			<div className="dropdown show">
				<a
					className="btn btn-warning dropdown-toggle dropleft"
					href="#"
					role="button"
					id="dropdownMenuLink"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Dropdown link
				</a>

				<div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
					<a className="dropdown-item" href="#">
						Action
					</a>
					<a className="dropdown-item" href="#">
						Another action
					</a>
					<a className="dropdown-item" href="#">
						Something else here
					</a>
				</div>
			</div>
		</div>
	);
};
