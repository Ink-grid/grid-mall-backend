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
// query for inkmarket firestore
//import productsController from '@controllers/productsController';
var Product_1 = __importDefault(require("@controllers/Product"));
var Category_1 = __importDefault(require("@controllers/Category"));
var Offert_1 = __importDefault(require("@controllers/Offert"));
var Provider_1 = __importDefault(require("@controllers/Provider"));
var Warehose_1 = __importDefault(require("@controllers/Warehose"));
var Client_1 = __importDefault(require("@controllers/Client"));
var Order_1 = __importDefault(require("@controllers/Order"));
function forEach(array, callback, thisArg) {
    return __awaiter(this, void 0, void 0, function () {
        var promiseArray, _loop_1, i;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    promiseArray = [];
                    _loop_1 = function (i) {
                        if (i in array) {
                            var p = Promise.resolve(array[i]).then(function (currentValue) {
                                return callback.call(thisArg || _this, currentValue, i, array);
                            });
                            promiseArray.push(p);
                        }
                    };
                    for (i = 0; i < array.length; i++) {
                        _loop_1(i);
                    }
                    return [4 /*yield*/, Promise.all(promiseArray)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.resolvers = {
    Query: {
        categories: function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Category_1.default().getCategories()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); },
        products: function (_, _a) {
            var category = _a.category, limit = _a.limit, after = _a.after;
            return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, new Product_1.default().getProducts(category, limit, after)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        },
        ofertas: function (_, _a) {
            var category = _a.category, limit = _a.limit, after = _a.after;
            return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, new Offert_1.default().getOfferts(category, limit, after)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        },
        providers: function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Provider_1.default().getProviders()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); },
        warehouses: function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Warehose_1.default().getWarehoses()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); },
        client: function (_, _a) {
            var _uid = _a._uid;
            return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, new Client_1.default().getClient(_uid)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        },
        order: function (_, _a) {
            var _uid = _a._uid;
            return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, new Order_1.default().getOrderByClient(_uid)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        },
        directions: function (_, _a) {
            var uid = _a.uid;
            return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, new Client_1.default().getDirectionCLient(uid)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        },
        getOrders: function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Order_1.default().getOrders()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); }
    },
    Mutation: {
        createCategories: function (_, _a) {
            var input = _a.input;
            return __awaiter(this, void 0, void 0, function () {
                var uid;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, new Category_1.default(input).setCategory()];
                        case 1:
                            uid = _b.sent();
                            input._uid = uid;
                            return [2 /*return*/, input];
                    }
                });
            });
        },
        createProduct: function (_, _a) {
            var input = _a.input;
            return __awaiter(this, void 0, void 0, function () {
                var uid;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            input.observers = 0;
                            return [4 /*yield*/, new Product_1.default(input).setProduct()];
                        case 1:
                            uid = _b.sent();
                            input.sku = uid;
                            return [2 /*return*/, input];
                    }
                });
            });
        },
        createOfertas: function (_, _a) {
            var input = _a.input;
            return __awaiter(this, void 0, void 0, function () {
                var uid;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, new Offert_1.default(input).setOffert()];
                        case 1:
                            uid = _b.sent();
                            input._uid = uid;
                            return [2 /*return*/, input];
                    }
                });
            });
        },
        createProviders: function (_, _a) {
            var input = _a.input;
            return __awaiter(this, void 0, void 0, function () {
                var uid;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, new Provider_1.default(input).setProvider()];
                        case 1:
                            uid = _b.sent();
                            input.ruc = uid;
                            return [2 /*return*/, input];
                    }
                });
            });
        },
        createWarehouse: function (_, _a) {
            var input = _a.input;
            return __awaiter(this, void 0, void 0, function () {
                var uid;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, new Warehose_1.default(input).setWarehose()];
                        case 1:
                            uid = _b.sent();
                            input._uid = uid;
                            return [2 /*return*/, input];
                    }
                });
            });
        },
        createClient: function (_, _a) {
            var input = _a.input;
            return __awaiter(this, void 0, void 0, function () {
                var status;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, new Client_1.default(input).addClient(input._uid)];
                        case 1:
                            status = _b.sent();
                            if (status) {
                                return [2 /*return*/, input];
                            }
                            else {
                                return [2 /*return*/, {}];
                            }
                            return [2 /*return*/];
                    }
                });
            });
        },
        createDirection: function (_, _a) {
            var input = _a.input;
            return __awaiter(this, void 0, void 0, function () {
                var uid;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, new Client_1.default().setDirectionCLient(input)];
                        case 1:
                            uid = _b.sent();
                            input._uid = uid;
                            return [2 /*return*/, input];
                    }
                });
            });
        },
        createOrder: function (_, _a) {
            var input = _a.input;
            return __awaiter(this, void 0, void 0, function () {
                var uid;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, new Order_1.default(input).setOrder()];
                        case 1:
                            uid = _b.sent();
                            input._uid = uid;
                            return [2 /*return*/, input];
                    }
                });
            });
        },
        updateQuantity: function (_, _a) {
            var sku = _a.sku, quantity = _a.quantity;
            return __awaiter(this, void 0, void 0, function () {
                var status;
                return __generator(this, function (_b) {
                    status = new Product_1.default().updateQuantity(sku, quantity);
                    return [2 /*return*/, status];
                });
            });
        }
    },
    Category: {
        products: function (_a) {
            var _uid = _a._uid;
            return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, new Product_1.default().getProducts(_uid)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        }
    },
    Product: {
        category: function (_a) {
            var category = _a.category;
            return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, new Category_1.default().getCategory(category)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        },
        warehouse: function (_a) {
            var warehouse = _a.warehouse;
            return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            console.log(warehouse);
                            return [4 /*yield*/, new Warehose_1.default().getWarehose(warehouse)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        }
    },
    Order: {
        products: function (_a) {
            var products = _a.products;
            return __awaiter(void 0, void 0, void 0, function () {
                var newproducts;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            newproducts = [];
                            // [*] foreach asyn for get product by sku
                            return [4 /*yield*/, forEach(products, function (element) { return __awaiter(void 0, void 0, void 0, function () {
                                    var product;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, new Product_1.default().getProdut(element.sku)];
                                            case 1:
                                                product = _a.sent();
                                                if (product) {
                                                    newproducts.push({
                                                        product: product,
                                                        quantity: element.quantity,
                                                        price: element.price
                                                    });
                                                }
                                                return [2 /*return*/];
                                        }
                                    });
                                }); })];
                        case 1:
                            // [*] foreach asyn for get product by sku
                            _b.sent();
                            return [2 /*return*/, newproducts];
                    }
                });
            });
        },
        direction: function (_a) {
            var direction = _a.direction;
            return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, new Client_1.default().getDIrection(direction)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        },
        client: function (_a) {
            var client = _a.client;
            return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, new Client_1.default().getClient(client)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        }
    },
    Providers: {
        category: function (_a) {
            var category = _a.category;
            return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, new Category_1.default().getCategory(category)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        }
    },
    Oferta: {
        product: function (_a) {
            var product = _a.product;
            return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, new Product_1.default().getProdut(product)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        }
    }
};
