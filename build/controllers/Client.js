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
var Client = /** @class */ (function () {
    function Client(client) {
        this.query = new Querys_1.default('clients');
        this.client = client;
    }
    Client.prototype.getClients = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, clients_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.query.getItems()];
                    case 1:
                        response = _a.sent();
                        if (response) {
                            clients_1 = [];
                            response.forEach(function (client) {
                                clients_1.push(client.data());
                            });
                            return [2 /*return*/, clients_1];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Client.prototype.getClient = function (doc) {
        return __awaiter(this, void 0, void 0, function () {
            var client;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.query.getItem(doc)];
                    case 1:
                        client = _a.sent();
                        if (client.exists) {
                            return [2 /*return*/, client.data()];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Client.prototype.setClient = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var uid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.query.addItem(data || this.client)];
                    case 1:
                        uid = _a.sent();
                        return [4 /*yield*/, this.query.setItemsUid(uid.id, '_uid')];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, uid.id];
                }
            });
        });
    };
    Client.prototype.setDirectionCLient = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var uid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.query.addItem(data, 'directions')];
                    case 1:
                        uid = _a.sent();
                        return [4 /*yield*/, this.query.setItemsUid(uid.id, '_uid', 'directions')];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, uid.id];
                }
            });
        });
    };
    Client.prototype.getDIrection = function (uid) {
        return __awaiter(this, void 0, void 0, function () {
            var direction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.query.getItem(uid, 'directions')];
                    case 1:
                        direction = _a.sent();
                        if (direction.exists) {
                            return [2 /*return*/, direction.data()];
                        }
                        return [2 /*return*/, false];
                }
            });
        });
    };
    Client.prototype.getDirectionCLient = function (uid) {
        return __awaiter(this, void 0, void 0, function () {
            var response, directions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.query.getItemsbyConditional({ name: 'client', operator: '==', iqual: uid }, 15, 'directions')];
                    case 1:
                        response = _a.sent();
                        directions = [];
                        if (response) {
                            response.forEach(function (direction) {
                                directions.push(direction.data());
                            });
                        }
                        return [2 /*return*/, directions];
                }
            });
        });
    };
    Client.prototype.addClient = function (uid, data) {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.query.setItem(uid, data || this.client)];
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
    Client.prototype.updateClient = function (doc, data) {
        return __awaiter(this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.query.updateItem(doc, data)];
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
    Client.prototype.deletedClient = function (doc) {
        return __awaiter(this, void 0, void 0, function () {
            var error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.query.deletedItem(doc)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 2:
                        error_3 = _a.sent();
                        console.log(error_3);
                        return [2 /*return*/, true];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return Client;
}());
exports.default = Client;
