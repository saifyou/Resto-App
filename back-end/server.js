const express = require('express')

const app = express()
const db =require('./config/db')
db()
const cors = require('cors')
app.use(cors())
const body = require('body-parser')
app.use(express.json())

const command = require('./routes/commandRoute')
app.use('/ressto',command)
const product = require('./routes/productRoute')
app.use('/ressto',product)

app.listen(4000,()=>{
    console.log('server yekhdem')
})