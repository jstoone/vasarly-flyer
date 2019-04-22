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
        count: 26,
        size: 1000 / 25,
    }

    this.init = function() {
        this.assets.tiles = new PIXI.Container();

        this.setupTiles();
        this.blendTiles();

        this.stage.addChild(this.assets.tiles);
    }

    this.start = function() {
        this.flipFlop();
    }

    this.flipFlop = function() {
        anime({
            targets: this.assets.tiles.children,
            direction: 'alternate',
            loop: true,
            angle: [
                {value: 90, easing: 'easeInOutQuad', duration: 250},
                {value: 0, easing: 'easeOutQuad', duration: 1200, delay: 200}
            ],
            delay: anime.stagger(120, {grid: [26, 26], from: 'center'}),
        });
    }

    this.render = function(delta) {
        this.assets.tiles.children.forEach(function(tile) {
            if (tile.y < -tile.height) {
                tile.y += tile.height + this.config.height;
            }

            tile.y -= 0.3 * delta;
        }.bind(this));
    }

    this.blendTiles = function() {
        var blendPercent = null;
        var tilesCount = this.tiles.count ** 2;
        var passes = tilesCount * Flyer.random.get(0.2, true);

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
        var colors = Flyer.color.randomGoldenRatioHSL(3, .7, 0.5);

        this.assets.tiles.x += this.tiles.size / 2;
        this.assets.tiles.y += this.tiles.size / 2;

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
                currentTile.anchor.set(0.5);

                this.assets.tiles.addChild(currentTile);
                currentIndex++;
            }
        }
    }
}
