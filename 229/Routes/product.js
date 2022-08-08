
let express = require("express")

let router = express.Router()

//utilisation de milldware

router.use("/" , (req,res,next)=>{
    console.log("A new request received at "+ Date.now())
    next();
})

router.get("/", (req,res,next)=>{
    res.send("Milldles")
    next()
})










router.get('/:id', (req,res)=>{
    res.send("info du produit " + req.params.id)
    
})

router.get('/filter-by-labels/:categorie([0-9])/division/:color', (req,res)=>{
    res.send("recherche par labels de la categorie " + req.params.categorie + " et de couleur " + req.params.color)
    console.log(req.params.categorie);
})


router.get('/', (req,res)=>{
    res.send("liste des produits")
     
})


router.post('/rouge', (req,res)=>{
    res.send("produits")
})

router.put('/bleu', (req,res)=>{
    res.send("envoie des produits")
})

router.delete('', (req,res)=>{
    res.send("suppression des produits")
})



module.exports=router 















