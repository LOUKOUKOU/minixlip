"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Library_1 = require("./Levels/Library");
var Move_1 = require("./Movement/Move");
var mapItemIndex = { 'x': 'walls', 'o': 'coins', '!': 'enemies' };
var offsetX = 30;
var offsetY = 30;
var tileCount = 20;
var width = 800;
var height = 600;
var playerPos = { x: 30, y: 30 };
exports.default = {
    Walls: Object,
    coins: Object,
    enemies: Object,
    CurrentLevel: "",
    Player: Object,
    Map: Object,
    Layer: Object,
    preload: function () {
        this.load.tilemap("level", null, Library_1.default[this.CurrentLevel], Phaser.Tilemap.TILED_JSON);
        this.physics.setBoundsToWorld();
        this.Map = this.add.tilemap("level");
        this.Map.addTilesetImage("tileset01", "walls");
        this.Map.setCollision(1);
        this.Walls = this.Map.createLayer("layer01");
        this.Player = this.add.sprite(playerPos.x, playerPos.y, 'player');
        this.setPlayer(this.Player);
        Move_1.default.init(this, this.Player);
    },
    create: function () {
        //this.loadMap();
    },
    update: function () {
        this.physics.arcade.collide(this.Player, this.Walls, null, null, null);
        // this.physics.arcade.overlap(this.Player, this.coins, this.takeCoin, null, this);
        // this.physics.arcade.overlap(this.Player, this.enemies, this.restart, null, this);
        // Move the player when an arrow key is pressed
        Move_1.default.movement();
    },
    takeCoin: function (player, coin) {
        coin.kill();
    },
    restart: function () {
        this.state.start('Level');
    },
    // loadMap: function() {
    //     const lvl = Levels[this.CurrentLevel];
    //     //Add gravity to make it fall
    //     this.Player.body.gravity.y = 800;
    //     this.Player.body.friction.y = 1;
    //     //Loop through level items
    //     for (var i = 0; i < lvl.length ; i++) {
    //         for (var j = 0; j < lvl[i].length; j++) {
    //             //Add items
    //             this.loadMapItem(
    //                 lvl[(lvl.length-1) - i][j],
    //                 this.XPos((width/2)-((lvl[i].length*20)/2),j),
    //                 this.YPos(20, i),
    //             );
    //         }
    //     }
    // },
    loadMapItem: function (item, x, y) {
        if (item === 'p') {
            this.Player.x = playerPos.x = x;
            this.Player.y = playerPos.y = y;
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
        player.anchor.set(0.5);
        player.checkWorldBounds = true;
        player.events.onOutOfBounds.add(respawn, this);
        player.body.gravity.y = 800;
        this.physics.enable(player, Phaser.Physics.ARCADE);
        player.enableBody = true;
    }
};
function respawn(player) {
    player.body.velocity.x = 0;
    player.body.velocity.y = 0;
    player.x = playerPos.x;
    player.y = playerPos.y;
}
