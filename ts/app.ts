class SimpleGame {
    game: Phaser.Game;
    truck: Phaser.Sprite;

    constructor() {
        this.game = new Phaser.Game(640, 480, Phaser.AUTO, 'content', {
            create: this.create, preload: this.preload, update: this.update
        });
    }

    preload() {
        var loader = this.game.load.image("truck", "images/truck.gif");
    }

    create() {
        var image = this.game.cache.getImage("truck");
        this.truck = this.game.add.sprite(
            this.game.width / 2 - image.width / 2,
            this.game.height / 2 - image.height / 2,
            "truck");
        //this.truck.scale.setTo(3, 3);
        this.truck.pivot.x = this.truck.width / 2;
        this.truck.pivot.y = this.truck.height / 2;
    }

    update() {

        // You can poll mouse status
        if (this.game.input.activePointer.isDown) {
            // This will be set to true if any mouse button is pressed or a finger is touched
            this.truck.position.set(this.game.input.mousePointer.x,
                this.game.input.mousePointer.y);

            // You can test if the user is using a mouse
            if (this.game.input.activePointer.isMouse) {
                // In the case of a mouse, you can check mouse button status
                if (this.game.input.activePointer.button == Phaser.Mouse.RIGHT_BUTTON) {

                    // We just want to clear it, so this doesnt fire over and over, dont do this in production
                    this.game.input.activePointer.reset();
                    alert("Right button pressed");
                }
            }
            else {
                // On the other hand, if you are dealing with touch, you can have multiple touches/pointers
                // By default there are two pointers defined, so you can have up to two touches.
                // You can add more pointers using input.addPointer();
                if (this.game.input.pointer1.isDown && this.game.input.pointer2.isDown)
                    alert("Multitouch!");
            }
        }
    }
}

window.onload = () => {
    var game = new SimpleGame();
};