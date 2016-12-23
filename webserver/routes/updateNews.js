var express=require('express')
var mongoose=require('mongoose')
var News=require('../modal/newsSchema');
var router =express.Router();
router.put('/',function(req,res){// updating the comments
  var newsId=req.body.newsId;
  var comments=req.body.comments;
  News.findById({_id:newsId},function(error,data){
    if(error){
    res.json({"updated":false,"error":error});
    }
    else{
      data.comments=comments;
      data.save(function(err){
        if(err){
          console.log("Error in save update");
          res.json({"updated":false,"error":error})
        }
        else{
          res.json({"updated":true})
        }
      })
    }
  })
})
module.exports=router;