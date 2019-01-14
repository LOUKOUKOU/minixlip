export default  {
    preload: function(){
        this.load.image('player', 'assets/player.png');
        this.load.image('walls', 'assets/wall.png');
        this.load.image('coins', 'assets/coin.png');
        this.load.image('enemies', 'assets/enemy.png');
    },
    create: function(){
        this.state.start('MainMenu');
    } 
}