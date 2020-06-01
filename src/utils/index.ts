/** @format */

import {
	DocumentSnapshot,
	QuerySnapshot,
	DocumentData
} from '@google-cloud/firestore';
import Stripe from 'stripe';

//[*] clases para capturar errors en firebase.
export default class CaptureError {
	constructor() {}

	//[*] funcion para capturar el error en @Promise<DocumentSnapshot<DocumentData>
	public captureErrorDocument = async (
		query: Promise<DocumentSnapshot<DocumentData>>
		// getDocument: Promise<D>
	) => {
		try {
			return await query;
		} catch (error) {
			console.log();
			return false;
		}
	};

	//[*] funcion para capturar el error en @Promise<QuerySnapshot<DocumentData>> .
	public captureErrorCollention = async (
		query: Promise<QuerySnapshot<DocumentData>>
		// getDocument: Promise<D>
	) => {
		try {
			return await query;
		} catch (error) {
			console.log();
			return false;
		}
	};

	//[*] funcion para capturar el error en @Promise<FirebaseFirestore.DocumentReference<DocumentData>>
	public captureErrorAdditem = async (
		query: Promise<FirebaseFirestore.DocumentReference<DocumentData>>
	) => {
		try {
			return await query;
		} catch (error) {
			console.log(error);
			return false;
		}
	};

	//[*] funtion para capturar el error en @Promise<FirebaseFirestore.WriteResult>
	public catureErrorsetItem = async (
		query: Promise<FirebaseFirestore.WriteResult>
	) => {
		try {
			await query;
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	};

	//[*] funtion para capturar el error en @Promise<FirebaseFirestore.WriteResult>
	public catureErrorupdateItem = async (
		query: Promise<FirebaseFirestore.WriteResult>
	) => {
		try {
			await query;
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	};

	// [*] function para capturar el error en @Promise<FirebaseFirestore.WriteResult>
	public catureErrordeletedItem = async (
		query: Promise<FirebaseFirestore.WriteResult>
	) => {
		try {
			await query;
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	};

	//[*] funcion para capturar el erro pagos de stripe customer
	public captureErrorStripeCustomer = async (
		query: Promise<Stripe.Customer>
	) => {
		try {
			return await query;
		} catch (error) {
			console.log('stripe customer error', error);
			return false;
		}
	};

	//[*] funcion para capturar el errro en stripe Promise<Stripe.Charge>
	public captureErrorStripeCharge = async (query: Promise<Stripe.Charge>) => {
		try {
			return await query;
		} catch (error) {
			console.log('stripe charge error:', error);
			return false;
		}
	};
}
