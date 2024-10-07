const express = require("express");

const app = express();

const usuarios = [
  { id: 1,
    nombre: "Sergio",
    apellidos: "Cervantes",
    email: "sergiocervantes742@gmail.com",
  },

  { id: 2,
    nombre: "Sergio",
    apellidos: "Cervantes",
    email: "vitalxd@gmail.com",
  },
];

app.get("/usuarios",(req,res)=>{
    
  res.status(200).send(usuarios);
});

app.get("/usuarios/:id", (req, res) => {
const {id} = req.params;
  const usuario = usuarios.find((usuario)=> usuario.id === +id);
  res.status(200).send(usuario);
});//end point

app.listen(3000, () => {
    console.log("Servidor cooriendo en http://localhost:3000")
});