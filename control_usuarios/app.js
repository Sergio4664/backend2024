const express = require("express");

const app = express();

app.get("/usuarios",(req,res)=>{
    const usuarios = [
      { id: 1,
        nombre: "Irving",
        apellidos: "Vital",
        email: "irvingenrique164@gmail.com",
      },

      { id: 2,
        nombre: "Sergio",
        apellidos: "Cervantes",
        email: "irvingenrique164@gmail.com",
      },
    ];
    res.status(200).send(usuarios);
});

app.listen(3000, () => {
    console.log("Servidor cooriendo en http://localhost:3000")
});