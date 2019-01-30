export default class key {
    Game;
    Left;
    Right;
    Jump;
    constructor(Game) {
        this.Game = Game;
    }
    leftDown():boolean {        
        return this.Left.isDown;
    }
    rightDown():boolean {
        return this.Right.isDown;
    }
    upDown():boolean {
        return this.Jump.isDown;
    }
}