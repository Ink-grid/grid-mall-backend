"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = require("./database");
var user = {
    /** Returns an array of users */
    getCalzado: function () {
        return database_1.firestore.collection('prueba');
    }
    /** Returns a user by its id */
};
exports.default = user;
