import { Producto } from '../db/models/producto.model.js'

const responseAPI = {
    msg: "",
    data: [],
    status: "ok", //error
    cant: null,
}



export const createProducto = async (req, res, next) => {
    const { name, diseñador, description } = req.body

    try {
        const nuevoProducto = await Producto.create({
            name,
            diseñador,
            description,

        });

        responseAPI.msg = "Producto creado con exito";
        responseAPI.data = nuevoProducto;

        res.status(201).json(responseAPI)
    } catch (e) {
        console.error('error creando producto', e)
        next(e)
    }
}

export const updateProductos = async (req, res, next) => {
    const {id} = req.params
    const {name, diseñador, description} = req.body

    try{
        const updateProducto = await Producto.findByIdAndUpdate(id, {
            name:name,
            diseñador:diseñador,
            //img: req.file.filename,
            description:description

        }, {new:true})

        if(!updateProducto){
            responseAPI.msg = `No se encontró el producto con ID ${id}`
            responseAPI.status = 'error'
            return res.status(404).json(responseAPI)
        }


        responseAPI.msg = "Producto encontrado";
        responseAPI.data = updateProducto;
        responseAPI.status = "ok";
        res.status(200).json(responseAPI);


    }catch(e){
        console.error(`tuvimos un error en el try del update del producto`, err)

        next(e)
    }

}
export const getProductos = async (req, res, next) => {

    try {
        const productos = await Producto.find()

        responseAPI.msg = "Productos encontrados";
        responseAPI.data = productos;
        responseAPI.status = "ok";

        res.status(200).json(responseAPI);
    } catch (err) {
        console.error(`tuvimos un error en el try del usuario`, err)
        next(err);
    }
}