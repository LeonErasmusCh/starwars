const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favourites: [],
			people: [],
			planets: [],
			vehicles: [],
			peopleList: [],
			planetList: [],
			vehicleList: []
		},
		actions: {
			// Use getActions to call a function within a fuction

			loadPeople: () => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/people")
					.then(response => response.json())
					.then(result => {
						setStore({ people: result.results });
						console.log(store.people);
					})
					.catch(error => console.log("error", error));
			},
			loadplanets: () => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/planets")
					.then(response => response.json())
					.then(result => {
						setStore({ planets: result.results });
						console.log(store.planets);
					})
					.catch(error => console.log("error", error));
			},
			loadvehicles: () => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/vehicles")
					.then(response => response.json())
					.then(result => {
						setStore({ vehicles: result.results });
						console.log(store.vehicles);
					})
					.catch(error => console.log("error", error));
			},

			peopleList: () => {
				const store = getStore();
				const url = "https://www.swapi.tech/api/people/";
				for (let i = 0; i <= 10; i++) {
					fetch(url + i)
						.then(response => response.json())
						.then(result => {
							setStore({ peopleList: result.result });
							console.log(store.peopleList);
						})
						.catch(error => console.log("error", error));
				}
			},

			planetList: () => {
				const store = getStore();
				const url = "https://www.swapi.tech/api/planets/";
				for (let i = 0; i <= 10; i++) {
					fetch(url + i)
						.then(response => response.json())
						.then(result => {
							setStore({ planetList: result.result });
							console.log(store.planetList);
						})
						.catch(error => console.log("error", error));
				}
			},

			vehicleList: () => {
				const store = getStore();
				const url = "https://www.swapi.tech/api/vehicles/";
				store.vehicles.map(value => {
					fetch(url + value.uid)
						.then(response => response.json())
						.then(result => {
							setStore({ vehicleList: result.results });
							console.log(store.vehicleList);
						})
						.catch(error => console.log("error", error));
				});
			}
		}
	};
};

export default getState;
