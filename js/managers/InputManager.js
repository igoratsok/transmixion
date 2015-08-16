/**
 * X360:
 * A: 0
 * B: 1
 * X: 2
 * Y: 3
 * Cima: 12
 * Baixo: 13
 * Esquerda: 14
 * Direita: 15
   LB: 4
   RB: 5
   LT: 6
   RT: 7
   SelecT: 8
   Start: 9
   Analógico esquerdo: 10
   Analógico direito: 11
   Axes: rawPad.axes[i]
   http://phaser.io/examples/v2/input/gamepad-debug
 */

InputManager = function(game) {
	this.game = game;	
	this.game.input.keyboard.addKeyCapture([
        Phaser.Keyboard.LEFT,
        Phaser.Keyboard.RIGHT,
        Phaser.Keyboard.UP,
        Phaser.Keyboard.DOWN
    ]);

    game.input.gamepad.start();

    var manager = this;

    game.input.gamepad.addCallbacks(this, {
    	onConnect: function(padIndex) {
			console.log(padIndex);
			console.log(game.input.gamepad);
			//game.input.gamepad.reset();
    		manager.pad2 = game.input.gamepad._gamepads[padIndex];

    	},
    	onDown: function(buttonCode, value, padIndex) {
    		manager.pad2 = game.input.gamepad._gamepads[padIndex];
    	}
    });

	if(game.input.gamepad.padsConnected > 0) {
		if(typeof this.game.input.gamepad.pad1._rawPad != 'undefined' && this.game.input.gamepad.pad1._rawPad != null && this.game.input.gamepad.pad1._rawPad['id'].search('Xbox') != -1) {
				this.pad2 = this.game.input.gamepad.pad1;
		} else if(typeof this.game.input.gamepad.pad2._rawPad != 'undefined' && this.game.input.gamepad.pad2._rawPad != null && this.game.input.gamepad.pad2._rawPad['id'].search('Xbox') != -1) {
				this.pad2 = this.game.input.gamepad.pad2;
		}
	}
	

	
   
}

InputManager.prototype.leftActive= function() {
    var isActive = false;

    isActive = this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT);

    return isActive;
};


InputManager.prototype.rightActive = function() {
    var isActive = false;

    isActive = this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT);

    return isActive;
};


InputManager.prototype.upActive = function() {
    var isActive = false;

    isActive = this.game.input.keyboard.isDown(Phaser.Keyboard.UP);


    if (typeof this.pad2 != 'undefined' && typeof this.pad2._rawPad != 'undefined') {
    	isActive |= (this.pad2._rawPad.buttons[12].value == 1);
    }

    return isActive;
};

InputManager.prototype.downActive = function() {
    var isActive = false;

    isActive = this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN);

    if (typeof this.pad2 != 'undefined' && typeof this.pad2._rawPad != 'undefined') {
    	isActive |= (this.pad2._rawPad.buttons[13].value == 1);
    }

    return isActive;
};

InputManager.prototype.actionActive = function() {
    var isActive = false;

    isActive = this.game.input.keyboard.isDown(Phaser.Keyboard.ENTER);


    return isActive;
};