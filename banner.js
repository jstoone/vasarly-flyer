/**
 * Vasarely's Arny (1967-1968)
 *
 * Started:     21 Apr 2019 04:37
 * Estimate:    ~1 week
 */
var Banner = function() {
    this.config = {
        width: 1000,
        height: 1000,
    }

    this.tiles = {
        count: 25,
        size: 1000 / 25,
    }

    this.init = function() {
        this.assets.tiles = new PIXI.Container();

        this.setupTiles();
        this.blendTiles();

        this.stage.addChild(this.assets.tiles);
    }

    this.start = function() {
        //if (parseInt(this.core.renderer.ticker.lastTime / 100) % 10 === 0) {
    }

    this.blendTiles = function() {
        var tilesCount = this.tiles.count ** 2;
        var passes = tilesCount * Flyer.random.get(0.2, true);
        var blendPercent 
        for (var t = 0; t < passes; t++) {
            for (var i = 0; i < tilesCount; i++) {
                var tile = this.assets.tiles.getChildAt(i);
                var copyIndex = (i + this.tiles.count) % tilesCount;
                var target = this.assets.tiles.getChildAt(copyIndex);
                var blendPercent = Flyer.random.get(1, true);

                tile.tint = Flyer.color.blend(blendPercent, tile.tint, target.tint);
            }
        }
    }

    this.setupTiles = function () {
        var currentIndex = 0;
        var currentTile;
        var colors = Flyer.color.randomGoldenRatioHSL(2, .7, 0.5);

        for (var y = 0; y < this.tiles.count; y++) {
            for (var x = 0; x < this.tiles.count; x++) {
                currentTile = new PIXI.Sprite(PIXI.Texture.WHITE);
                currentColor = Flyer.color.blend(
                    (currentIndex / Math.pow(this.tiles.count, 2)),
                    colors[0],
                    colors[1],
                );

                currentTile.tint = currentColor;
                currentTile.width = currentTile.height = this.tiles.size;
                currentTile.position.set(x * this.tiles.size, y * this.tiles.size);

                this.assets.tiles.addChild(currentTile);
                currentIndex++;
            }
        }
    }
}
