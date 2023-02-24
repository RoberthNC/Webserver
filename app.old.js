import http from "http";

const server = http.createServer( (req,res) => {    
    res.write("Hola Mundo");
    res.end()
} )
.listen(4000);

console.log("Escuchando en el puerto", 4000);