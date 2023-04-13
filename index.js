const express = require('express')
const customerRouter = require('./src/routes/customer')
const app = express()

app.use('/customer',customerRouter)

app.listen(3000, ()=>{
    console.log('app running')
})