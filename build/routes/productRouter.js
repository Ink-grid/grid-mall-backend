"use strict";
/** @format */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var productsController_1 = __importDefault(require("@controllers/productsController"));
router.get('/categories', productsController_1.default.ControllerApiRest.getCategoryALl);
exports.default = router;
