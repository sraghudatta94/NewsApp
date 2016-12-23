var express=require('express')
var mongoose=require('mongoose')
var News=require('../modal/newsSchema');
var router =express.Router();
router.post('/',function(req,res){//Saving news 
    var username=req.body.username;
    var newsArticle=req.body.news;
    var comments=req.body.comments;
    console.log(newsArticle);
    console.log(newsArticle);
    var news=new News({username:username,newsArticle:newsArticle,comments:comments});
  news.save((error)=>{
    if(error){
      res.json({'saved':false,error:error});
    }
    else{
      res.json({'saved':true});
    }
  })
});
module.exports=router;