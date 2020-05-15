/** @format */

import Querys from '@models/Querys';
import CaptureError from '../utils';

/** @format */

interface client {
	_uid: string;
	tipo_client: string;
	razon_social: string;
	ruc: string;
	frecuencia_compra: string;
	categories: any;
	lugares_compra: string;
	phone: string;
	email: string;
	direction: string;
}

export default class Client {
	private client: client;
	constructor(client?: client) {
		this.client = client;
	}

	//[*] instanciamos los querys para realizar las consultas necesario a la base de datos
	private query = new Querys('clients');

	//[*] intaciamos la clase  @CaptureError que nos permite capturar errors en nuestra consulta
	private captureError = new CaptureError();

	public async getClients() {
		const response = await this.captureError.captureErrorCollention(
			this.query.getItems()
		);
		if (response) {
			let clients = [];
			response.forEach(client => {
				clients.push(client.data());
			});
			return clients;
		}
		return false;
	}

	public async getClient(doc: string) {
		const client = await this.captureError.captureErrorDocument(
			this.query.getItem(doc)
		);
		if (client) return client.data();
		return false;
	}

	public addClient = async () => {
		const uid = await this.captureError.captureErrorAdditem(
			this.query.addItem(this.client)
		);
		if (uid) {
			await this.query.setItemsUid(uid.id, '_uid');
			return true;
		}
		return false;
	};

	public setClient = async (uid: string) => {
		await this.captureError.catureErrorsetItem(
			this.query.setItem(uid, this.client)
		);
	};

	public updateClient = async (uid: string, data: any) => {
		return await this.captureError.catureErrorupdateItem(
			this.query.updateItem(uid, data)
		);
	};

	public detedClient = async (uid: string) => {
		return await this.captureError.catureErrordeletedItem(
			this.query.deletedItem(uid)
		);
	};

	// public async setClient(data?: client) {
	// 	let uid = await this.query.addItem(data || this.client);
	// 	await this.query.setItemsUid(uid.id, '_uid');
	// 	return uid.id;
	// }

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

	public async deletedClient(doc: string) {
		try {
			await this.query.deletedItem(doc);
			return true;
		} catch (error) {
			console.log(error);
			return true;
		}
	}

	// funcion ecmascript 5
	// public async getRoute(){logica}
	// arroy fuction or funciones flecha
	// ecamscript 6 nueva funcionalidad
	public getRoute = async (type: string) => {
		try {
			let acces = [];

			const response = await this.query.getItemsbyConditional(
				{ name: 'type', operator: '==', iqual: type },
				50,
				'accesUsers'
			);
			if (response) {
				response.forEach(route => {
					acces.push(route.data());
				});
			}
			return acces;
		} catch (error) {
			console.log(error);
			return false;
		}
	};
}
