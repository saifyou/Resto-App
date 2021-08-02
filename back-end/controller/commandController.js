const Command = require("../model/command")
module.exports ={
    getCommand:async(req,res)=>{
        try{
            const command = await Command.find()
            res.json(command)
        }catch(error){
            console.log(error.message)

        }
    },
    addCommand:async(req,res)=>{
        const idProduct = req.body.idProduct
        const phone = req.body.phone
        try{
            const command = new Command({
                idProduct,phone
            })
           await command.save()
           res.json(command)
        }catch(error){
            console.log(error.message)

        }

    },
    deleteCommand:async(req,res)=>{
        try{
            const command = await Command.findByIdAndDelete(req.params.id)
            res.json(command)

        }catch(error){
            console.log(error.message)

        }
    },
    updateCommand:async(req,res)=>{
        try{
            const command = await Command.findByIdAndUpdate(req.params.id,req.body,{new:true})
            res.json(command)

        }catch(error){
            console.log(error.message)

        }         

    }
}