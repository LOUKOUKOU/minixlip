import Boot from './Boot';
import Preload from './Preload';
import MainMenu from './MainMenu';
var Stage = new Phaser.Game(800, 600);  
Stage.state.add('Boot', Boot);  
Stage.state.add('Preload', Preload);  
Stage.state.add('MainMenu', MainMenu);  
Stage.state.start('Boot');  