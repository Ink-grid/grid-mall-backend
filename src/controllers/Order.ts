/** @format */

import Querys from '@models/Querys';
import CaptureError from '../utils';

type OrdersDetail = {
	product: any;
	quantity: number;
};

interface order {
	_uid: string;
	client: string;
	products: [OrdersDetail];
	price_total: number;
	direction: string;
	distrito: string;
	quantity_total: number;
	state: boolean;
}

export default class Order {
	private Orders: order;

	constructor(orders?: order) {
		this.Orders = orders;
	}

	private querys = new Querys('orders');

	//[*] intaciamos la clase  @CaptureError que nos permite capturar errors en nuestra consulta
	private captureError = new CaptureError();

	async getOrders() {
		let response = await this.querys.getItems();
		let orders = [];
		response.forEach(order => {
			orders.push(order.data());
		});
		if (orders.length === 0) return false;
		return orders;
	}

	async getOrdersActive() {
		let response = await this.querys.getItemsbyConditional({
			name: 'state',
			operator: '==',
			iqual: false
		});
		let orderAcives = [];
		if (response) {
			response.forEach(order => {
				orderAcives.push(order.data());
			});
		}
		return orderAcives;
	}

	async getOrdersInactive() {
		let response = await this.querys.getItemsbyConditional({
			name: 'state',
			operator: '==',
			iqual: true
		});
		let orderInactive = [];
		if (response) {
			response.forEach(order => {
				orderInactive.push(order.data());
			});
		}
		return orderInactive;
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

	async getOrderPriceAddress() {
		const response = await this.captureError.captureErrorCollention(
			this.querys.getItems(50, 'distritos_precio')
		);
		let priceAdress = [];
		if (response) {
			response.forEach(elemen => {
				priceAdress.push(elemen.data());
			});
			return priceAdress;
		}
		return false;
	}

	async addOrderPriceAddress(data: {
		location: string;
		price: number;
		description?: string;
	}) {
		const response = await this.captureError.captureErrorAdditem(
			this.querys.addItem(data, 'distritos_precio')
		);
		if (response) {
			return await this.captureError.catureErrorupdateItem(
				this.querys.setItemsUid(response.id, '_uid', 'distritos_precio')
			);
		}

		return false;
	}

	async setOrder(state: boolean, uidOrder: string, order?: order) {
		this.Orders.state = state;
		return await this.captureError.catureErrorsetItem(
			this.querys.setItem(uidOrder, order || this.Orders)
		);
		// if (response) {
		// 	return await this.captureError.catureErrorupdateItem(
		// 		this.querys.setItemsUid(uidOrder, '_uid')
		// 	);
		// }
		// return false;
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
