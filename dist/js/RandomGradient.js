var RandomGradient = {

  settings: {
    htmlColorNames: [
      'beige', 'blue', 'cyan', 'deepskyblue', 'gold', 'gray', 'green',
      'hotpink', 'lavender', 'lime', 'magenta', 'red', 'orange', 
      'pink', 'purple', 'silver', 'violet', 'yellow'
    ],
    angle: 135,
    executeableWindow: '40rem'
  },

  init: function () {
    s = this.settings;
    this.paintGradient();
  },

  getRandomColor: function (clr) {
    var x = Math.round( Math.random() * (s.htmlColorNames.length - 1) );
    var clr = s.htmlColorNames[x];
    return clr;
  },

  paintGradient: function () {
    var color1 = this.getRandomColor();
    var color2 = this.getRandomColor();

    if (color1 == color2) {
      color2 = this.getRandomColor();
    }

    var linearGradient = "linear-gradient(" + s.angle + "deg, " + color1 + ", " + color2 + ")";
    document.body.style.backgroundImage = linearGradient;
  }

}

if (window.innerWidth >= 640) {
  RandomGradient.init();
}
