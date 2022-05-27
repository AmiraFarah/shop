require('dotenv').config()
const express = require('express')
const method = require('method-override')
const app = express()
const port = 2001
const Product = require('./models/Product')
const mongoose = require('mongoose')
const Cart = require('./models/Cart')

//===============connection to Database==========

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.once('open', () => console.log('Connected to Mongo'))



// setup engine
app.set('view engine','jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({extended:false}))

//==========Middleware=========
app.use(express.urlencoded({extended:false}));
app.use(method('_method'))
app.use(express.static('public'))
// Need to parse JSON.use Express middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log('i run for all route')
    next()
})
//====================routes===================

// INDUCES Index, New, Delete, Update, Create, Edit, Show

// Index
app.get('/',(req,res)=>{
    res.render('First')
})
app.get('/dresses',(req,res)=>{
   // query model to return all fruits

   Product.find({},(err,allDresses)=>{
res.render('Index',{dresses:allDresses})
})
})

//New element 
app.get('/dresses/new',(req,res)=>{
    res.render('New')
})



// DELETE ROUTE
app.delete('/dresses/:id',(req,res)=>{
    Product.findByIdAndDelete(req.params.id,(err)=>{
        if(!err){
            res.status(200).redirect('/dresses')
        }
        else {
            res.status(400).json(err)
        }
    })
})

//update route
app.put('/dresses/:id',(req,res)=>{
    Product.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,updatedProduct)=>{
        if (!err){ res.status(200).redirect('/dresses')} 
        else {
            res.status(400).json(err)
        }
    })
})
// Create new element in the index page
app.post('/dresses',(req,res)=>{ //MongoServerError: bad auth : Authentication failed.
    // dresses.push(req.body)    // THAT MEANS wrong password or username  , something wrong
    Product.create(req.body,(err,createdDress)=>{
     res.redirect('/dresses')
 })
   //  
 })

// shoping cart route
app.post('/cart',(req,res)=>{
    Cart.create(req.body,(err,addToCart)=>{
        res.render('Shopping')

    })
})

// shoping cart link 

// app.post('/shoppingCart',(req,res)=>{
//     console.log('mammy')
//      Cart.create(req,res,(err,addProduct)=>{
//         res.render('Shopping',{addProduct})
//      })
// })

 // Edit

 app.get('/dresses/:id/edit',(req,res)=>{
     Product.findById(req.params.id,(err,foundProduct)=>{
         if(!err){res.render('Edit',{product:foundProduct})}
         else {
             res.status(400).json(err)
         }
     })

     })
 
 // Show the element details 
app.get('/dresses/:id', (req,res)=>{
    Product.findById(req.params.id,(err,foundDress)=>{
        res.render('Show',{dress:foundDress})

    })
})


app.listen(port,()=>{
    console.log('listen to 3000')
}) 