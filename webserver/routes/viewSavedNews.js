var express=require('express')
var mongoose=require('mongoose')
var News=require('../modal/newsSchema');
var router =express.Router();
router.get('/',function(req,res){
    var username=req.query.username;
    // username="admin@admin.com";
    console.log(username);
  News.find({username:username},function (err, viewNews) {
  if (err) return handleError(err);
  console.log(viewNews);
  res.json(viewNews);
});
});
module.exports=router;