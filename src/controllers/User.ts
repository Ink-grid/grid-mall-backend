/** @format */

import Querys from '@models/Querys';
import CaptureError from '../utils';

interface usertype {
	_uid: string;
	type: string;
	description?: string;
}

export default class User {
	private user: usertype;

	constructor(user?: usertype) {
		this.user = user;
	}

	//[*] instanciamos los querys para realizar las consultas necesario a la base de datos
	private query = new Querys('users');

	//[*] intaciamos la clase  @CaptureError que nos permite capturar errors en nuestra consulta
	private captureError = new CaptureError();

	public getUsers = async () => {
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

	public getUser = async (uid: string) => {
		const acces = await this.captureError.captureErrorDocument(
			this.query.getItem(uid)
		);
		if (acces) {
			return acces.data();
		}
		return false;
	};

	public AddUser = async () => {
		const uid = await this.captureError.captureErrorAdditem(
			this.query.addItem(this.user)
		);
		if (uid) {
			await this.query.setItemsUid(uid.id, '_uid');
			return true;
		}
		return false;
	};

	public setUser = async (doc: string) => {
		return await this.captureError.catureErrorsetItem(
			this.query.setItem(doc, this.user)
		);
	};

	public updateUser = async (doc: string, data: any) => {
		return await this.captureError.catureErrorupdateItem(
			this.query.updateItem(doc, data)
		);
	};

	public deletedUser = async (doc: string) => {
		return await this.captureError.catureErrordeletedItem(
			this.query.deletedItem(doc)
		);
	};
}
