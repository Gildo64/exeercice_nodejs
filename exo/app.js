
const localfs = require('./localfs')

for (let i = 0; i < localfs.data.length; i++) { 
localfs.createFile(`./releves/relevé-${localfs.data[i].name}.txt`,`"Name": ${localfs.data[i].name},
"Filieree": ${localfs.data[i].filiere},
"Contact": ${localfs.data[i].contact}`)
} 

localfs.getFile("./releves")             