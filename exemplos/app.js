let ProgressBar = require('../index.js');

let bar = new ProgressBar({
  clean   : true,
  schema  : ' :bar.green :percent.red',
  callback: function () {
    console.log('Tudo Certo!');
  }
});


let iv = setInterval(function () {

  bar.tick();
  console.log(new Date);

  if (bar.completed) {
    clearInterval(iv);
    console.log('Completo!');
  }

}, 10);

