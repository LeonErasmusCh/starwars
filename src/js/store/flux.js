const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//favourites: [],
			loadPeople: []
		},
		actions: {
			loadPeople: () => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/people/")
					.then(response => response.json())
					.then(result => {
						setStore({ loadPeople: result.results });
						console.log("people detail as received in store with loadPeople", store.people);
					})
					.catch(error => console.log("error", error));
			}
		}
	};
};

export default getState;
