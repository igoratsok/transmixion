FadeManager = function(state) {
	this.state = state;
}

FadeManager.prototype = {
	fadeIn: function() {
		this.state.spr_bg = this.state.game.add.graphics(0, 0);
        this.state.spr_bg.beginFill(this.fadeColor, 1);
        this.state.spr_bg.drawRect(0, 0, this.state.game.width, this.state.game.height);
        this.state.spr_bg.alpha = 1;
        this.state.spr_bg.endFill();

        s = this.state.game.add.tween(this.state.spr_bg);
        s.to({ alpha: 0 }, 2000, null);
        s.start();
	},

	fadeOut: function(completeFunction) {
		this.state.spr_bg = this.state.game.add.graphics(0, 0);
        this.state.spr_bg.beginFill(this.fadeColor, 1);
        this.state.spr_bg.drawRect(0, 0, this.state.game.width, this.state.game.height);
        this.state.spr_bg.alpha = 0;
        this.state.spr_bg.endFill();

        s = this.state.game.add.tween(this.state.spr_bg);
        s.to({ alpha: 1 }, 2000, null);
        s.start();
        s.onComplete.add(completeFunction, this.state);
	}
}