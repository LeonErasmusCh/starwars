const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//favourites: [],
			loadPeople: [],
			personDetail: {}
		},
		actions: {
			loadPeople: () => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/people/")
					.then(response => response.json())
					.then(result => {
						setStore({ loadPeople: result.results });
						console.log("people detail as received in store with loadPeople", store.loadPeople);
					})
					.catch(error => console.log("error", error));
			},
			getPersonDetail: uid => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/people/" + uid)
					.then(response => response.json())
					.then(result => {
						setStore({ personDetail: result.result.properties });
						console.log("personDetail", store.personDetail);
					})
					.catch(error => console.log("error", error));
			}
		}
	};
};

export default getState;
