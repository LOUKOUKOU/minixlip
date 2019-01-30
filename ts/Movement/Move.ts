import Keyboard from "../Controls/Keyboard";
import Gamepad from "../Controls/Gamepad";

// export interface IEnemy {
//     name: string,
//     hp: number,
//     strengths: String[]
// }
// let Enemy: IEnemy = {
//     name: 'ted',
//     hp: 250,
//     strengths: ['man', 'tall']
// }
let isLeft = false;
const log_style = { fill: '#000', fontSize: '19px' };
let volLog =  'xv {xvol} : yv {yvol}';
let touchLog =  'touch up [{tup}] : touch down [{tdown}] \ntouch left [{tleft}] : touch right [{tright}]';
let velocityIncline = {0:100, 100:110, 110:120, 120:130, 130:140, 140:150, 150:160, 160:170, 170:180, 180:190, 190:200, 200:200};
export default  {
    Game: Object,
    Player: Object,
    Keyboard: Keyboard,
    Gamepad: Object,
    movement_logs: Object,
    touch_logs: Object,
    canJump: Boolean,
    onWall: Boolean,
    init: function(Game:object, Player) {
        this.Game = Game;
        this.movement_logs = this.Game.add.text(300, 30, volLog, log_style);
        this.touch_logs = this.Game.add.text(300, 60, touchLog, log_style);
        this.Game.stage.add(this.movement_logs);
        this.Game.stage.add(this.movement_logs);
        this.Player = Player;
        this.Keyboard = new Keyboard(this.Game);
        this.Gamepad = new Gamepad(this.Game);
        this.canJump = false;
        this.onWall = false;
    },
    movement: function() {
        //this.HorizontalMovement();
        //this.VerticalMovement();
        //this.log();
    },
    HorizontalMovement: function(){
        if (this.isLeft()) 
        {
            this.MoveH(-1);
        }
        else if (this.isRight()) 
        {   
            this.MoveH(1);
        }
        else 
        {
            this.Player.body.velocity.x = 0;
        }
    },
    MoveH(ABS: number){
        let curVel = this.Player.body.velocity.x;
        let key = curVel<0? curVel*-1: curVel;
        this.Player.body.velocity.x = velocityIncline[key]*ABS;
        this.Player.body.velocity.x = velocityIncline[key]*ABS;
    },
    colide(Player, Wall){
        // hero on the ground
        if(Player.body.blocked.down){

            // hero can jump
            this.canJump = true;

            // hero not on the wall
            this.onWall = false;
        }
        // hero NOT on the ground and touching a wall on the right
        if(Player.body.blocked.right && !Player.body.blocked.down){

            // hero on a wall
            this.onWall = true;
        }

        if(Player.body.blocked.left && !Player.body.blocked.down){
            this.onWall = true;
        }
    },
    VerticalMovement: function(){
        if(this.isUp()){
            if (this.isDownTouch()) 
            {
                this.Player.body.velocity.y = -300;
            }
        } else
        {
            if(this.Player.body.velocity.y < 0)this.Player.body.velocity.y = 0;
        }
    },
    log: function(){
        this.movement_logs.text = volLog;
        this.movement_logs.text = this.movement_logs.text
        .replace('{xvol}', this.Player.body.velocity.x)
        .replace('{yvol}', this.Player.body.velocity.y);
        
        this.touch_logs.text = touchLog;
        this.touch_logs.text = this.touch_logs.text
        .replace('{tup}', this.Player.body.blocked.up)
        .replace('{tdown}', this.Player.body.blocked.down)
        .replace('{tleft}', this.Player.body.blocked.left)
        .replace('{tright}', this.Player.body.blocked.right);
    },
    isLeft: function(){
        return this.Keyboard.leftDown()||this.Gamepad.leftDown();
    },
    isRight: function(){
        return this.Keyboard.rightDown()||this.Gamepad.rightDown();
    },
    isUp: function(){
        return this.Keyboard.upDown()||this.Gamepad.upDown();
    },
    isDown: function(){
        return this.Keyboard.upDown()||this.Gamepad.upDown();
    },
    isDownTouch: function(){
        return this.Player.body.touching.down;
    },
    isLeftTouch: function(){
        return this.Player.body.touching.left;
    },
    isRightTouch: function(){
        return this.Player.body.touching.right;
    }
}