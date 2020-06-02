/** @format */

import Querys from '@models/Querys';
import CaptureError from '../utils';

type CotizacionDetail = {
	name: string;
	quantity: number;
	unidad_medida: string;
};

interface cotizacion {
	client: string;
	products: [CotizacionDetail];
	state: boolean;
	createAt?: any;
}

export default class Cotizacion {
	private cotizacion: cotizacion;

	constructor(cotizacion?: cotizacion) {
		this.cotizacion = cotizacion;
	}

	private querys = new Querys('cotizaciones');

	//[*] intaciamos la clase  @CaptureError que nos permite capturar errors en nuestra consulta
	private captureError = new CaptureError();

	async getCotizacionesActives() {
		const response = await this.captureError.captureErrorCollention(
			this.querys.getItemsbyConditional({
				name: 'state',
				operator: '==',
				iqual: false
			})
		);
		if (response) {
			const cotizacions = [];
			response.forEach(cotiza => {
				cotizacions.push(cotiza.data());
			});

			return cotizacions;
		}
		return false;
	}

	async getCotizacionbyClient(client: string) {
		const response = await this.captureError.captureErrorCollention(
			this.querys.getItemsbyConditional({
				name: 'client',
				operator: '==',
				iqual: client
			})
		);
		if (response) {
			const cotizacions = [];
			response.forEach(cotiza => {
				cotizacions.push(cotiza.data());
			});

			return cotizacions;
		}
		return false;
	}

	async getCotizacion(uid: string) {
		const response = await this.captureError.captureErrorDocument(
			this.querys.getItem(uid)
		);
		if (response) {
			return response.data();
		}

		return false;
	}

	async addCotizacion() {
		this.cotizacion.state = false;
		this.cotizacion.createAt = new Date();
		const result = await this.captureError.captureErrorAdditem(
			this.querys.addItem(this.cotizacion)
		);
		if (result) {
			return await this.captureError.catureErrorupdateItem(
				this.querys.setItemsUid(result.id, '_uid')
			);
		}
		return false;
	}
}
