var exports = module.exports = {};

var connection = {
    open: function(params){
        var req = new XMLHttpRequest(),
            reqPromise;

        reqPromise = new Promise(function(resolve, reject){
            req.open(params.method, params.url);
            req.send();

            req.onload = function() {
                if (req.status === 200) {
                    // If successful, resolve the promise by passing back the request response
                    resolve(req.response);
                } else {
                    // If it fails, reject the promise with a error message
                    reject(Error('error code:' + req.statusText));
                }
            };

            req.onerror = function() {
                // Also deal with the case when the entire request fails to begin with
                // This is probably a network error, so reject the promise with an appropriate message
                reject(Error('There was a network error.'));
            };
            // Send the request
            req.send();
        });

        return reqPromise;
    }
};

exports.open = function(params, data){
    connection.open(params, data);
};
