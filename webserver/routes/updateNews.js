var express=require('express')
var mongoose=require('mongoose')
var News=require('../modal/newsSchema');
var router =express.Router();
router.put('/',function(req,res){
    var username=req.body.username;
    var newsArticle=req.body.news;
    var comments=req.body.comments;
    console.log(newsArticle);
    console.log(newsArticle);
    var news=new News({username:username,newsArticle:newsArticle,comments:comments});
  news.update((error)=>{
    if(error){
      res.json({'updated':false,error:error});
    }
    else{
      res.json({'updated':true});
    }
  })
});
module.exports=router;