import mongoose from 'mongoose';

const mensajeSchema = new mongoose.Schema(
  {
    author: {},
    text: String,
  },
  { timestamps: true }
);

class Mensajes {
  constructor() {
    this.mensajes = mongoose.model('mensajes', mensajeSchema);
  }

  async add(nuevo) {
    const nuevoMensaje = new this.mensajes(nuevo);
    await nuevoMensaje.save();
  }
  async find() {
    return await this.mensajes.find().lean();
  }
}

export default new Mensajes();
