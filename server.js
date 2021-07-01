const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv/config')

const productRouter = require('./routes/product')
const userRouter = require('./routes/user')


const app = express()
const port = process.env.PORT || 4000;

app.use(cors())
app.use(express.json())

// connecting to database

mongoose.connect(
    process.env.ATLAS_URI, 
    {useNewUrlParser : true,
     useUnifiedTopology: true})

mongoose.connection.once("open", () => {
    console.log("connected")
})

app.use('/product', productRouter)
app.use('/user', userRouter)

.on("error", (error) => {
    console.log("your error", error)
})



//listening to port

app.listen(port, ()=> {
    console.log(`Server is running on port: ${port}`)
})