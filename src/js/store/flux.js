const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: []
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
