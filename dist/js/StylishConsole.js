var StylishConsole = {

  settings: {
    prefix: '%c',
    block: '■',
    redColor: 'color:red',
    pinkColor: 'color:pink',
    redCount: 30,
    pinkCount: 0,
    step: 3
  },

  init: function () {
    s = this.settings;
    this.render();
  },

  buildBlocks: function (number) {
    var blocks = s.prefix;
    for (var i=0; i<number; i++) {
      blocks = blocks + s.block;
    }
    return blocks;
  },

  render: function () {
    while (s.redCount>(0-s.step)) {
      var redBlocks = this.buildBlocks(s.redCount);
      var pinkBlocks = this.buildBlocks(s.pinkCount);
      var coloredBlocks = redBlocks + pinkBlocks;
      console.log(coloredBlocks, s.redColor, s.pinkColor);
      s.redCount = s.redCount - s.step;
      s.pinkCount = s.pinkCount + s.step;
    }
  }

}

StylishConsole.init();
