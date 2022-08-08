//import de "express"
const express = require("express")
//body-parser
var bodyParser = require('body-parser')

//importation des routes "product et user" 
const productRoutes = require("./Routes/product") 
const userRoutes = require("./Routes/user") 


// crée le serveur "express"
let app = express()

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())







 /* //utilisation de milldware

app.use("/product" , (req,res,next)=>{
    console.log("A new request received at "+ Date.now())
    next();
})  */


// utilisation des routes respectives
app.use('/product', productRoutes)
app.use('/users', userRoutes)







app.listen(8080,()=>console.log("votre appli est dispo sur 8080"))