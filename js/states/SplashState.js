SplashState = function(game) {
	this.game = game;
}


SplashState.prototype = {
	preload: function() {
		this.game.load.image('logo', 'img/gamekr_logo.jpg');
		this.game.stage.backgroundColor = 0xFFFFFF;
	},


	create: function() {
		this.momento = 'mostrando-logo';

		$('body').css('background-color', '#FFFFFF');
		this.timer = 0;

		this.logo = this.game.add.sprite(this.game.world.centerX - 470, this.game.world.centerY - 150, 'logo');
		this.logo.alpha = 0;
	},

	update: function() {
		if(this.momento == 'mostrando-logo') {
			this.logo.alpha += 0.01;
			if (this.logo.alpha >= 1) {
				this.game.time.events.add(Phaser.Timer.SECOND * 1, this.apagarLogo, this);
				
			}
		}

		if(this.momento == 'apagando-logo') {
			this.logo.alpha -= 0.01;
			if (this.logo.alpha <= 0) {
				this.logo.alpha = 0;
				fadeManager = new FadeManager(this);
				$("html body").animate({ backgroundColor: "#000000" }, 200);
				fadeManager.fadeOut(this.goToTitleScreen);

				
			}
		}
		

	},

	apagarLogo: function() {
		this.momento = 'apagando-logo';
	},

	goToTitleScreen: function() {	
		this.game.stateTransition.to('TitleScreen');
	}
}