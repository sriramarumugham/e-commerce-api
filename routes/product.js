const express=require('express');
const router=express.Router();

const products_api=require('../controller/product_controller');

router.post('/create' , products_api.create);
router.get('/' , products_api.fetchAll);
router.get('/:id' , products_api.fetchOne);
router.delete('/:id' , products_api.destroy);
router.post('/:id/update_quantity/' , products_api.update);

module.exports=router;