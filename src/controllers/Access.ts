/** @format */

import Querys from '@models/Querys';
import CaptureError from '../utils';

interface access {
	_uid: string;
	icon: string;
	typeIcon: string;
	name: string;
	route: string;
}

type AccessData = {
	client: any;
	access: any[];
};

export default class Category {
	private access: access;

	constructor(access?: access) {
		this.access = access;
	}

	//[*] instanciamos los querys para realizar las consultas necesario a la base de datos
	private query = new Querys('access');

	//[*] intaciamos la clase  @CaptureError que nos permite capturar errors en nuestra consulta
	private captureError = new CaptureError();

	public getAccess = async () => {
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

	public getAccessByconditional = async (
		tokenAccess: string,
		tokenUser: string
	) => {
		const response = await this.captureError.captureErrorCollention(
			this.query.getItemsbyConditional({
				name: 'user',
				operator: '==',
				iqual: tokenAccess
			})
		);

		const client = await this.captureError.captureErrorDocument(
			this.query.getItem(tokenUser, 'clients')
		);
		if (response && client) {
			let access: AccessData = { client: null, access: [] };
			// console.log('acces', access);
			response.forEach(acces => {
				access.access.push(acces.data());
			});
			access.client = client.data();
			// console.log('debug dasd', access);
			return access;
		}
	};

	public getAcces = async (uid: string) => {
		const acces = await this.captureError.captureErrorDocument(
			this.query.getItem(uid)
		);
		if (acces) {
			return acces.data();
		}
		return false;
	};

	public AddAcess = async () => {
		const uid = await this.captureError.captureErrorAdditem(
			this.query.addItem(this.access)
		);
		if (uid) {
			await this.query.setItemsUid(uid.id, '_uid');
			return true;
		}
		return false;
	};

	public setAcces = async (doc: string) => {
		return await this.captureError.catureErrorsetItem(
			this.query.setItem(doc, this.access)
		);
	};

	public updateAccess = async (doc: string, data: any) => {
		return await this.captureError.catureErrorupdateItem(
			this.query.updateItem(doc, data)
		);
	};

	public deletedAccess = async (uid: string) => {
		return await this.captureError.catureErrordeletedItem(
			this.query.deletedItem(uid)
		);
	};
}
