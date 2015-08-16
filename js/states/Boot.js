Boot = function(game) {
	this.game = game;
}


Boot.prototype = {
	preload: function() {
		this.game.load.image('logo', 'img/gamekr_logo.jpg');
		this.game.stage.backgroundColor = 0xFFFFFF;
	},


	create: function() {
		this.game.stateTransition = this.game.plugins.add(Phaser.Plugin.StateTransition);
		this.game.stateTransition.configure({
		  duration: Phaser.Timer.SECOND * 10,
		  ease: Phaser.Easing.Exponential.InOut,
		  properties: {
		    alpha: 0,
		    scale: {
		      x: 1.4,
		      y: 1.4
		    }
		  }
		});

		this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

  		this.game.scale.maxWidth = window.innerHeight*16/9;
		this.game.scale.maxHeight = window.innerHeight;
		this.game.scale.startFullScreen(true);
		this.game.scale.refresh();
		var scale = this.game.scale;

		$( window ).resize(function() {
		  scale.maxWidth = window.innerHeight*16/9;
		  scale.maxHeight = window.innerHeight;
		  scale.refresh();
		});

	},

	update: function() {
		this.game.state.start('SplashState');
	}
}