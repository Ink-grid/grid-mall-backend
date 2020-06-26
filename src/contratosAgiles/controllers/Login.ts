/** @format */

//[*] import dependecias
import { auth } from 'contratosAgiles/models/database';

/**
 * @format
 * @author rony cb - Digital-news
 * @description determinar la logica de acceso a los recursos de firebase como firestore, storage, realt time data base etc.
 */

export default class Login {
	constructor() {}
	function = async () => {
		auth().createCustomToken('');
	};
}
