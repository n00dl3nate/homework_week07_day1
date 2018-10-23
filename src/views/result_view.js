const PubSub = require('../helpers/pub_sub.js');
// creating object
const ResultView = function ( ) {

};

ResultView.prototype.bindEvents = function(){
  PubSub.subscribe("PrimeChecker:result-calculated",(event) => {
    const isPrime = event.detail;
    this.displayResult(isPrime);
  });
};


ResultView.prototype.displayResult = function(result){
const resultElement = document.querySelector('#result');
resultElement.textContent = `${result}`;


}

module.exports = ResultView;
