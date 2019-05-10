var express = require('express');
var router = express.Router();

const CommonRes = require('../model/CommonRes').CommonRes;
const UserInfo = require('../model/UserInfo').UserInfo;

var dummyDB = new Array();

router.post('/addFriend', function(req, res, next) {
    var id = req.body.id;
    var pw = req.body.pw;
    var profilePath = req.body.profilePath;
    dummyDB.push(new UserInfo(id, pw, profilePath));

    res.json({result :new CommonRes("001","success")});
});

router.post('/getFriends', function(req, res, next) {
    //todo 세션키 체크
    if(dummyDB.length < 1) {
        res.json({result : new CommonRes("002","emptyList")});
        return;    
    }
    res.json({result : new CommonRes("001","success"), data: dummyDB});
});

module.exports = router;