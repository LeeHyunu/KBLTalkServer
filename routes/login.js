var express = require('express');
var router = express.Router();

const CommonRes = require('../model/CommonRes').CommonRes;

var userInfos = ["lhw/1234", "bks/1234", "kwy/1234"];

router.post('/', function(req, res, next) {
    var id = req.body.id;
    var pw = req.body.pw;

    if(id == undefined || id == '') {
        var result = new CommonRes("003","please input id");
        console.log(result)
        res.json({"result" : result});
        return
    }

    if(pw == undefined || pw == '') {
        var result = new CommonRes("004","please input pw");
        console.log(result)
        res.json({"result" : result});
        return
    }
    
    if(userInfos.indexOf(id + "/" + pw) == -1) {
        var result = new CommonRes("002","fail");
        console.log(result)
        res.json({"result" : result});
    }else {
        var result = new CommonRes("001","success");
        console.log(result)
        res.json({"result" : result});
    }
});

module.exports = router;