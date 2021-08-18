const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favourites: [],
			people: [],
			planets: [],
			vehicles: [],
			peopleList: []
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
				const url = "https://www.swapi.tech/api/people/";
				for (let i = 0; i <= 10; i++) {
					fetch(url + i)
						.then(response => response.json())
						.then(result => {
							setStore({ list: result.results.properties });
							console.log(store.list);
						})
						.catch(error => console.log("error", error));
				}
			}

			/**
    loadSomeData: () => {
            fetch().then().then(data => setStore({ "foo": data.bar }))
        },
       */
		}
	};
};

export default getState;
