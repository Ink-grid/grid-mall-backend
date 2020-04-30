"use strict";
/** @format */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
// Users routes
//import user from '@routes/userRoutes';
var productRouter_1 = __importDefault(require("@routes/productRouter"));
router.use(productRouter_1.default);
exports.default = router;
