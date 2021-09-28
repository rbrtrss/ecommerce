import mongoose from 'mongoose';

const productoSchema = new mongoose.Schema(
  {
    title: String,
    price: Number,
    thumbnail: String,
  },
  { timestamps: true }
);

const Productos = mongoose.model('productos', productoSchema);

export default Productos;
