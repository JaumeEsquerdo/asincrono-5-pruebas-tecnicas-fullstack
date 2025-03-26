import { Router } from "express" //importar libreria
import {createProducto, updateProductos, getProductos} from '../../controllers/products.controller.js'

const router = Router()

// ruta para crear el producto
router.post("/productos", createProducto);
router.put("/productos/:id", updateProductos);
router.get("/productos", getProductos);


export default router;