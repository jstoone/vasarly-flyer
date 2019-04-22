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
        console.log(this.core);
        this.assets.tiles = new PIXI.Container();

        this.setupTiles();

        this.stage.addChild(this.assets.tiles);
    }

    this.start = function() {
    }

    this.setupTiles = function () {
        var currentIndex = 0;
        var currentTile, currentFilter;

        for (var y = 0; y < this.tiles.count; y++) {
            for (var x = 0; x < this.tiles.count; x++) {
                currentTile = new PIXI.Sprite(PIXI.Texture.WHITE);
                //currentFilter = new PIXI.filters.ColorMatrixFilter();

                //currentTile.filters = [currentFilter];
                //currentFilter.hue(180 * (currentIndex / Math.pow(this.tiles.count, 2)), true)
                //currentFilter.browni(true);

                currentTile.width = currentTile.height = this.tiles.size;
                currentTile.position.set(x * this.tiles.size, y * this.tiles.size);

                this.assets.tiles.addChild(currentTile);
                currentIndex++;
            }
        }
    }
}
