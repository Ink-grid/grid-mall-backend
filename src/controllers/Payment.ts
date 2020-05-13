/** @format */

import Querys from '@models/Querys';
import { response } from 'express';

interface payment {
	_uid: String;
	id_cliente: String;
	id_modopago: String;
	igv: Number;
	subtotal: Number;
	total: Number
}

export default class Pay{
    private payment: payment;
    constructor(payment?: payment){
        this.payment = payment;
    }

    private query = new Querys('payment');

    public async getPayments(){
        const response = await this.query.getItems(50);
		if (response) {
			const payments = [];
			response.forEach(payment => {
				payments.push(payment.data());
			});

			console.log(payments);
			return payments;
		}
    }

    public async deletedPayments(_uid: string){
        try {
			await this.query.deletedItem(_uid);
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
    }

    public async setPayments(data?: payment){
        try{
            const uid = await this.query.addItem(data || this.payment);
            await this.query.setItemsUid(uid.id, '_uid');
            return uid.id;
        }catch(error){
            console.log(error);
			return false;
        }
    }

}