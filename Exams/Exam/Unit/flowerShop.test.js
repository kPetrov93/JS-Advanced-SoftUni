let flowerShop = require('./flowerShop.js');
let {expect, assert} = require('chai');

describe("FlowerShop test", function() {

    describe("calcPriceOfFlowers", function() {

        it("Shold throw error with wrong first input", function() {
            expect(()=> flowerShop.calcPriceOfFlowers(21,24,30)).to.throw('Invalid input!');
        });

        it("Shold throw error with wrong second input", function() {
            expect(()=> flowerShop.calcPriceOfFlowers('rose','24',30)).to.throw('Invalid input!');
        });

        it("Shold throw error with wrong third input", function() {
            expect(()=> flowerShop.calcPriceOfFlowers('rose',2,'30')).to.throw('Invalid input!');
        });

        it("Shold work properly", function() {
            assert.equal(flowerShop.calcPriceOfFlowers('rose',2,3),(`You need $6.00 to buy rose!`))
        });

        it("Shold work properly with floating", function() {
            assert.equal(flowerShop.calcPriceOfFlowers('rose',4,2),(`You need $8.00 to buy rose!`))
        });
     });
     
     describe('checkFlowersAvailable', () => {

        it("Shold work properly ", function() {
            assert.equal(flowerShop.checkFlowersAvailable('rose',['lily','pesho','rose']),(`The rose are available!`))
        });

        it("Shold work properly with no result ", function() {
            assert.equal(flowerShop.checkFlowersAvailable('gosho',['lily','pesho','rose']),(`The gosho are sold! You need to purchase more!`))
        });
     })

     describe('sellFlowers', () => {

        it("Shold throw error with wrong first input", function() {
            expect(()=> flowerShop.sellFlowers(21,0)).to.throw('Invalid input!');
        });

        it("Shold throw error with wrong first input2", function() {
            expect(()=> flowerShop.sellFlowers('gosh',0)).to.throw('Invalid input!');
        });

        it("Shold throw error with wrong first null", function() {
            expect(()=> flowerShop.sellFlowers(null,0)).to.throw('Invalid input!');
        });

        it("Shold throw error with wrong first empty arr", function() {
            expect(()=> flowerShop.sellFlowers([],0)).to.throw('Invalid input!');
        });

        it("Shold throw error with second < 0", function() {
            expect(()=> flowerShop.sellFlowers(['rose','lili'],-1)).to.throw('Invalid input!');
        });

        it("Shold throw error with second > arr.length", function() {
            expect(()=> flowerShop.sellFlowers(['rose','lili'],2)).to.throw('Invalid input!');
        });

        it("Shold throw error with second wrong", function() {
            expect(()=> flowerShop.sellFlowers(['rose','lili'],1.5)).to.throw('Invalid input!');
        });

        it("Shold throw error with second string", function() {
            expect(()=> flowerShop.sellFlowers(['rose','lili'],'1')).to.throw('Invalid input!');
        });

        it("Shold throw error with second null", function() {
            expect(()=> flowerShop.sellFlowers(['rose','lili'],null)).to.throw('Invalid input!');
        });

        it("Shold work properly ", function() {
           let result = flowerShop.sellFlowers(['rose','lili','lale'],1);

            expect(result).to.equal('rose / lale')
        });
     })
});

