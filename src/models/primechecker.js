const PubSub = require('../helpers/pub_sub.js');

const PrimeChecker = function (){
}

PrimeChecker.prototype.checkPrime = function (number) {
  if (number <= 1) {
    return "No, This is not a Prime Number.";
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return "No, This is not a Prime Number.";
    }
  }
  return "Yes, This is a Prime Number.";
};


PrimeChecker.prototype.bindEvents = function () {
  PubSub.subscribe("FormView:number-submitted", (event) => {
    const inputtedNumber = event.detail;
    const result = this.checkPrime(inputtedNumber);

    PubSub.publish('PrimeChecker:result-calculated', result);
  });
};




module.exports = PrimeChecker;
