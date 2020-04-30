"use strict";
/** @format */
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
var Querys_1 = __importDefault(require("@models/Querys"));
var Product = /** @class */ (function () {
    function Product(product) {
        this.query = new Querys_1.default('products');
        this.product = product;
    }
    Product.prototype.getProducts = function (category, limit, startAfter) {
        return __awaiter(this, void 0, void 0, function () {
            var response_1, produgAfter_1, response, products_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!startAfter) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.query.getItemStartAfter('sku', startAfter, limit)];
                    case 1:
                        response_1 = _a.sent();
                        if (response_1) {
                            produgAfter_1 = [];
                            response_1.forEach(function (product) {
                                produgAfter_1.push(product.data());
                            });
                            return [2 /*return*/, produgAfter_1.filter(function (product) { return product.category === category; })];
                        }
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.query.getItemsbyConditional({ name: 'category', operator: '==', iqual: category }, limit)];
                    case 3:
                        response = _a.sent();
                        if (response) {
                            products_1 = [];
                            response.forEach(function (product) {
                                products_1.push(product.data());
                            });
                            return [2 /*return*/, products_1];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Product.prototype.getProdut = function (doc) {
        return __awaiter(this, void 0, void 0, function () {
            var product;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.query.getItem(doc)];
                    case 1:
                        product = _a.sent();
                        if (product.exists) {
                            return [2 /*return*/, product.data()];
                        }
                        return [2 /*return*/, null];
                }
            });
        });
    };
    Product.prototype.setProduct = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var uid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.query.addItem(data || this.product)];
                    case 1:
                        uid = _a.sent();
                        return [4 /*yield*/, this.query.setItemsUid(uid.id, 'sku')];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, uid.id];
                }
            });
        });
    };
    Product.prototype.updateQuantity = function (doc, quantityProdut) {
        return __awaiter(this, void 0, void 0, function () {
            var quantity, newQuantity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getProdut(doc)];
                    case 1:
                        quantity = (_a.sent()).quantity;
                        if (!quantity)
                            return [2 /*return*/, false];
                        if (quantity <= 0)
                            return [2 /*return*/, false];
                        if (quantityProdut > quantity || quantityProdut < 0)
                            return [2 /*return*/, false];
                        newQuantity = quantity - quantityProdut;
                        this.updateProduct(doc, { quantity: newQuantity });
                        return [2 /*return*/, true];
                }
            });
        });
    };
    Product.prototype.updateProduct = function (doc, data) {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.query.updateItem(doc, data)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return Product;
}());
exports.default = Product;
