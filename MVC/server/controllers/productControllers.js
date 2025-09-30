const ProductModel = require('../models/product.model.js')

// get All products

exports.getAllProducts = async(req , res)=>{
    let products = await ProductModel.find()
    res.send(products)
}



// Post, create A product
exports.createProduct = async (req , res)=>{
  let course =  await  ProductModel.create({
        product_name : req.body.product_name,
        product_price : req.body.product_price,
        isInStock : req.body.isInStock,
        ratings : req.body.ratings
    })

    res.send(course)
}

// updateProduct 

exports.updateProduct = async (req , res)=>{
  let updatedProduct = await ProductModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.send(updatedProduct)
}




exports.deleteProduct = async (req , res)=>{
  let deletedProduct = await ProductModel.findByIdAndDelete(req.params.id)
  res.send(deletedProduct)
}
