var requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

var gr;
var BGStars = function()
{
    var _BGStars 	  = this;
    this.STOPPED    = false;
    this.canvas 	  = $('#bg-stars');
    this.NAME       = '#bg-stars';
    this.stage 		  = new PIXI.Stage(0x000000);
    this.renderer 	= PIXI.autoDetectRenderer(this.canvas.width(), this.canvas.height(), this.canvas.get(0), true, true);
    this.NUM_POINTS = 80;
    this.points     = [];
    this.radius     = 2;
    this.width      = this.canvas.width(),
    this.height     = this.canvas.height(),

    this.init = function(){

        // ADD GRAPHICS
        gr = new PIXI.Graphics();
        _BGStars.stage.addChild(gr)

        // CREATE POINTS
        for(var i = 0; i < _BGStars.NUM_POINTS; i++)
        {
            var x = Math.random() * _BGStars.width
                , y = Math.random() * _BGStars.height
                , vX = this.randBtwn(-3, 3)
                , vY = this.randBtwn(-3, 3)
                , radius = this.randBtwn(1, 4.9);

            _BGStars.points.push({
                x: x,
                y: y,
                vY: vY,
                vX: vX,
                vY0: vY,
                vX0: vX,
                radius: radius
            })
        }

        _BGStars.animate();
    }

    this.animate = function(){
        gr.clear();
        gr.beginFill(0xFFFFFF);

        var point, i;
        for(i = 0; i < _BGStars.points.length; i++)
        {
            point = _BGStars.points[i];
            gr.drawCircle(point.x, point.y, point.radius);
        }


        gr.endFill();

        // render the stage
        _BGStars.renderer.render(_BGStars.stage);
    }

    this.randBtwn = function(min, max) {
      var rval = 0;
      var range = max - min;

      var bits_needed = Math.ceil(Math.log2(range));
      if (bits_needed > 53) {
        throw new Exception("We cannot generate numbers larger than 53 bits.");
      }

      var bytes_needed = Math.ceil(bits_needed / 8);
      var mask = Math.pow(2, bits_needed) - 1;
      // 7776 -> (2^13 = 8192) -1 == 8191 or 0x00001111 11111111

      // Create byte array and fill with N random numbers
      var byteArray = new Uint8Array(bytes_needed);
      window.crypto.getRandomValues(byteArray);

      var p = (bytes_needed - 1) * 8;
      for(var i = 0; i < bytes_needed; i++ ) {
        rval += byteArray[i] * Math.pow(2, p);
        p -= 8;
      }

      // Use & to apply the mask and reduce the number of recursive lookups
      rval = rval & mask;

      if (rval >= range) {
        // Integer out of acceptable range
        return _BGStars.randBtwn(min, max);
      }
      // Return an integer that falls within the range
      return min + rval;
    }
}

let main = () => {
  if(
    window.location.hash !== '#/login' &&
    window.location.hash !== '#/register'
  ) return console.info('not generating stars');

  $("#bg-stars").attr("width", $(window).width());
  $("#bg-stars").attr("height", $(window).height());

  var stars = new BGStars();
  stars.init();
};

$(document).ready(main);

if(router) {
  console.log('stars is using router.');
  window['ROUTER'].bind(main);
}
