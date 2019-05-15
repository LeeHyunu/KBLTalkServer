var express = require('express');
var router = express.Router();

const CommonRes = require('../model/CommonRes').CommonRes;
const FriendInfo = require('../model/FriendInfo').FriendInfo;

var dummyDB = new Array();

router.post('/addFriend', function(req, res, next) {
    var id = req.body.id;
    var profilePath = req.body.profilePath;
    dummyDB.push(new FriendInfo(id, profilePath));
    var result = new CommonRes("001","success");

    console.log("addFriend result: ");    
    dummyDB.forEach(function (friend, index, dummyDB) {
        console.log(friend.id);
        console.log(friend.profilePath);
        console.log("-----------------");    
    });
    
    console.log(result);
    res.json({"result" : result});
});

router.post('/getFriends', function(req, res, next) {
    //todo 세션키 체크
    if(dummyDB.length < 1) {
        var result = new CommonRes("002","emptyList");
        console.log(result);
        res.json({"result" : result});
        return;    
    }
    var result = new CommonRes("001","success");
    res.json({"result" : result, data: dummyDB});
});

module.exports = router;