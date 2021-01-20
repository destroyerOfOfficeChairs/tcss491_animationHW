class tree {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});
        this.spritesheet = ASSET_MANAGER.getAsset("../IMG_0029_2.png");
        // this.spritesheet = ASSET_MANAGER.getAsset("../Sprite-0001.png");
        this.animation = new Animator(this.spritesheet, 0, 0, 32, 64, 11, 1/12, 0, false, true, true);
        // this.animation = new Animator(this.spritesheet, 0, 0, 32, 64, 3, .5 , 0, false, true, true);
    };

    update() {

    };

    draw(ctx) {
        // ctx.drawImage(this.spritesheet, 0, 0, 352, 64);
        this.animation.drawFrame(this.game.clockTick, ctx, 64, 64, 1);
    };
};