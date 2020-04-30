"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = require("./database");
var Querys = /** @class */ (function () {
    //private Limit: number = 30;
    function Querys(collection) {
        var _this = this;
        this.setDate = function (doc, collection) {
            if (collection === void 0) { collection = _this.collection; }
            return database_1.firestore
                .collection(collection)
                .doc(doc)
                .set({ createAt: new Date() }, { merge: true });
        };
        this.collection = collection;
    }
    Querys.prototype.getItem = function (doc, collection) {
        if (collection === void 0) { collection = this.collection; }
        return database_1.firestore
            .collection(collection)
            .doc(doc)
            .get();
    };
    Querys.prototype.getItems = function (limit, collection) {
        if (collection === void 0) { collection = this.collection; }
        return database_1.firestore
            .collection(collection)
            .limit(limit || 50)
            .get();
    };
    Querys.prototype.getItemsbyConditional = function (condition, limit, collection) {
        if (collection === void 0) { collection = this.collection; }
        return database_1.firestore
            .collection(collection)
            .where(condition.name, condition.operator, condition.iqual)
            .limit(limit || 50)
            .get();
    };
    Querys.prototype.getItemStartAfter = function (orderBy, startAfter, limit, collection) {
        if (collection === void 0) { collection = this.collection; }
        return database_1.firestore
            .collection(collection)
            .orderBy(orderBy)
            .startAfter(startAfter)
            .limit(limit || 50)
            .get();
    };
    Querys.prototype.setItem = function (doc, data, collection) {
        if (collection === void 0) { collection = this.collection; }
        return database_1.firestore
            .collection(collection)
            .doc(doc)
            .set(data, { merge: true });
    };
    Querys.prototype.addItem = function (data, collection) {
        if (collection === void 0) { collection = this.collection; }
        return database_1.firestore.collection(collection).add(data);
    };
    Querys.prototype.setItemsUid = function (uid, key, collection) {
        var _a;
        if (collection === void 0) { collection = this.collection; }
        return database_1.firestore
            .collection(collection)
            .doc(uid)
            .set((_a = {}, _a[key] = uid, _a), { merge: true });
    };
    Querys.prototype.setElmentInArray = function (collection, arrayName, doc, element) {
        var _a;
        if (collection === void 0) { collection = this.collection; }
        return database_1.firestore
            .collection(collection)
            .doc(doc)
            .update((_a = {},
            _a[arrayName] = database_1.FieldValue.arrayUnion(element),
            _a));
    };
    Querys.prototype.updateItem = function (doc, data, collection) {
        if (collection === void 0) { collection = this.collection; }
        return database_1.firestore
            .collection(collection)
            .doc(doc)
            .update(data);
    };
    Querys.prototype.deletedItem = function (doc, collection) {
        if (collection === void 0) { collection = this.collection; }
        return database_1.firestore
            .collection(collection)
            .doc(doc)
            .delete();
    };
    Querys.prototype.deleteFieldItem = function (collection, doc, field) {
        var _a;
        if (collection === void 0) { collection = this.collection; }
        return database_1.firestore
            .collection(collection)
            .doc(doc)
            .update((_a = {},
            _a[field] = database_1.FieldValue.delete(),
            _a));
    };
    Querys.prototype.deleteElementinArray = function (collection, doc, arrayName, elemet) {
        var _a;
        if (collection === void 0) { collection = this.collection; }
        database_1.firestore
            .collection(collection)
            .doc(doc)
            .update((_a = {},
            _a[arrayName] = database_1.FieldValue.arrayRemove(elemet),
            _a));
    };
    return Querys;
}());
exports.default = Querys;
