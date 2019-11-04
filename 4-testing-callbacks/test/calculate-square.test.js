const calculateSquare = require('../calculate-square.js');
const expect = require('chai').expect;

describe('calculateSquare', function () {
    it('should return 4 if passed 2', function (done) {
        calculateSquare(2, function (error, result) {
            expect(result).to.equal( 4);
            done();
        });
    });

    it('should return an error if passed string', function (done) {
        calculateSquare('string', function (error, result) {
            expect(error).to.not.equal(null);
            expect(error.message).to.equal('Argument of type number is expected');
            done();
        });
    });    
});