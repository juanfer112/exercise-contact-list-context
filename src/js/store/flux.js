const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contact: [],
			name: "",
			email: "",
			address: "",
			phone: "",
			holder: ""
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
			},
			createHolder: card => {
				setStore({ holder: card });
			},
			editHolder: card => {
				setStore({ name: card.full_name });
				setStore({ address: card.address });
				setStore({ phone: card.phone });
				setStore({ email: card.email });
			},
			editName: name => {
				setStore({ name: name });
			},
			editEmail: email => {
				setStore({ email: email });
			},
			editAddress: address => {
				setStore({ address: address });
			},
			editPhone: phone => {
				setStore({ phone: phone });
			},
			checkEdit: () => {
				const store = getStore();
				var newArrayContacts = [];
				var edited = {};
				store.contact.map(objeto => {
					if (objeto == store.holder) {
						if (store.name !== store.holder.full_name) {
							edited["full_name"] = store.holder.full_name;
						} else {
							edited["full_name"] = store.name;
						}
						if (store.email !== store.holder.email) {
							edited["email"] = store.email;
						} else {
							edited["email"] = store.email;
						}
						if (store.phone !== store.holder.phone) {
							edited["phone"] = store.phone;
						} else {
							edited["phone"] = store.phone;
						}
						if (store.address !== store.holder.address) {
							edited["address"] = store.address;
						} else {
							edited["address"] = store.address;
						}
						newArrayContacts.push(edited);
					} else {
						newArrayContacts.push(objeto);
					}
				});
				setStore({ contact: edited });
				console.log();
			}
		}
	};
};

export default getState;
