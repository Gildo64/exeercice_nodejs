
const localfs = require('./localfs')
{  for (let i = 0; i < localfs.data.length; i++) { 
    localfs.createFile(`./releves/relevé-${localfs.data[i].nom}.txt`,`"Nom": ${localfs.data[i].nom},
    "Prenom": ${localfs.data[i].prenom},
    "Age": ${localfs.data[i].age}`)
    }
  }

  localfs.getFile("./releves")             