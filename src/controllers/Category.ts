/** @format */

import Querys from '@models/Querys';

interface category {
	_uid: String;
	title: String;
	description: String;
	uri: String;
	products: string;
}

export default class Category {
	private category: category;
	constructor(category?: category) {
		this.category = category;
	}

	private query = new Querys('categorys');

	public async getCategories() {
		let response = await this.query.getItems(50);
		if (response) {
			let categories = [];
			response.forEach(category => {
				categories.push(category.data());
			});

			console.log(categories);
			return categories;
		}
	}

	public async getCategory(doc: string) {
		let response = await this.query.getItem(doc);
		if (response.exists) {
			return response.data();
		}
	}

	public async setCategory(data?: category) {
		try {
			let uid = await this.query.addItem(data || this.category);
			await this.query.setItemsUid(uid.id, '_uid');
			return uid.id;
		} catch (error) {
			console.log(error);
			return false;
		}
	}

	public async updateCategory(doc: string, data: {}) {
		try {
			await this.query.updateItem(doc, data);
		} catch (error) {
			console.log(error);
			return false;
		}
	}

	public async deleteCategory(doc: string) {
		try {
			await this.query.deletedItem(doc);
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	}

	public async;
}
