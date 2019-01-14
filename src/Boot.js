"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    init: function () {
        this.input.maxPointers = 3;
        this.stage.disableVisibilityChange = true;
    },
    create: function () {
        this.state.start('Preload');
    }
};
