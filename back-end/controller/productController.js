const Product = require("../model/productModel")
module.exports ={
    getProduct:async(req,res)=>{
        try{
           const product = await Product.find()
            res.json(product)
        }catch(error){
            console.log(error.message)

        }
    },
    addProduct:async(req,res)=>{
        const nom = req.body.nom
        const image = req.body.image
        const description = req.body.description
        const prix = req.body.prix
        
        try{
           const product = new Product({
                nom,image,description,
                prix
            })
           await product.save()
           res.json(product)
        }catch(error){
            console.log(error.message)

        }

    },
    deleteProduct:async(req,res)=>{
        try{
           const product = await Product.findByIdAndDelete(req.params.id)
            res.json(product)

        }catch(error){
            console.log(error.message)

        }
    },
    updateProduct:async(req,res)=>{
        try{
           const product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})
            res.json(product)

        }catch(error){
            console.log(error.message)

        }         

    }
}