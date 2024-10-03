const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.status(3000).send("Hola desde get")
});

app.post("/",(req,res)=>{
    res.status(3000).send("Hola desde post")
});

app.put("/",(req,res)=>{
    res.status(3000).send("Hola desde put")
});

app.patch("/",(req,res)=>{
    res.status(3000).send("Hola desde patch")
});
    
app.delete(3000, (req,res) => {
    res.status(3000).send("Hola desde delete")
});

app.listen(3000,()=>{
    console.log("Servidor cooriendo en http://localhost:3000")
});