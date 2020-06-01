const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contact: {
				full_name: "Pepe grillo",
				email: "dave@gmail.com",
				agenda_slug: "Pollan_agenda",
				address: "47568 NW 34ST, 33434 FL, USA",
				phone: "7864445566"
			}
		},
		actions: {
			pullAgenda: async () => {
				const response = await fetch("https://assets.breatheco.de/apis/fake/contact/agenda/Pollan_agenda");
				const data = await response.json();
				console.log(data);
			},
			putAgenda: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/899", {
					method: "PUT",
					headers: {
						"content-type": "application/json"
					},
					body: JSON.stringify(getStore().contact)
				})
					.then(response => {
						console.log(response);
					})
					.catch(err => {
						console.log(err);
					});
			}
		}
	};
};

export default getState;
/*address: "Pontevedra Vigo, SPAIN"
agenda_slug: "Pollan_agenda"
created_at: "2020-06-01 11:32:14"
email: "juanfer@gmail.com"
full_name: "Juan Pollan"
id: "899"
phone: "555555555"*/
