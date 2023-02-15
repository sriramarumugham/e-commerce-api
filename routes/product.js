const express=require('express');
const router=express.Router();

router.get('/' , function (req, res){
    return res.json({
        "message":"Getting all products"
    })
})
router.get('/:id' , function (req, res){
    return res.json({
        "message":"Here is your product with id"
    })
})
router.delete('/:id' , function(req, res){
    return res.json({
        "message":"Deleting the id"
    })
})
router.post('/:id/update_quantity/' , function(req, res){
    return res.json({
        "message":`Updated the product with the id ${req.url}`
    })
})

module.exports=router;