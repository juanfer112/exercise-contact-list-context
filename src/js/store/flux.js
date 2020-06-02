const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contact: [],
			body: {
				full_name: "",
				email: "",
				agenda_slug: "Pollan_agenda",
				address: "",
				phone: ""
			}
		},
		actions: {
			pullAgenda: async () => {
				const response = await fetch("https://assets.breatheco.de/apis/fake/contact/agenda/Pollan_agenda");
				const data = await response.json();
				setStore({ contact: data.length });
			},
			putAgenda: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/899", {
					method: "PUT",
					headers: {
						"content-type": "application/json"
					},
					body: JSON.stringify(getStore().body)
				});
			},

			inputTotal: (inputName, inputEmail, inputAddress, inputPhone) => {
				setStore({
					body: {
						full_name: inputName,
						email: inputEmail,
						agenda_slug: "Pollan_agenda",
						address: inputAddress,
						phone: inputPhone
					}
				});
			}
		}
	};
};

export default getState;
