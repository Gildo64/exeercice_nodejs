const fs = require('fs')
const {resolve} = require('path')

const data = [
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
    },
    {
        nom:'KOUKPODE',
        prenom:'elie',
        age:'18'
    },

    {
        nom:'ADJOVI',
        prenom:'emile',
        age:'20'
    },

    {
        nom:'NOUMON',
        prenom:'jean',
        age:'50'
    },

    {
        nom:'SOSSOUKPE',
        prenom:'Félicite',
        age:'70'
    },
    {
        nom:'DJOSSA',
        prenom:'Flavien',
        age:'90'
    },

    {
        nom:'AGBOVI',
        prenom:'Hermione',
        age:'200'
    }

]


const getdata = (chemin="/Releves")=>{
    return new Promise(async (resolve,reject))
    await fs.readFile(chemin,(error,data)=>{
        if (error) {
            reject(error);
        }
        else{
            resolve(JSON.parse(data));
        }
    })
};


const writedata = async (chemin = "/Releves", values = []) => {
    return new Promise(async (resolve, reject) => {
      const formatedData =Buffer.from(JSON.stringify(values))
      await fs.writeFile(abs, formatedData, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve(true);
        }
      });
    });
  };

module.exports={getdata,writedata,data,generateReleves}