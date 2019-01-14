"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Level_1 = require("./Level");
var button_style = { fill: '#0f0' };
exports.default = {
    level_button: Object,
    preload: function () {
        this.state.add('Level', Level_1.default);
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.world.enableBody = true;
        this.level_button = this.add.text(30, 30, 'Level_1', button_style);
        this.level_button.inputEnabled = true;
        this.level_button.input.enableDrag();
        this.level_button.events.onInputOver.add(this.over, this);
        this.level_button.events.onInputOut.add(this.out, this);
        this.level_button.events.onInputDown.add(this.down, this);
    },
    create: function () {
        this.stage.backgroundColor = '#3598db';
        this.stage.add(this.level_button);
        Level_1.default.CurrentLevel = 'Level_1';
        this.state.start('Level');
    },
    over: function (item) {
        item.fill = "#ffff44";
    },
    out: function (item) {
        item.fill = "#0f0";
    },
    down: function (item) {
        //this.stage.children.pop();
        Level_1.default.CurrentLevel = item._text;
        this.state.start('Level');
    }
};
