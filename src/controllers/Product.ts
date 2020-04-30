/** @format */

import Querys from '@models/Querys';

interface product {
	sku: string;
	category: string;
	warehouse: string;
	name: string;
	price: Float32Array;
	quantity: number;
	description: string;
}

class Product {
	private product: product;
	public products: Array<product | any>;

	constructor(product?: product) {
		this.product = product;
	}

	private query = new Querys('products');

	public async getProducts(
		category: string,
		limit?: number,
		startAfter?: string
	) {
		if (startAfter) {
			let response = await this.query.getItemStartAfter(
				'sku',
				startAfter,
				limit
			);
			if (response) {
				let produgAfter = [];
				response.forEach(product => {
					produgAfter.push(product.data());
				});
				return produgAfter.filter(product => product.category === category);
			}
		}
		let response = await this.query.getItemsbyConditional(
			{ name: 'category', operator: '==', iqual: category },
			limit
		);
		if (response) {
			let products = [];
			response.forEach(product => {
				products.push(product.data());
			});
			return products;
		}
	}

	public async getPoductAll() {
		let response = await this.query.getItems();
		let products = [];
		if (response) {
			response.forEach(product => {
				products.push(product.data());
			});
		}

		return products;
	}

	public async getProdut(doc: string) {
		let product = await this.query.getItem(doc);
		if (product.exists) {
			return product.data();
		}
		return null;
	}

	public async setProduct(data?: string) {
		let uid = await this.query.addItem(data || this.product);
		await this.query.setItemsUid(uid.id, 'sku');
		return uid.id;
	}

	public async updateQuantity(doc: string, quantityProdut: number) {
		let { quantity } = await this.getProdut(doc);
		if (!quantity) return false;
		if (quantity <= 0) return false;
		if (quantityProdut > quantity || quantityProdut < 0) return false;
		let newQuantity = quantity - quantityProdut;
		this.updateProduct(doc, { quantity: newQuantity });
		return true;
	}

	public async updateProduct(doc: string, data: any) {
		try {
			await this.query.updateItem(doc, data);
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	}

	public async deteledPProduct(doc: string) {
		try {
			await this.query.deletedItem(doc);
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	}
}

export default Product;
