const Producto = require("./producto");
class Inventario {
    constructor() {
        this.productos = [];
    }

    agregar(producto) {
        if(this.buscar(producto.codigo)){
            return null
        }else{
        this.productos.push(producto);
        return producto;
        }
    }

    eliminar(codigo) {
        let indice = this.buscarIndice(codigo);

        if(indice !== -1) {
            this.productos.splice(indice, 1);
            return true;
        } else {
            return false;
        }
    }

    listarProductos() {
        let res="";
        this.productos.forEach(producto => {
            res+=`Nombre: ${producto.nombre}, Codigo: ${producto.codigo}`;
        });
        return this.productos;
    }
    buscar(codigo) {
        return this.productos.find(producto => producto.codigo === codigo);
    }
    buscarIndice(codigo){
        return this.productos.findIndex(producto => producto.codigo === codigo);
    }
}

let inv=new Inventario();
inv.agregar(new Producto(0,"producto1"));
inv.agregar(new Producto(1,"producto2"));
inv.agregar(new Producto(2,"producto3"));

module.exports=inv;