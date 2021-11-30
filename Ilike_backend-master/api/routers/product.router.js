'use strict'
const product_controller = require('../controllers/product.controller');
module.exports = (app) => {
    app.route('/product/totalpage')
        .get(product_controller.getTotalPage);
    app.route('/product/allproductAdmin')
        .post(product_controller.getAllProduct);
    app.route('/product/allproduct')
        .post(product_controller.getAllProduct);
    app.route('/product/searchProduct')
        .post(product_controller.getSearchProduct);
    app.route('/product/category')
        .post(product_controller.getProductByCategory);
    app.route('/product/:id')
        .get(product_controller.getProductByID)
    app.route('/product/related/:productId')
        .get(product_controller.getRelatedProduct)
}