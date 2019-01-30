import Key from "./Key";

export default class GamePad extends Key {
    Pad1;
    constructor(Game) {
        super(Game);
        this.Game.input.gamepad.start();
        this.Pad1 = this.Game.input.gamepad.pad1;
    }
    leftDown():boolean {
        return this.Pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_LEFT) || this.Pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) < -0.1;
    }
    rightDown():boolean {
        return this.Pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_RIGHT) || this.Pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) > 0.1;
    }
    upDown():boolean {
        return this.Pad1.justPressed(Phaser.Gamepad.XBOX360_A);
    }
}