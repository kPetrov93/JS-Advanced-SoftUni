const mathEnforcer = require('./04.MathEnforcer');
const {assert} = require('chai');

describe('Math enforcer with three functions inside', () => {

    it('addFive with string input', () => {
        assert.equal(mathEnforcer.addFive('five'),undefined)
    })

    it('addFive with correct input', () => {
        assert.equal(mathEnforcer.addFive(5),10)
    })

    it('addFive with negative number', () => {
        assert.equal(mathEnforcer.addFive(-5),0)
    })

    it('addFive with floating point number', () => {
        assert.equal(mathEnforcer.addFive(5.01),10.01)
    })

    it('subtractTen with string input', () => {
        assert.equal(mathEnforcer.subtractTen('five'),undefined)
    })

    it('subtractTen with correct input', () => {
        assert.equal(mathEnforcer.subtractTen(11),1)
    })

    it('subtractTen with negative number', () => {
        assert.equal(mathEnforcer.subtractTen(-1),-11)
    })

    it('subtractTen with floating point number', () => {
        assert.equal(mathEnforcer.subtractTen(12.01),2.01)
    })

    it('sum with first input string', () => {
        assert.equal(mathEnforcer.sum('five',5),undefined)
    })

    it('sum with second input string', () => {
        assert.equal(mathEnforcer.sum(5,'five'),undefined)
    })

    it('sum with correct input', () => {
        assert.equal(mathEnforcer.sum(10,5),15)
    })

    it('sum with floating number input', () => {
        assert.equal(mathEnforcer.sum(11.01,5.01),16.02)
    })
})