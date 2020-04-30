/** @format */

import Querys from '@models/Querys';

/** @format */

interface client {
	_uid: String;
	razon_social: String;
	phone: String;
	email: String;
	direction: String;
}

export default class Client {
	private client: client;
	constructor(client?: client) {
		this.client = client;
	}

	private query = new Querys('clients');

	public async getClients() {
		let response = await this.query.getItems();
		if (response) {
			let clients = [];
			response.forEach(client => {
				clients.push(client.data());
			});

			return clients;
		}
	}

	public async getClient(doc: string) {
		let client = await this.query.getItem(doc);
		if (client.exists) {
			return client.data();
		}
	}

	public async setClient(data?: client) {
		let uid = await this.query.addItem(data || this.client);
		await this.query.setItemsUid(uid.id, '_uid');
		return uid.id;
	}

	public async setDirectionCLient(data: any) {
		let uid = await this.query.addItem(data, 'directions');
		await this.query.setItemsUid(uid.id, '_uid', 'directions');
		return uid.id;
	}

	public async getDIrection(uid: string) {
		let direction = await this.query.getItem(uid, 'directions');
		if (direction.exists) {
			return direction.data();
		}

		return false;
	}

	public async getDirectionCLient(uid: string) {
		let response = await this.query.getItemsbyConditional(
			{ name: 'client', operator: '==', iqual: uid },
			15,
			'directions'
		);
		let directions = [];
		if (response) {
			response.forEach(direction => {
				directions.push(direction.data());
			});
		}

		return directions;
	}

	public async addClient(uid: string, data?: client) {
		try {
			await this.query.setItem(uid, data || this.client);
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	}

	public async updateClient(doc: string, data: {}) {
		try {
			await this.query.updateItem(doc, data);
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	}

	public async deletedClient(doc: string) {
		try {
			await this.query.deletedItem(doc);
			return true;
		} catch (error) {
			console.log(error);
			return true;
		}
	}
}
