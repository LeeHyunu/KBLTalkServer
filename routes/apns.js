var express = require('express');
var apn = require('apn');
var fs = require('fs');
const CommonRes = require('../model/CommonRes').CommonRes;
var router = express.Router();




var property = fs.readFileSync('./property/apns.local','utf8');
var jsonContent = JSON.parse(property.trim());
console.log(jsonContent);

var options = {
    token: {
        key: jsonContent.path,
        keyId: jsonContent.keyId,
        teamId: jsonContent.teamId
    },
    production: false
};
console.log(options);
var appBundleId = jsonContent.appBundle
let apnProvider = new apn.Provider(options);

router.post('/sendAPNS', function(req, res, next) {
    let senderId = req.body.senderId;
    let receiverId = req.body.receiverId;
    let sendMessage = req.body.sendMessage;
    //for demo
    let receiverRegId = req.body.receiverRegId;

    if (senderId == null || receiverId == null || sendMessage == null || receiverRegId == null) {
        var result = new CommonRes("002","some parameters is null");
        console.log(result);
        res.json({"result" : result});
        return;    
    }

    let noti = new apn.Notification();
    noti.expiry = Math.floor(Date.now()/ 1000) + 3600;
    noti.badge = 0;
    noti.alert = sendMessage;
    noti.topic = appBundleId;

    apnProvider.send(noti, receiverRegId).then( result => {
       console.log(result); 
       var result = new CommonRes("001","success");
       console.log(result);
       res.json({"result" : result});
    });
});


module.exports = router;