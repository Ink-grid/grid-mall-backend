/** @format */

import Querys from '@models/Querys';
import CaptureError from '../utils';

interface typecLient {
	_uid: string;
	name: string;
	description: string;
}

export default class TypeCLient {
	private typeclient: typecLient;

	constructor(access?: typecLient) {
		this.typeclient = access;
	}

	//[*] instanciamos los querys para realizar las consultas necesario a la base de datos
	private query = new Querys('typeclient');

	//[*] intaciamos la clase  @CaptureError que nos permite capturar errors en nuestra consulta
	private captureError = new CaptureError();

	public getTypeclients = async () => {
		const response = await this.captureError.captureErrorCollention(
			this.query.getItems(50)
		);
		if (response) {
			const access = [];
			response.forEach(acces => {
				access.push(acces.data());
			});
			return access;
		}
		return false;
	};

	public getTypeclient = async (uid: string) => {
		const acces = await this.captureError.captureErrorDocument(
			this.query.getItem(uid)
		);
		if (acces) {
			return acces.data();
		}
		return false;
	};

	public AddTypeclient = async () => {
		const uid = await this.captureError.captureErrorAdditem(
			this.query.addItem(this.typeclient)
		);
		if (uid) {
			await this.query.setItemsUid(uid.id, '_uid');
			return true;
		}
		return false;
	};

	public setTypeclient = async (doc: string) => {
		return await this.captureError.catureErrorsetItem(
			this.query.setItem(doc, this.typeclient)
		);
	};

	public updateTypeclient = async (doc: string, data: any) => {
		return await this.captureError.catureErrorupdateItem(
			this.query.updateItem(doc, data)
		);
	};

	public deletedTypeclient = async (uid: string) => {
		return await this.captureError.catureErrordeletedItem(
			this.query.deletedItem(uid)
		);
	};
}
