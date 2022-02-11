const lookupChar = require('./03.CharLookup.js');
const { assert } = require('chai');

describe('Function to get a char from a string', () => {

    it('first input is a number', () => {
        assert.equal(lookupChar(14, 0), undefined);
    });

    it('both parameters are wrong', () => {
        assert.equal(lookupChar(14, -10), undefined);
    });

    it('first input is an array', () => {
        assert.equal(lookupChar([], 0), undefined);
    });

    it('first input is a null', () => {
        assert.equal(lookupChar(null, 0), undefined);
    });

    it('first input is a NaN', () => {
        assert.equal(lookupChar(NaN, 0), undefined);
    });

    it('second input is not a number', () => {
        assert.equal(lookupChar('Pesho', 'p'), undefined);
    });

    it('second input is a null', () => {
        assert.equal(lookupChar('Pesho', null), undefined);
    });

    it('second input is an array', () => {
        assert.equal(lookupChar('Pesho', [1, 2]), undefined);
    });

    it('second input is not an integer', () => {
        assert.equal(lookupChar('Pesho', 2.3), undefined);
    });

    it('index is bigger than the range', () => {
        assert.equal(lookupChar('Pesho', 10), 'Incorrect index');
    });

    it('index is bigger than the range2', () => {
        assert.equal(lookupChar('Pesho', 5), 'Incorrect index');
    });

    it('index is smaller than 0', () => {
        assert.equal(lookupChar('Pesho', -5), 'Incorrect index');
    });

    it('if is working ok', () => {
        assert(lookupChar('P', 0) === 'P');
    });

    it('if is working ok2', () => {
        assert(lookupChar('Pesho', 1) === 'e');
    });
})
