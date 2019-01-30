"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var key = /** @class */ (function () {
    function key(Game) {
        this.Game = Game;
    }
    key.prototype.leftDown = function () {
        return this.Left.isDown;
    };
    key.prototype.rightDown = function () {
        return this.Right.isDown;
    };
    key.prototype.upDown = function () {
        return this.Jump.isDown;
    };
    return key;
}());
exports.default = key;
