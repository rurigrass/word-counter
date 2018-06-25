const PubSub = require('../helpers/pub_sub.js');

const WordCounter = function () {

}

WordCounter.prototype.bindEvents = function () {
  PubSub.subscribe('InputView:word-inputted', (evt) => {
    const inputtedWord = evt.detail;
    const result = this.wordCount(inputtedWord);
    PubSub.publish('WordCounter:result', result);
    console.log(result);
  })
};

WordCounter.prototype.wordCount = function (word) {
  return word.split(' ').filter((word) => word != '').length;
};

module.exports = WordCounter;
