export default  {
    init: function(){
        this.input.maxPointers = 3;
        this.stage.disableVisibilityChange = true;
    },
    create: function(){
        this.state.start('Preload');
    } 
}