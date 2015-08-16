TitleScreen = function(game) {

};

TitleScreen.prototype = {
	preload: function() {
		this.game.load.image('titlescreen', 'img/titlescreen.jpg');
		this.game.load.image('title0', 'img/title_layer0.jpg');
		this.game.load.image('title1', 'img/title_layer1.png');
		this.game.load.image('title2', 'img/title_layerX.png');
		this.game.load.audio('titlesong', ['audio/transmixion_theme.mp3']);
		this.game.load.image('button-carregar-jogo', 'img/botao_carregar_jogo.png');
		this.game.load.image('button-novo-jogo', 'img/botao_novo_jogo.png');
		this.game.load.image('menu-arrow', 'img/menu_arrow.png');

		this.game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
	},

	create: function() {
		this.opcao = 1;
		this.inputManager = new InputManager(this.game);
		

		$('body').css('background-color', '#000000');


		this.inputManager = new InputManager(this.game);

		//this.titleName = this.add.sprite(-320, 0, 'titlescreen');
		this.title0 = this.add.sprite(0, 0, 'title0');
		this.title1 = this.add.sprite(-320, 0, 'title1');
		this.title2 = this.add.sprite(0, 0, 'title2');
		this.title2.blendMode = PIXI.blendModes.ADD;



		this.buttonCarregarJogo = this.add.sprite(this.game.world.centerX-150, 500, 'button-carregar-jogo');
		this.buttonNovoJogo = this.add.sprite(this.game.world.centerX-120, 580, 'button-novo-jogo');
		this.menuArrow = this.add.sprite(this.buttonNovoJogo.x - 60, this.buttonNovoJogo.y - 10, 'menu-arrow');
		this.buttonCarregarJogo.alpha = 0;
		this.buttonNovoJogo.alpha = 0;
		this.menuArrow.alpha = 0;

		music = this.add.audio('titlesong');

	    music.play();

	    fadeManager = new FadeManager(this);
	    fadeManager.fadeIn();
	},

	update: function() {
		if (this.opcao == 2) {
			this.menuArrow.x = this.buttonNovoJogo.x - 70;
			this.menuArrow.y = this.buttonNovoJogo.y - 10;
		} else if (this.opcao == 1) {
			this.menuArrow.x = this.buttonCarregarJogo.x - 70;
			this.menuArrow.y = this.buttonCarregarJogo.y - 10;
		}

		if(this.inputManager.downActive()) {
			this.opcao = 2;
		}

		if(this.inputManager.upActive()) {
			this.opcao = 1;
		}

		if (this.title1.y >= -200) {
			this.title1.y -= 2;
		} else if  (this.title1.y >= -300) {
			this.title1.y -= 0.5;
		} else {
			if (this.buttonNovoJogo.alpha + 0.1 >= 1) {
				this.buttonNovoJogo.alpha = 1;
				this.buttonCarregarJogo.alpha = 1;
				this.menuArrow.alpha = 1;
			} else {
				this.buttonNovoJogo.alpha += 0.1;
				this.buttonCarregarJogo.alpha += 0.1;
				this.menuArrow.alpha += 0.1;
			}
			

		}

		this.title0.y -= 0.2;
		this.title2.y -= 0.05;

		if (this.inputManager.downActive()) {
			console.log('risos');
		}
	}
}