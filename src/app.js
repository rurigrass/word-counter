const InputView = require('./views/input-view.js');
const WordCounter = require('./models/word-counter.js');
const ResultView = require('./views/result-view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const inputView = new InputView();
  inputView.bindEvents();

  const wordCounter = new WordCounter();
  wordCounter.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();

});
