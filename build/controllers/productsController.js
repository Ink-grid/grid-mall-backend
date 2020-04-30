"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @format */
// controllers for inkmarket backend Api rest and Graphql
var productModels_1 = __importDefault(require("@models/productModels"));
var ControllerApiRest = {
    getCategoryALl: function (rq, res) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data_1, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, productModels_1.default.getCategories('categorys')];
                    case 1:
                        response = _a.sent();
                        if (response) {
                            data_1 = [];
                            response.forEach(function (ele) {
                                data_1.push(ele.data());
                            });
                            res.json({ status: true, message: 'list category', data: data_1 });
                            return [2 /*return*/];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        res.json({ status: false, message: '404 not found' });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
};
var ControllerGraphql = {
    getCategoriesGql: function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data_2, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, productModels_1.default.getCategories('categorys')];
                    case 1:
                        response = _a.sent();
                        if (response) {
                            data_2 = [];
                            response.forEach(function (ele) {
                                data_2.push(ele.data());
                            });
                            return [2 /*return*/, data_2];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    getProductsGql: function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data_3, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, productModels_1.default.getProducts('products')];
                    case 1:
                        response = _a.sent();
                        if (response) {
                            data_3 = [];
                            response.forEach(function (ele) {
                                data_3.push(ele.data());
                            });
                            return [2 /*return*/, data_3];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        console.log(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    setCategoryGql: function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _uid, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, productModels_1.default.setCategory('categorys', data)];
                    case 1:
                        _uid = _a.sent();
                        return [4 /*yield*/, productModels_1.default.setUid('categorys', _uid.id, '_uid')];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, _uid.id];
                    case 3:
                        error_4 = _a.sent();
                        console.log(error_4);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    },
    setOfferGql: function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var uid, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, productModels_1.default.setItem('offers', data)];
                    case 1:
                        uid = _a.sent();
                        return [4 /*yield*/, productModels_1.default.setUid('offers', uid.id, '_uid')];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, uid.id];
                    case 3:
                        error_5 = _a.sent();
                        console.log(error_5);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    },
    getOfertCategoryPaginationGql: function (category, limit, after) {
        return __awaiter(this, void 0, void 0, function () {
            var oferts, next, paginationOferta;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        oferts = [];
                        if (!after) return [3 /*break*/, 2];
                        return [4 /*yield*/, productModels_1.default
                                .getItemOrderbyStartAfter('offers', limit, after, '_uid')
                                .get()];
                    case 1:
                        next = _a.sent();
                        if (next) {
                            next.forEach(function (oferta) {
                                oferts.push(oferta.data());
                            });
                            return [2 /*return*/, oferts.filter(function (ele) { return ele.category === category; })];
                        }
                        _a.label = 2;
                    case 2: return [4 /*yield*/, productModels_1.default
                            .getItemOrderbyLimit('offers', 'category', limit, category)
                            .get()];
                    case 3:
                        paginationOferta = _a.sent();
                        if (paginationOferta) {
                            paginationOferta.forEach(function (ele) {
                                oferts.push(ele.data());
                            });
                            return [2 /*return*/, oferts];
                        }
                        return [2 /*return*/];
                }
            });
        });
    },
    getProductsPaginationGql: function (first, category, after) {
        return __awaiter(this, void 0, void 0, function () {
            var products, next, pagination, products_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!after) return [3 /*break*/, 2];
                        products = [];
                        return [4 /*yield*/, productModels_1.default
                                .getItemOrderbyStartAfter('products', first, after, 'sku')
                                .get()];
                    case 1:
                        next = _a.sent();
                        if (next) {
                            //let products = [];
                            next.forEach(function (product) {
                                products.push(product.data());
                            });
                            return [2 /*return*/, products.filter(function (ele) { return ele.category === category; })];
                        }
                        _a.label = 2;
                    case 2: return [4 /*yield*/, productModels_1.default
                            .getItemOrderbyLimit('products', 'category', first, category)
                            .get()];
                    case 3:
                        pagination = _a.sent();
                        if (pagination) {
                            products_1 = [];
                            pagination.forEach(function (product) {
                                products_1.push(product.data());
                            });
                            return [2 /*return*/, products_1];
                        }
                        return [2 /*return*/];
                }
            });
        });
    },
    getCategoryGql: function (uid) {
        return __awaiter(this, void 0, void 0, function () {
            var category, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, productModels_1.default.getItem('categorys', uid)];
                    case 1:
                        category = _a.sent();
                        if (category.exists) {
                            return [2 /*return*/, category.data()];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_6 = _a.sent();
                        console.log(error_6);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    setProductGql: function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _uid, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, productModels_1.default.setItem('products', data)];
                    case 1:
                        _uid = _a.sent();
                        return [4 /*yield*/, productModels_1.default.setUid('products', _uid.id, 'sku')];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, _uid.id];
                    case 3:
                        error_7 = _a.sent();
                        console.log(error_7);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    },
    setClientGql: function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var uid, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, productModels_1.default.setItem('clients', data)];
                    case 1:
                        uid = _a.sent();
                        return [4 /*yield*/, productModels_1.default.setUid('clients', uid.id, '_uid')];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, uid.id];
                    case 3:
                        error_8 = _a.sent();
                        console.log(error_8);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    },
    getClientsGql: function (_uid) {
        return __awaiter(this, void 0, void 0, function () {
            var client, clients, response, error_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(_uid);
                        if (!_uid) return [3 /*break*/, 2];
                        return [4 /*yield*/, productModels_1.default.getItem('clients', _uid)];
                    case 1:
                        client = _a.sent();
                        if (client.exists) {
                            return [2 /*return*/, [client.data()]];
                        }
                        else {
                            return [2 /*return*/, null];
                        }
                        _a.label = 2;
                    case 2:
                        clients = [];
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, productModels_1.default.getItems('clients')];
                    case 4:
                        response = _a.sent();
                        if (response) {
                            response.forEach(function (client) {
                                clients.push(client.data());
                            });
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        error_9 = _a.sent();
                        console.log(error_9);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/, clients];
                }
            });
        });
    },
    setProviderGql: function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var uid, error_10;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, productModels_1.default.setItem('providers', data)];
                    case 1:
                        uid = _a.sent();
                        return [4 /*yield*/, productModels_1.default.setUid('providers', uid.id, 'ruc')];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, uid.id];
                    case 3:
                        error_10 = _a.sent();
                        console.log(error_10);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    },
    setWarehouseGql: function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var uid, error_11;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, productModels_1.default.setItem('warehouses', data)];
                    case 1:
                        uid = _a.sent();
                        return [4 /*yield*/, productModels_1.default.setUid('warehouses', uid.id, '_uid')];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, uid.id];
                    case 3:
                        error_11 = _a.sent();
                        console.log(error_11);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    },
    getWarehouseGql: function (warehose) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, productModels_1.default.getItem('warehouses', warehose)];
                    case 1:
                        response = _a.sent();
                        if (response.exists) {
                            return [2 /*return*/, response.data()];
                        }
                        return [2 /*return*/];
                }
            });
        });
    },
    getWarehousesGql: function () {
        return __awaiter(this, void 0, void 0, function () {
            var warehouses, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        warehouses = [];
                        return [4 /*yield*/, productModels_1.default.getItems('warehouses')];
                    case 1:
                        response = _a.sent();
                        if (response) {
                            response.forEach(function (warehouse) {
                                warehouses.push(warehouse.data());
                            });
                        }
                        return [2 /*return*/, warehouses];
                }
            });
        });
    },
    getProvidersGql: function () {
        return __awaiter(this, void 0, void 0, function () {
            var providers_1, reposonse, error_12;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        providers_1 = [];
                        return [4 /*yield*/, productModels_1.default.getItems('providers')];
                    case 1:
                        reposonse = _a.sent();
                        if (reposonse) {
                            reposonse.forEach(function (provider) {
                                providers_1.push(provider.data());
                            });
                        }
                        return [2 /*return*/, providers_1];
                    case 2:
                        error_12 = _a.sent();
                        console.log(error_12);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    getProductbyOferta: function (uid) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_13;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, productModels_1.default.getItem('products', uid)];
                    case 1:
                        response = _a.sent();
                        if (response.exists) {
                            return [2 /*return*/, response.data()];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_13 = _a.sent();
                        console.log(error_13);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    getProductsByCategory: function (uid) {
        return __awaiter(this, void 0, void 0, function () {
            var response, products_2, error_14;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, productModels_1.default.getItemsbyUid('products', 'category', uid)];
                    case 1:
                        response = _a.sent();
                        if (response) {
                            products_2 = [];
                            response.forEach(function (product) {
                                products_2.push(product.data());
                            });
                            return [2 /*return*/, products_2];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_14 = _a.sent();
                        console.log(error_14);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
};
exports.default = {
    ControllerApiRest: ControllerApiRest,
    ControllerGraphql: ControllerGraphql // get cateroires graphql
};
