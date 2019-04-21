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

    this.vars = {
        count: 25,
        size: 1000 / 25,
    }

    this.init = function() {
        this.assets.tiles = new PIXI.Container();

        this.setupTiles();

        this.stage.addChild(this.assets.tiles);
    }

    this.start = function() {
    }

    this.setupTiles = function () {
        var testColor = {color: '#a4ff4f'};
        var colorStart = [0, 0, 0];
        var colorEnd = [1, 1, 1];
        var colorStep = (colorEnd[0] - colorStart[0]) / (this.vars.size ** 2);
        var currentIndex = 0;

        for (var y = 0; y < this.vars.size; y++) {
            for (var x = 0; x < this.vars.size; x++) {
                var current = new PIXI.Graphics();
                var colorDiff = colorStep * currentIndex;
                var color = colorStart[0] + colorDiff;
                color = PIXI.utils.rgb2hex([color, color, color]);
                current.beginFill(color);
                current.drawRect(0, 0, this.vars.size, this.vars.size);
                current.endFill();

                current.position.set(x * this.vars.size, y * this.vars.size);

                this.assets.tiles.addChild(current);
                currentIndex++;
            }
        }
    }
}
