let ProgressBar = require('../index.js');

let bar = new ProgressBar({
  total: 100
});

let tokens = ':current.underline.magenta/:total.italic.green :percent.bold.yellow :elapseds.italic.blue :etas.italic.cyan';

let iv = setInterval(function () {

  let completedColor = '';
  let current        = bar.current;
  if (current < 20) {
    completedColor = 'black';
  } else if (current < 40) {
    completedColor = 'red';
  } else if (current < 60) {
    completedColor = 'black';
  } else if (current < 80) {
    completedColor = 'red';
  } else if (current < 100) {
    completedColor = 'yellow';
  }

  let schema = ' [.white:filled.' + completedColor + ':blank.grey] .white' + tokens;

  bar.setSchema(schema);
  bar.tick();

  if (bar.completed) {
    clearInterval(iv);
  }

}, 30);
