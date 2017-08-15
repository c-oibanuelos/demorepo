var express = require('express');
var app = express();
var router = express.Router();

router.get('/',function(req,res) {
    res.send("MEGA SUPER Hello World");
});

app.use('/',router);

app.listen(9090);
