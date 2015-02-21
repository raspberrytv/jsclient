var app = require('express')();


app.get('/:name', function (req, res, next) {
    var fileName = req.params.name;
    console.log(fileName);
    console.log("\n\n\n");
    res.sendFile(fileName, {root: __dirname}, function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        } else {
            console.log('Sent:', fileName);
        }
    });
});

app.get('/app/:name', function (req, res, next) {
    var fileName = req.params.name;
    console.log(fileName);
    console.log("\n\n\n");
    res.sendFile(fileName, {root: __dirname + "/app"}, function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        } else {
            console.log('Sent:', fileName);
        }
    });
});

app.get('/app/controllers/:name', function (req, res, next) {
    var fileName = req.params.name;
    console.log(fileName);
    console.log("\n\n\n");
    res.sendFile(fileName, {root: __dirname + "/app/controllers"}, function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        } else {
            console.log('Sent:', fileName);
        }
    });
});

app.get('/templates/:name', function (req, res, next) {
    var fileName = req.params.name;
    console.log(fileName);
    console.log("\n\n\n");
    res.sendFile(fileName, {root: __dirname + "/templates"}, function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        } else {
            console.log('Sent:', fileName);
        }
    });
});



app.listen(8080, function() {
    console.log('Listening on port 8080');
});
