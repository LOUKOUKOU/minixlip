"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Key_1 = require("./Key");
var GamePad = /** @class */ (function (_super) {
    __extends(GamePad, _super);
    function GamePad(Game) {
        var _this = _super.call(this, Game) || this;
        _this.Game.input.gamepad.start();
        _this.Pad1 = _this.Game.input.gamepad.pad1;
        return _this;
    }
    GamePad.prototype.leftDown = function () {
        return this.Pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_LEFT) || this.Pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) < -0.1;
    };
    GamePad.prototype.rightDown = function () {
        return this.Pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_RIGHT) || this.Pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) > 0.1;
    };
    GamePad.prototype.upDown = function () {
        return this.Pad1.justPressed(Phaser.Gamepad.XBOX360_A);
    };
    return GamePad;
}(Key_1.default));
exports.default = GamePad;
