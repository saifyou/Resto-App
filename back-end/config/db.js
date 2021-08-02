const mongoose = require('mongoose')

const dataBase = () =>{
    mongoose.connect('mongodb+srv://saif:1234@cluster0.bnlwt.mongodb.net/test?retryWrites=true&w=majority' ,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
      }
    )
 .then(() =>{ console.log('data_base connected')})
    .catch(()=>{console.log('error bch tetarcheg')})

} 
module.exports = dataBase
