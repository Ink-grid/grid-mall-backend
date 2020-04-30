/** @format */

import Querys from '@models/Querys';

type OrdersDetail = {
	product: any;
	quantity: number;
	price: number;
};

interface order {
	_uid: String;
	products: [OrdersDetail];
	price_total: number;
	direction: String;
	quantity_total: number;
	state?: boolean;
}

export default class Order {
	private Orders: order;

	constructor(orders?: order) {
		this.Orders = orders;
	}

	private querys = new Querys('orders');

	async getOrders() {
		let response = await this.querys.getItems();
		let orders = [];
		response.forEach(order => {
			orders.push(order.data());
		});
		if (orders.length === 0) return false;
		return orders;
	}

	async getOrderByClient(client: string) {
		let response = await this.querys.getItemsbyConditional({
			name: 'client',
			operator: '==',
			iqual: client
		});
		let ordersClient = [];
		response.forEach(order => {
			ordersClient.push(order.data());
		});
		// if (ordersClient.length === 0) return false;
		// console.log(ordersClient);
		return ordersClient;
	}

	async getOrder(doc: string) {
		let order = await this.querys.getItem(doc);
		if (order.exists) {
			return order;
		}
		return false;
	}

	async setOrder(order?: order) {
		this.Orders.state = false;
		try {
			let uid = await this.querys.addItem(order || this.Orders);
			await this.querys.setItemsUid(uid.id, '_uid');
			await this.querys.setDate(uid.id);
			return uid.id;
		} catch (error) {
			console.log(error);
			return false;
		}
	}

	async deleteOder(doc: string) {
		try {
			await this.querys.deletedItem(doc);
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	}
}
