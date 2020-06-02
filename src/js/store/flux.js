const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contact: []
		},
		actions: {
			pullAgenda: async () => {
				const response = await fetch("https://assets.breatheco.de/apis/fake/contact/agenda/Pollan_agenda");
				const data = await response.json();
				setStore({ contact: data });
			},
			putAgenda: () => {
				const store = getStore();
				fetch("https://assets.breatheco.de/apis/fake/contact/899", {
					method: "PUT",
					headers: {
						"content-type": "application/json"
					},
					body: JSON.stringify(store.contact[store.contact.length - 1])
				});
			},

			addContact: (inputName, inputEmail, inputAddress, inputPhone) => {
				getStore().contact.push({
					full_name: inputName,
					email: inputEmail,
					agenda_slug: "Pollan_agenda",
					address: inputAddress,
					phone: inputPhone
				});
			},
			deleteContact: card => {
				const store = getStore();
				const newContactList = [];
				store.contact.map(objeto => {
					if (objeto !== card) {
						newContactList.push(objeto);
					}
				});
				setStore({ contact: newContactList });
				console.log(store.contact);
			}
		}
	};
};

export default getState;
