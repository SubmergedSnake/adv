"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const defectController_1 = require("../controllers/defectController");
const router = (0, express_1.Router)();
router.get('/', defectController_1.getDefects);
exports.default = router;
