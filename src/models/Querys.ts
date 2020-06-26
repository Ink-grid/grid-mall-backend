/** @format */

import { firestore, FieldValue } from './database';

interface Conditional {
	name: string;
	operator: any;
	iqual: any;
}

export default class Querys {
	private collection: string;
	//private Limit: number = 30;

	constructor(collection: string) {
		this.collection = collection;
	}

	public getItem(doc: string, collection = this.collection) {
		return firestore
			.collection(collection)
			.doc(doc)
			.get();
	}

	public getItems(limit?: number, collection = this.collection) {
		return firestore
			.collection(collection)
			.limit(limit || 50)
			.get();
	}

	public getItemsbyConditional(
		condition: Conditional,
		limit?: number,
		collection = this.collection
	) {
		return firestore
			.collection(collection)
			.where(condition.name, condition.operator, condition.iqual)
			.limit(limit || 50)
			.get();
	}

	public getItemStartAfter(
		orderBy: string,
		startAfter: string,
		limit?: number,
		collection = this.collection
	) {
		return firestore
			.collection(collection)
			.orderBy(orderBy)
			.startAfter(startAfter)
			.limit(limit || 50)
			.get();
	}

	public setItem(doc: string, data: any, collection = this.collection) {
		return firestore
			.collection(collection)
			.doc(doc)
			.set(data, { merge: true });
	}

	public addItem(data: any, collection = this.collection) {
		return firestore.collection(collection).add(data);
	}

	public setItemsUid(uid: string, key: string, collection = this.collection) {
		return firestore
			.collection(collection)
			.doc(uid)
			.set({ [key]: uid }, { merge: true });
	}

	public setElmentInArray(
		collection = this.collection,
		arrayName: string,
		doc,
		element: string | number
	) {
		return firestore
			.collection(collection)
			.doc(doc)
			.update({
				[arrayName]: FieldValue.arrayUnion(element)
			});
	}

	public setDate = (doc: string, collection = this.collection) => {
		return firestore
			.collection(collection)
			.doc(doc)
			.set({ createAt: new Date() }, { merge: true });
	};

	public updateItem(doc: string, data: any, collection = this.collection) {
		return firestore
			.collection(collection)
			.doc(doc)
			.update(data);
	}

	public deletedItem(doc: string, collection = this.collection) {
		return firestore
			.collection(collection)
			.doc(doc)
			.delete();
	}

	public deleteFieldItem(
		collection = this.collection,
		doc: string,
		field: string
	) {
		return firestore
			.collection(collection)
			.doc(doc)
			.update({
				[field]: FieldValue.delete()
			});
	}

	public deleteElementinArray(
		collection = this.collection,
		doc: string,
		arrayName: string,
		elemet: string | number
	) {
		return firestore
			.collection(collection)
			.doc(doc)
			.update({
				[arrayName]: FieldValue.arrayRemove(elemet)
			});
	}

	public getColections(
		doc: string,
		colectiontwo: string,
		collection = this.collection
	) {
		return firestore
			.collection(collection)
			.doc(doc)
			.collection(colectiontwo)
			.get();
	}

	public addItemColection(
		doc: string,
		colectiontwo: string,
		data: any,
		collection = this.collection
	) {
		return firestore
			.collection(collection)
			.doc(doc)
			.collection(colectiontwo)
			.add(data);
	}

	public setItemColection(
		doc: string,
		colectiontwo: string,
		data: any,
		uid: string,
		collection = this.collection
	) {
		return firestore
			.collection(collection)
			.doc(doc)
			.collection(colectiontwo)
			.doc(uid)
			.set(data, { merge: true });
	}
	// public deletedCollectionItem(collection = this.collection){

	// }
}
