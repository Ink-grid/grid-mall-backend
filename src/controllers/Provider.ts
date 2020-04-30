/** @format */

import Querys from '@models/Querys';

interface provider {
	ruc: String;
	razon_social: String;
	direction: String;
	category: String;
	phone: String;
	email: String;
}

export default class Provider {
	private provider: provider;

	constructor(provider?: provider) {
		this.provider = provider;
	}

	private query = new Querys('providers');

	async getProviders() {
		let response = await this.query.getItems();
		let providers = [];
		response.forEach(provider => {
			providers.push(provider.data());
		});
		return providers;
	}

	async getProvider(doc: string) {
		let provider = await this.query.getItem(doc);
		if (provider.exists) {
			return provider.data();
		}
	}

	async setProvider(data?: string) {
		let uid = await this.query.addItem(data || this.provider);
		await this.query.setItemsUid(uid.id, 'ruc');
		return uid.id;
	}

	async deleteProvider(doc: string) {
		try {
			await this.query.deletedItem(doc);
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	}

	async updateProviders(doc: string, data: {}) {
		try {
			await this.query.updateItem(doc, data);
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	}
}
