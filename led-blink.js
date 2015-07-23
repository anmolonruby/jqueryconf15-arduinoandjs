var five = require("johnny-five"),
    board = new five.Board();

board.on("ready", function() {

  // Create an Led on pin 1 and strobe it on/off
  // Optionally set the speed; defaults to 100ms
  var led = (new five.Led(5))

  this.repl.inject({
    led: led
  });

  // led.blink();
  // "blink" the led in 1000ms on-off phase periods
  led.blink(100);

});
