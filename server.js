const express=require('express')
const customerRouter = require('./routes/customer')
const indexRouter = require('./routes/index')
const methodOverride = require('method-override')
const mongoose =require('mongoose')
const app=express()
require('dotenv').config()
app.use(methodOverride('_method'))
app.set('view engine','ejs')
app.use(express.urlencoded({extended: false}))

const connectFunctions=async()=>{
    try{
        await mongoose.connect('mongodb+srv://duyprovipwe:067548567@vietdaica.rfdt1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        console.log("Ket noi thanh cong")
    }catch(e){
        console.log(e)
        console.log("Ket noi that bai. Xin hay thu lai")
    }
}
connectFunctions()
app.use(express.urlencoded({ extended: false }))
app.use('/customer/',customerRouter)

app.use('/',indexRouter)
app.listen(process.env.PORT||4000)