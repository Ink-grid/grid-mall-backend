"use strict";
/** @format */
// for model inkmaerte backend
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = require("./database");
var productModel = {
    /** Returns an array of users */
    getCategories: function (name) {
        return database_1.firestore.collection(name).get();
    },
    getProducts: function (name) {
        return database_1.firestore.collection(name).get();
    },
    setCategory: function (name, data) {
        return database_1.firestore.collection(name).add(data);
    },
    setItem: function (collection, data) {
        return database_1.firestore.collection(collection).add(data);
    },
    setUid: function (collection, uid, key) {
        var _a;
        return database_1.firestore
            .collection(collection)
            .doc(uid)
            .set((_a = {}, _a[key] = uid, _a), { merge: true });
    },
    getItem: function (collection, doc) {
        return database_1.firestore
            .collection(collection)
            .doc(doc)
            .get();
    },
    getItems: function (collection) {
        return database_1.firestore.collection(collection).get();
    },
    getItemOrderbyLimit: function (collection, orderby, limit, _uid) {
        return (database_1.firestore
            .collection(collection)
            // .orderBy(orderby)
            .where("" + orderby, '==', "" + _uid)
            .limit(limit));
    },
    getItemOrderbyStartAfter: function (collection, limit, startAfter, orderBy) {
        return (database_1.firestore
            .collection(collection)
            //.where(`${filter}`, '==', `${uid}`)
            .orderBy(orderBy)
            .startAfter(startAfter)
            .limit(limit));
    },
    getItemsbyUid: function (collection, campo, uid) {
        return database_1.firestore
            .collection(collection)
            .where("" + campo, '==', "" + uid)
            .get();
    }
    /** Returns a user by its id */
};
exports.default = productModel;
