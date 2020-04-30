/** @format */

import Querys from '@models/Querys';

/** @format */

interface offert {
	_uid: String;
	name: String;
	percentage: number;
	description: String;
	product: string;
	category: string;
}

export default class Offert {
	private offert: offert;
	constructor(offert?: offert) {
		this.offert = offert;
	}

	private query = new Querys('offers');

	async getOfferts(category: string, limit: number, after?: string) {
		if (after) {
			let response = await this.query.getItemStartAfter('_uid', after, limit);
			if (response) {
				let offerts = [];
				response.forEach(offert => {
					offerts.push(offert.data());
				});
				return offerts.filter(offert => offert.category === category);
			}
		}

		let response = await this.query.getItemsbyConditional(
			{
				name: 'category',
				operator: '==',
				iqual: category
			},
			limit
		);

		if (response) {
			let offerts = [];
			response.forEach(offert => {
				offerts.push(offert.data());
			});

			return offerts;
		}
	}
	async getOffert(doc: string) {
		let offert = await this.query.getItem(doc);
		if (offert.exists) {
			return offert.data();
		}
		return false;
	}
	async setOffert(data?: offert) {
		let uid = await this.query.addItem(data || this.offert);
		await this.query.setItemsUid(uid.id, '_uid');
		return uid.id;
	}
	async updateOffert(doc: string, data: {}) {
		try {
			await this.query.updateItem(doc, data);
			return false;
		} catch (error) {
			console.log(error);
			return false;
		}
	}
	async deletedOffert(doc: string) {
		try {
			await this.query.deletedItem(doc);
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	}
}
