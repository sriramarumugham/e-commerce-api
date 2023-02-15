const express=require('express');
const router=express.Router();

router.get('/' , function(req, res){
    res.end("Home page with the form to create a product, list of products, and a button to update  a product ")
})
router.use('/products' , require('./product'));

module.exports=router;