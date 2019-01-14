"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Library_1 = require("./Levels/Library");
var mapItemIndex = { 'x': 'walls', 'o': 'coins', '!': 'enemies' };
var offsetX = 30;
var offsetY = 30;
var tileCount = 20;
var width = 800;
var height = 600;
var playerPos = { x: 30, y: 30 };
exports.default = {
    CurrentLevel: "",
    cursor: Object,
    walls: Object,
    coins: Object,
    enemies: Object,
    player: Object,
    preload: function () {
        // Variable to store the arrow key pressed
        this.cursor = this.input.keyboard.createCursorKeys();
        this.physics.setBoundsToWorld();
        // Create the player in the middle of the this
        this.player = this.add.sprite(playerPos.x, playerPos.y, 'player');
        this.setPlayer(this.player);
        this.walls = this.add.group();
        this.coins = this.add.group();
        this.enemies = this.add.group();
        this.enemies = this.add.group();
    },
    create: function () {
        this.loadMap();
    },
    update: function () {
        this.physics.arcade.collide(this.player, this.walls);
        this.physics.arcade.overlap(this.player, this.coins, this.takeCoin, null, this);
        this.physics.arcade.overlap(this.player, this.enemies, this.restart, null, this);
        // Move the player when an arrow key is pressed
        this.movement();
    },
    takeCoin: function (player, coin) {
        coin.kill();
    },
    restart: function () {
        this.state.start('Level');
    },
    movement: function () {
        if (this.cursor.left.isDown)
            this.player.body.velocity.x = -200;
        else if (this.cursor.right.isDown)
            this.player.body.velocity.x = 200;
        else
            this.player.body.velocity.x = 0;
        if (this.cursor.up.isDown && this.player.body.touching.down)
            this.player.body.velocity.y = -250;
    },
    loadMap: function () {
        var lvl = Library_1.default[this.CurrentLevel];
        //Add gravity to make it fall
        this.player.body.gravity.y = 600;
        //Loop through level items
        for (var i = 0; i < lvl.length; i++) {
            for (var j = 0; j < lvl[i].length; j++) {
                //Add items
                this.loadMapItem(lvl[(lvl.length - 1) - i][j], this.XPos((width / 2) - ((lvl[i].length * 20) / 2), j), this.YPos(0, i));
            }
        }
    },
    loadMapItem: function (item, x, y) {
        if (item === 'p') {
            this.player.x = playerPos.x = x;
            this.player.y = playerPos.y = y;
        }
        else if (item !== ' ') {
            var itemSprite = this.add.sprite(x, y, mapItemIndex[item]);
            switch (item) {
                case 'x':
                    itemSprite.body.immovable = true;
                    break;
            }
            this[mapItemIndex[item]].add(itemSprite);
        }
    },
    XPos: function (offset, y) {
        return offset + tileCount * y;
    },
    YPos: function (offset, x) {
        return height - (offset + tileCount * x);
    },
    setPlayer: function (player) {
        player.checkWorldBounds = true;
        player.events.onOutOfBounds.add(respawn, this);
        player.enableBody = true;
    }
};
function respawn(player) {
    player.body.velocity.x = 0;
    player.body.velocity.y = 0;
    player.x = playerPos.x;
    player.y = playerPos.y;
}
