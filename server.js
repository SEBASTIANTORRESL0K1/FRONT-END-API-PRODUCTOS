// import { inv } from "./app_modules/inventario.js";
// import { Producto } from "./app_modules/producto.js";
const inv=require("./app_modules/inventario");
const Producto=require("./app_modules/producto");
const express=require("express");
const cors = require("cors");
const app = express()
app.use(express.json());
app.use(cors());

const router=require('./routes');
app.use('api',router);

//buscar
app.get('/productos/:codigo',(req,res)=>{
    let codigo=parseInt(req.params.codigo);
    let resp=inv.buscar(codigo);
    console.log(resp);
    if(resp)
        res.json({msg:"producto encontrado",producto:resp,tipo:1})
        //puedo devolver un -1 o un 1, como si fuera un booleano
    else
        res.json({msg:"No se encontro el producto",tipo:-1})

})
//eliminar
app.delete('/productos/:codigo', (req, res) => {
    let codigo = parseInt(req.params.codigo); // Convertir a número
    let resp = inv.eliminar(codigo);
    
    if (resp === false)
        res.json({msg: false, error: "Producto no encontrado",tipo:-1})
    else
        res.json({msg: true, codigo: codigo,tipo:1})
});
//listar
app.get('/productos',(req,res)=>{
    let resp=inv.listarProductos();
    if(resp=="")
        res.json({msg:"No hay productos"})
    else
        res.json({listaDeProductos:resp})
})
//agregar

app.post('/productos', (req, res) => {
    let codigo = parseInt(req.body.codigo); // Convertir a número
    let nombre = req.body.nombre;
    let resp = inv.agregar(new Producto(codigo, nombre));
    if (resp == null)
        res.json({ msg: false });
    else
        res.json({ msg: true, producto: resp });
});

app.get('/', (req, res) => {
    res.send('Hola World')
  })
// app.get('/productos',(req,res)=>{
//     res.json(inv.productos)
// })

app.listen(3002, ()=>console.log("Escuchando en..... 3002") );
