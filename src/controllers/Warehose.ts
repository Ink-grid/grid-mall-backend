/** @format */

import Querys from '@models/Querys';

interface warehose {
	_uid: String;
	name: String;
	direction: String;
}

export default class Warehose {
	private warehose: warehose;
	constructor(warehose?: warehose) {
		this.warehose = warehose;
	}

	private query = new Querys('warehouses');

	async getWarehoses() {
		let response = await this.query.getItems();
		if (response) {
			let warehoses = [];
			response.forEach(warehose => {
				warehoses.push(warehose.data());
			});

			return warehoses;
		}
	}

	async getWarehose(doc: string) {
		let warehose = await this.query.getItem(doc);
		if (warehose.exists) {
			return warehose.data();
		}
	}

	async setWarehose(data?: warehose) {
		try {
			let uid = await this.query.addItem(data || this.warehose);
			await this.query.setItemsUid(uid.id, '_uid');
			return uid.id;
		} catch (error) {
			console.log(error);
			return false;
		}
	}

	async updateWarehose(doc: string, data: {}) {
		try {
			await this.query.updateItem(doc, data);
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	}

	async deleteWarehose(doc: string) {
		try {
			await this.query.deletedItem(doc);
			return false;
		} catch (error) {
			console.log(error);
			return false;
		}
	}
}
