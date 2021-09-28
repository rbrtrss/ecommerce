import Productos from '../models/productos.model';

class ProductosController {
  add(nuevo) {
    const nuevoProducto = new Productos(nuevo);
    nuevoProducto.save();
  }
}

export default new ProductosController();
