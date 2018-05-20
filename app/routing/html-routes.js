// path (built into node/no need to install) Allows url CRUD
var path = require('path');


// viewed at http://localhost:8044
module.exports = function (app) {

    app.get('/tables', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/tables.html'));
    });
    app.get('/reserve', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/reserve.html'));
    });
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });

};
