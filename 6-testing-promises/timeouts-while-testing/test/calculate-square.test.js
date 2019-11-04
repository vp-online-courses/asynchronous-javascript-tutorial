const calculateSquare = require('../src/calculate-square.js');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const expect = chai.expect;

describe('calculateSquare using return statement', function() {
    // Setting timeout for all test cases inside this describe function
    this.timeout(4000);

    it('should resolve with number 4 if passed number 2', function () {
        return expect(calculateSquare(2)).to.eventually.be.equal(4);
    });
    
    it('should resolve with 9 if passed 3', function () {
        return expect(calculateSquare(3)).to.eventually.be.equal(9);
    });
});