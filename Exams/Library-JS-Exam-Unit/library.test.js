let library = require('./library');
let {expect, assert} = require('chai');

describe("Library Test", function () {

    describe("calcPriceOfBook", function () {

        it("Should throw error with number on first input", function () {

            expect(() => library.calcPriceOfBook(20, 20)).to.throw('Invalid input');
        });

        it("Should throw error with string on second input", function () {

            expect(() => library.calcPriceOfBook('text', 'book')).to.throw('Invalid input');
        });

        it("Should show price of 20 after 1980", function () {

            assert.equal(library.calcPriceOfBook('text', 2000), `Price of text is 20.00`)
        });

        it("Should show price of 10 from 1980", function () {

            assert.equal(library.calcPriceOfBook('text', 1980), `Price of text is 10.00`)
        });

        it("Should show price of 10 from 1980 or older", function () {

            assert.equal(library.calcPriceOfBook('text', 1942), `Price of text is 10.00`)
        });
    });

    describe("findBook", function () {

        it("Should throw error with no books in the arr", function () {

            expect(() => library.findBook([], 'Troy')).to.throw('No books currently available');
        });

        it("Should return if found book", function () {

            assert.equal(library.findBook(['Enigma', 'Troy'], 'Troy'), 'We found the book you want.');
        });

        it("Should return if did not found the book", function () {

            assert.equal(library.findBook(['Enigma', 'Troy'], 'Gosho'), 'The book you are looking for is not here!');
        });
    })

    describe("arrangeTheBooks", function () {

        it("Should throw error with negative number", function () {

            expect(() => library.arrangeTheBooks(-27)).to.throw('Invalid input');
        });

        it("Should throw error with floating point number", function () {

            expect(() => library.arrangeTheBooks(2.5)).to.throw('Invalid input');
        });

        it("Should throw error with null", function () {

            expect(() => library.arrangeTheBooks(null)).to.throw('Invalid input');
        });

        it("Should throw error with undefined", function () {

            expect(() => library.arrangeTheBooks(undefined)).to.throw('Invalid input');
        });

        it("Should throw error with empty string", function () {

            expect(() => library.arrangeTheBooks('')).to.throw('Invalid input');
        });

        it("Should throw error with object", function () {

            expect(() => library.arrangeTheBooks({})).to.throw('Invalid input');
        });

        it("Should throw error with array", function () {

            expect(() => library.arrangeTheBooks(['Troy', 'Enigma'])).to.throw('Invalid input');
        });

        it("Should throw error with string", function () {

            expect(() => library.arrangeTheBooks('Gosho')).to.throw('Invalid input');
        });

        it("Should throw error with number as a string", function () {

            expect(() => library.arrangeTheBooks('27')).to.throw('Invalid input');
        });

        it("Should throw error with 0", function () {

            expect(() => library.arrangeTheBooks(0)).to.throw('Invalid input');
        });

        it("Should return not enough space with 41", function () {

            assert.equal(library.arrangeTheBooks(41), 'Insufficient space, more shelves need to be purchased.');
        });

        it("Should return not enough space with 69", function () {

            assert.equal(library.arrangeTheBooks(69), 'Insufficient space, more shelves need to be purchased.');
        });

        it("Should work normal with 40", function () {

            assert.equal(library.arrangeTheBooks(40), 'Great job, the books are arranged.');
        });

        it("Should work normal with 27", function () {

            assert.equal(library.arrangeTheBooks(27), 'Great job, the books are arranged.');
        });


    })
});