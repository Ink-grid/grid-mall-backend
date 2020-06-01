/** @format */

import CaptureError from '../utils';
import env from 'mandatoryenv';
import Stripe from 'stripe';

/** @format */

env.load(['SECRETKEYSTRIPE']);

interface client {
	_uid: string;
	tipo_client: string;
}

export default class Pagos {
	private pagos: client;
	private secretkey = process.env;

	constructor(client?: client) {
		this.pagos = client;
	}

	private stripe = new Stripe(this.secretkey.SECRETKEYSTRIPE, {
		apiVersion: '2020-03-02'
	});

	//[*] intaciamos la clase  @CaptureError que nos permite capturar errors en la transaccion de pago
	private captureError = new CaptureError();

	//[*] creamos el detalle del consumidor o cliente
	private createConsumer = async (email: string, source: string) => {
		const customer = this.stripe.customers.create({
			email: email,
			source: source
		});
		return customer;
	};

	// [*] realizamos la orden de comprar
	private charges = async (price: number, customer: string) => {
		const order = this.stripe.charges.create({
			amount: parseInt(price.toString() + '00'),
			currency: 'PEN',
			customer: customer,
			//source: source,
			description: 'Productos de primera necesidad'
		});
		return order;
	};

	//[*] metodo publico que nos permitira realizar la transacción
	public setPagoStripe = async (
		email: string,
		source: string,
		price: number
	) => {
		const customer = await this.captureError.captureErrorStripeCustomer(
			this.createConsumer(email, source)
		);
		if (customer) {
			const charges = await this.captureError.captureErrorStripeCharge(
				this.charges(price, customer.id)
			);
			if (charges) {
				return charges.id;
			}
			return false;
		}
		return false;
		// }
		// return false;
	};
}
