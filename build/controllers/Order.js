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
var Order = /** @class */ (function () {
    function Order(orders) {
        this.querys = new Querys_1.default('orders');
        this.Orders = orders;
    }
    Order.prototype.getOrders = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, orders;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.querys.getItems()];
                    case 1:
                        response = _a.sent();
                        orders = [];
                        response.forEach(function (order) {
                            orders.push(order.data());
                        });
                        if (orders.length === 0)
                            return [2 /*return*/, false];
                        return [2 /*return*/, orders];
                }
            });
        });
    };
    Order.prototype.getOrderByClient = function (client) {
        return __awaiter(this, void 0, void 0, function () {
            var response, ordersClient;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.querys.getItemsbyConditional({
                            name: 'client',
                            operator: '==',
                            iqual: client
                        })];
                    case 1:
                        response = _a.sent();
                        ordersClient = [];
                        response.forEach(function (order) {
                            ordersClient.push(order.data());
                        });
                        // if (ordersClient.length === 0) return false;
                        // console.log(ordersClient);
                        return [2 /*return*/, ordersClient];
                }
            });
        });
    };
    Order.prototype.getOrder = function (doc) {
        return __awaiter(this, void 0, void 0, function () {
            var order;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.querys.getItem(doc)];
                    case 1:
                        order = _a.sent();
                        if (order.exists) {
                            return [2 /*return*/, order];
                        }
                        return [2 /*return*/, false];
                }
            });
        });
    };
    Order.prototype.setOrder = function (order) {
        return __awaiter(this, void 0, void 0, function () {
            var uid, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.Orders.state = false;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, this.querys.addItem(order || this.Orders)];
                    case 2:
                        uid = _a.sent();
                        return [4 /*yield*/, this.querys.setItemsUid(uid.id, '_uid')];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.querys.setDate(uid.id)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, uid.id];
                    case 5:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [2 /*return*/, false];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Order.prototype.deleteOder = function (doc) {
        return __awaiter(this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.querys.deletedItem(doc)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return Order;
}());
exports.default = Order;
