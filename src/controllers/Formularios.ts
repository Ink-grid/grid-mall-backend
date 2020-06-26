/** @format */

import CaptureError from '../utils/';
import Querys from '@models/Querys';

/**
 * @format
 * @author Rony CB
 * @version 1.0.0
 * @description esta clase nos permitira tener el control de los formularios del proyecto.
 */

export default class Formularios {
	private forms: string;
	constructor(forms?: string) {
		this.forms = forms;
	}

	//[*] instanciamos los querys para realizar las consultas necesario a la base de datos
	private query = new Querys('formularios');

	//[*] intaciamos la clase  @CaptureError que nos permite capturar errors en nuestra consulta
	private captureError = new CaptureError();

	/**
	 * @function getForm
	 * @param doc especifica el documento del formulacio
	 * @param colection especifica la coleccion a consultar del formulario
	 * @returns Promise<boolean | any>
	 */
	public async getForm(doc: string, colection: string) {
		const response = await this.captureError.captureErrorCollention(
			this.query.getColections(doc, colection)
		);
		if (response) {
			let forms = [];
			response.forEach(client => {
				forms.push(client.data());
			});
			return forms;
		}
		return false;
	}

	/**
	 * @function addFrom
	 * @param doc escifica el documento de la coleccion
	 * @param coleccion espifica la coleccion a ingresar los datos
	 * @param data contiene la data necesaria para ingresar a la colección
	 * @returns Promise<boolean>
	 * @description esta funcion nos permite ingresar nuevos formularios en una collecion en
	 * especifica, donde el id se generea automaticamente.
	 */
	public async addFrom(doc: string, coleccion: string, data: any) {
		const uid = await this.captureError.captureErrorAdditem(
			this.query.addItemColection(doc, coleccion, data)
		);
		if (uid) return true;
		return false;
	}

	/**
	 *
	 * @param doc escifica el documento de la coleccion
	 * @param coleccion espifica la coleccion a ingresar los datos
	 * @param uid especifica el id del nuevo documento a ingresar
	 * @param data contiene la data necesaria para ingresar a la colección
	 * @description esta funcion nos permite ingresar nuevos formulario en una coleccion. pero con un
	 * id designado.
	 */
	public async setForm(doc: string, coleccion: string, uid: string, data: any) {
		return await this.captureError.catureErrorsetItem(
			this.query.setItemColection(doc, coleccion, data, uid)
		);
	}
}
