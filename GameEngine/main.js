var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("../IMG_0029_2.png");
// ASSET_MANAGER.queueDownload("../Sprite-0001.png");

ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	gameEngine.init(ctx);
	// myTree = new tree(gameEngine, 64, 64);
	// gameEngine.addEntity(myTree);
	// gameEngine.addEntity(new tree(gameEngine, 64, 64));
	new SceneManager(gameEngine);

	gameEngine.start();
});
