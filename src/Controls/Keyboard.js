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
var Keyboard = /** @class */ (function (_super) {
    __extends(Keyboard, _super);
    function Keyboard(Game) {
        var _this = _super.call(this, Game) || this;
        _this.Keyboard = _this.Game.input.keyboard.createCursorKeys();
        //  Register the keys.
        _this.Left = _this.Game.input.keyboard.addKey(_this.Keyboard.LEFT);
        _this.Right = _this.Game.input.keyboard.addKey(_this.Keyboard.RIGHT);
        _this.Jump = _this.Game.input.keyboard.addKey(_this.Keyboard.SPACEBAR);
        //  Stop the following keys from propagating up to the browser
        _this.Game.input.keyboard.addKeyCapture([_this.Keyboard.LEFT, _this.Keyboard.RIGHT, _this.Keyboard.SPACEBAR]);
        return _this;
    }
    return Keyboard;
}(Key_1.default));
exports.default = Keyboard;
