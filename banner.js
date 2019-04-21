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
        var colorStart = 0xa4ff4f;
        var colorEnd = 0xfafff5;
        var colorStep = Math.floor((colorEnd - colorStart) / (this.vars.size ** 2));
        var currentIndex = 0;

        for (var y = 0; y < this.vars.size; y++) {
            for (var x = 0; x < this.vars.size; x++) {
                var current = new PIXI.Graphics();
                var colorDiff = colorStep * currentIndex;
                current.beginFill(colorEnd - colorDiff);
                current.drawRect(0, 0, this.vars.size, this.vars.size);
                current.endFill();

                current.position.set(x * this.vars.size, y * this.vars.size);

                this.assets.tiles.addChild(current);
                currentIndex++;
            }
        }

        console.log(
            colorEnd - colorStart,
            colorStep * (this.vars.size**2),
            colorStep * currentIndex,
        );

        console.log(
            new Number(colorStart).toString(16),
            new Number(colorEnd).toString(16),
            new Number(colorStart + (colorStep * currentIndex)).toString(16),
            new Number(colorEnd - (colorStep * currentIndex)).toString(16),
        );

        console.log(
            this.assets.tiles.children.length,
            currentIndex,
            this.vars.size ** 2
        );
    }
}
