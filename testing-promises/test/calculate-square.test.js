const calculateSquare = require('../src/calculate-square.js');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const expect = chai.expect;

describe('calculateSquare using return statement', function() {
    // Using eventually and the return statement
    it('should resolve with number 4 if passed number 2', function () {
        return expect(calculateSquare(2)).to.eventually.be.equal(4);
    });

    it('should become fulfilled when passed number 2', function () {
        return expect(calculateSquare(2)).to.be.fulfilled;
    });
    
    it('should become rejected if passed a string instead of a number', function () {
        return expect(calculateSquare('some string')).to.be.rejected;
    });    
});

describe('calculateSquare using done callback', function() {
    // You can rewrite these 3 test cases using done callback
    it('should resolve with number 4 if passed number 2', function (done) {
        expect(calculateSquare(2)).to.eventually.be.equal(4).notify(done);
    });
    
    it('should become fulfilled when passed number 2', function (done) {
         expect(calculateSquare(2)).to.be.fulfilled.notify(done);
    });
    
    it('should become rejected if passed a string instead of a number', function (done) {
         expect(calculateSquare('some string')).to.be.rejected.notify(done);
    });
});
