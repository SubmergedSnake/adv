"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefects = void 0;
const getDefects = (req, res, next) => {
    try {
        res.json([{ id: 123, description: 'This is a defect' }]);
    }
    catch (error) {
        next(error);
    }
};
exports.getDefects = getDefects;
