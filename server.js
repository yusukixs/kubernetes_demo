var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Kubernetes Demo',
        message: 'Hello GKE World!'
    });
});

app.listen(3000, function () {
    console.log('listening');
});