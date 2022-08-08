let express = require("express");

const utils = require("./utils");

let router = express.Router();

// CRUD USER

router.get("/", async (req, res) => {
  const users = await utils.getdata("./data/user.txt");
  res.send(users);
});

router.get("/:name/:id", (req, res) => {
  res.send("");
});

router.post("/", async (req, res) => {
  //recuperer une copie des donnes
  let users = await utils.getdata("./data/user.txt");
  //ajouter body au copie
  users.push(req.body);
  //reecrire le fichier
  await utils.writedata("./data/user.txt", users);
  res.send(users);
});

router.put("/:id", async (req, res) => {
  //recuperer une copie des donnes
  let users = await utils.getdata("./data/user.txt");

  //rechercher l'element à l'index avec "user.findIndex((item)=>item.id=req.param.id)" à stocker dans une variable
  const index = users.findIndex((item) => item.id == req.params.id);
  if (index != -1) {
    // modifier l'element à l'index trouvé: users[index]=req.body
    users[index] = req.body;
    console.log(req.params.id, index);
    //réecrire "user" dans le fichier
    await utils.writedata("./data/user.txt", users);
    res.send(users);
  } else {
    //ajouter body au copie
    users.push(req.body);
    //reecrire le fichier
    await utils.writedata("./data/user.txt", users);
    res.send(users);
  }
});

router.delete("", (req, res) => {
  res.send("suppression des commandes");
});

module.exports = router;
