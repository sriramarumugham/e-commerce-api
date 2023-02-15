const express=require('express');
const router=express.Router();

router.get('/' , function(req, res){
    res.end("Hi from backend")
})
router.use('/products' , require('./product'));

module.exports=router;