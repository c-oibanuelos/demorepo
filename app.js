var express = require('express');
var app = express();
var router = express.Router();

router.get('/',function(req,res) {
    res.send("UTLTIMATE MEGA SUPER Hello World");
});

app.use('/',router);

app.listen(9090);
