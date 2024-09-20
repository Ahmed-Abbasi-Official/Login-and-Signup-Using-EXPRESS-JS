
                            // =====================
                            //    Import Files
                            // =====================  


import express from 'express'
import connectdb from './db/connectdb.js'
import web from './routes/web.js'


                            // =====================
                            //       Variables
                            // =====================  


const app =express()
const port = process.env.PORT || '3000'
const DATABASE_URL=process.env.DATABASE_URL || 'mongodb://localhost:27017'



                            // =====================
                            // DATABASE CONNECTION
                            // =====================  


connectdb(DATABASE_URL)


                            // =====================
                            // Laod Routes
                            // =====================  

// templates engine .
app.set('view engine','ejs')

app.use(express.urlencoded({extended:true}))

// Static Files .

app.use(express.static('./public'))

app.use('/',web)

app.listen(port,()=>{
    console.log(`Server Listen At http://localhost:${port}`);
    
})