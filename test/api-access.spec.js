//var apiAccess = require('../src/api-access.js');
var chai = require('chai'),
    expect = chai.expect;

describe('api access', function(){
    var getParams = {
        url: '/some/url'
    };

    it('has a url property', function() {

        expect(getParams.url).to.be.a('string');
        expect(getParams).to.include.keys('url');
        expect(getParams.url).to.equal('/some/url');
    });
});
