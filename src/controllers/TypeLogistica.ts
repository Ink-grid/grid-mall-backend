/** @format */

import Querys from '../models/Querys';
import CaptureError from '../utils';

/** @format */

interface userslogistica {
	_uid: string;
	name: string;
	uri: string;
	description: string;
}

export default class TypeLogistica {
	private usersLogistica: userslogistica;
	constructor(logistica?: userslogistica) {
		this.usersLogistica = logistica;
	}

	//[*] instanciamos los querys para realizar las consultas necesario a la base de datos
	private query = new Querys('userslogistica');

	//[*] intaciamos la clase  @CaptureError que nos permite capturar errors en nuestra consulta
	private captureError = new CaptureError();

	getLogisticauser = async (uid: string) => {
		const response = await this.captureError.captureErrorDocument(
			this.query.getItem(uid)
		);
		if (response) {
			return response.data();
		}
		return false;
	};

	getLosgisticasusers = async () => {
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

	setLogistiausers = async (uid: string) => {
		const response = await this.captureError.catureErrorsetItem(
			this.query.setItem(uid, this.usersLogistica)
		);
		return response;
	};

	addLogisticausers = async () => {
		const response = await this.captureError.captureErrorAdditem(
			this.query.addItem(this.usersLogistica)
		);
		if (response) {
			const respon = await this.captureError.catureErrorsetItem(
				this.query.setItemsUid(response.id, 'uid')
			);
			return respon;
		}
		return false;
	};

	updateLogisticausers = async (uid: string, data?: any) => {
		const response = await this.captureError.catureErrorupdateItem(
			this.query.updateItem(uid, data || this.usersLogistica)
		);
		return response;
	};

	deletedLosgisticauser = async (uid: string) => {
		const respon = await this.captureError.catureErrordeletedItem(
			this.query.deletedItem(uid)
		);
		return respon;
	};
}
