const fs = require('fs')
const path = require('path');

const data = [
    {
        name: 'legrand',
        filiere: 'histoire',
        contact: '58966587'
    },
    {
        name: 'cesar',
        filiere: 'Logiciel',
        contact: '6899966559'
    },
    {
        name: 'norman',
        filiere: 'Informatique',
        contact: '9874458659'
    },
    {
        name: 'pauline',
        filiere: 'Français',
        contact: '9874458459'
    },
    {
        name: 'Daniel',
        filiere: 'Anglais',
        contact: '60546459'
    },
    {
        name: 'Aristide',
        filiere: 'Mathematique',
        contact: '60546459'
    },
    {
        name: 'Normento',
        filiere: 'Philo',
        contact: '68546459'
    },
    {
        name: 'Gérard',
        filiere: 'Logiciel',
        contact: '60546459'
    },
    {
        name: 'Benedicte',
        filiere: 'Espagnol',
        contact: '60 54 64 59'
    },
    {
        name: 'Enock',
        filiere: 'Electricité',
        contact: '60 58 0064 59'
    },
]

const createFile = async (file, value) => {

    await fs.writeFile(file, value, (error) => {


        if (error) {
            console.log(error)
        }
        else {
            
        }

    });


}




const getFile = async (directory) => {
    const directoryPath = path.join(__dirname, directory);
    //.log(directoryPath)
    await fs.readdir(directoryPath, (err, data) => {

        if (err) {
            console.log(err)
        }
        else {

            data.forEach(async element => {
                await fs.readFile(`${directory}/${element}`, (err, data) => {

                    if (err) {
                        console.log(err)
                    }
                    else {
                        console.log(`contenu du relevé : `, data.toString());
                    }
                })

            });

        }

    })
}

module.exports = { createFile, getFile, data }