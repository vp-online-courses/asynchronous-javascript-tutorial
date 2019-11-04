const calculateSquare = require('../src/calculate-square.js');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const expect = chai.expect;

describe('calculateSquare with multiple return statements', function() {
    // This won't work. You can not have multiple return statements
    it('should resolve with number 4 if passed number 2', function () {
        return expect(calculateSquare(2)).to.eventually.be.above(5);
        return expect(calculateSquare(2)).to.eventually.be.equal(4);
    })    
});

describe('calculateSquare with multiple notify calls', function() {
    // This also won't work. You can not call notify multiple times in 1 test case
    it('should resolve with number 4 if passed number 2', function (done) {
        expect(calculateSquare(2)).to.eventually.be.above(5).notify(done);
        expect(calculateSquare(2)).to.eventually.be.equal(4).notify(done);
    })
});

describe('calculateSquare with then method', function() {
    // This will work. 
    it('should resolve with number 4 if passed number 2', function () {
        return calculateSquare(2).then(
            result => {
                expect(result).to.be.above(5);
                expect(result).to.be.equal(4);
            });
    })
});