import Key from "./Key";

export default class Keyboard extends Key {
    Keyboard;
    constructor(Game) {
        super(Game);
        this.Keyboard = this.Game.input.keyboard.createCursorKeys();
        //  Register the keys.
	    this.Left = this.Game.input.keyboard.addKey(this.Keyboard.LEFT);
	    this.Right = this.Game.input.keyboard.addKey(this.Keyboard.RIGHT);
	    this.Jump = this.Game.input.keyboard.addKey(this.Keyboard.SPACEBAR);

        //  Stop the following keys from propagating up to the browser
        this.Game.input.keyboard.addKeyCapture([this.Keyboard.LEFT, this.Keyboard.RIGHT, this.Keyboard.SPACEBAR]);
    }
}