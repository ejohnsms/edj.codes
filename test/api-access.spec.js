var apiAccess = require('../src/api-access.js');

describe('api access', function(){
    var getParams = {
        url: '/some/url'
    };

    it('has a url', function() {
        var params = {};

        apiAccess.open(params);
    });
});
