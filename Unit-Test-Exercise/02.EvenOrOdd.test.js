const isOddOrEven = require('./02.EvenOrOdd.js');
const {assert} = require('chai');

describe('Check if it Even or Odd', () => {

    it('input is not a string', () =>{
        assert.equal(isOddOrEven(123),undefined);
    });

    it('input is even',() => {
        assert.equal(isOddOrEven('Petq'),'even');
    });

    it('input is odd',() => {
        assert.equal(isOddOrEven('Pesho'),'odd');
    });
})

console.log(isOddOrEven('Petq'));