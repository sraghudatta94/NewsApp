var express=require('express')
var mongoose=require('mongoose')
var News=require('../modal/newsSchema');
var router =express.Router();
router.route('/:newsId').delete(function(req,res){
  console.log(req.params.newsId);
  News.remove({_id:req.params.newsId}, function(err) {
    if (err) {
      res.json({"deleted":err});
    }
    else{
      res.json({"deleted":true});
    }
});
})
module.exports=router;