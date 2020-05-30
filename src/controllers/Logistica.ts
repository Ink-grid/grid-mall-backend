/** @format */

import Querys from '../models/Querys';
import CaptureError from '../utils';

/** @format */

interface logistica {
	uid: string;
	user: string;
	tipo_client: string;
	razon_social: string;
	ruc: string;
	phone: string;
	email: string;
	direction: string;
}

export default class Logistica {
	private logistica: logistica;
	constructor(logistica?: logistica) {
		this.logistica = logistica;
	}

	//[*] instanciamos los querys para realizar las consultas necesario a la base de datos
	private query = new Querys('logistica');

	//[*] intaciamos la clase  @CaptureError que nos permite capturar errors en nuestra consulta
	private captureError = new CaptureError();

	getLogistica = async (uid: string) => {
		const response = await this.captureError.captureErrorDocument(
			this.query.getItem(uid)
		);
		if (response) {
			return response.data();
		}
		return false;
	};

	getLosgisticas = async () => {
		const response = await this.captureError.captureErrorCollention(
			this.query.getItems(50)
		);
		const logisticas = [];
		if (response) {
			response.forEach(losgistica => {
				logisticas.push(losgistica.data());
			});
			return logisticas;
		}
		return false;
	};

	setLogistia = async (uid: string) => {
		const response = await this.captureError.catureErrorsetItem(
			this.query.setItem(uid, this.logistica)
		);
		if (response) {
			const respon = await this.captureError.catureErrorsetItem(
				this.query.setItemsUid(uid, 'uid')
			);
			return respon;
		}
		return false;
	};

	addLogistica = async () => {
		const response = await this.captureError.captureErrorAdditem(
			this.query.addItem(this.logistica)
		);
		if (response) {
			const respon = await this.captureError.catureErrorsetItem(
				this.query.setItemsUid(response.id, 'uid')
			);
			return respon;
		}
		return false;
	};

	updateLogistica = async (uid: string, data?: any) => {
		const response = await this.captureError.catureErrorupdateItem(
			this.query.updateItem(uid, data || this.logistica)
		);
		return response;
	};

	deletedLosgistica = async (uid: string) => {
		const respon = await this.captureError.catureErrordeletedItem(
			this.query.deletedItem(uid)
		);
		return respon;
	};
}
