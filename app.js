import express from "express";
import path from "path";
import hbs from "hbs";
import dotenv from "dotenv";

dotenv.config();
const __dirname = path.resolve();

const port = process.env.PORT;
const app = express();

//TODO: require("hbs")
app.set("view engine","hbs");
hbs.registerPartials(path.join(__dirname,"/views/partials"));

//Servir contenido estático
app.use( express.static("public") );

app.get("/",(req,res)=>{
    res.render("home",{
        nombre:"Roberto Núñez",
        titulo:"Curso de Node"
    });
});

app.get("/generic",(req,res)=>{
    res.render("generic",{
        nombre:"Roberto Núñez",
        titulo:"Curso de Node"
    })
});

app.get("/elements",(req,res)=>{
    res.render("elements",{
        nombre:"Roberto Núñez",
        titulo:"Curso de Node"
    })
});

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"/public/error.html"));
});

app.listen(port, ()=>{
    console.log("La aplicación está corriendo en el puerto: ",port)
});