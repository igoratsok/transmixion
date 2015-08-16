
GameManager = function() {

}

GameManager.prototype.initialize = function() {
	this.game = new Phaser.Game(1280, 720, Phaser.CANVAS, 'game');

	this.game.state.add('boot', Boot);
	this.game.state.add('SplashState', SplashState);
	this.game.state.add('TitleScreen', TitleScreen);


	
	this.game.state.start('boot');
}