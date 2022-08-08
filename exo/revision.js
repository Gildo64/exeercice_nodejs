const fs = require('fs')
const path = require('path')

const eleve=[
    {
        nom:'CODJOVI',
        prenom:'bob',
        age:'15'
    },

    {
        nom:'ABALLO',
        prenom:'eric',
        age:'16'
    },

    {
        nom:'NOUMONVI',
        prenom:'Mathias',
        age:'30'
    },

    {
        nom:'SOSSOU',
        prenom:'Félix',
        age:'40'
    }
]


const createFile = async(file, value)=>{
    await fs.write(file,value,(error)=>{
        if (error) {
            console.log(error);
            
        } else{
            console.log("fichier crée avec succes");
        }
    }
    
    )
}

const getFile=(directory)