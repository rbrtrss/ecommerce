import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const usuarioSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

usuarioSchema.pre('save', async function (next) {
  const usuario = this;
  const hash = await bcrypt.hash(usuario.password, 10);
  this.password = hash;
  next();
});

usuarioSchema.methods.isValidPassword = async function (password) {
  const usuario = this;
  const compara = await bcrypt.compare(password, usuario.password);
  return compara;
};

class Usuarios {
  constructor() {
    this.usuarios = mongoose.model('usuarios', usuarioSchema);
  }

  async add(nuevo) {
    const nuevoUsuario = new this.usuarios(nuevo);
    await nuevoUsuario.save();
  }
  async find() {
    return await this.usuarios.find().lean();
  }
  async findOne(email) {
    return await this.usuarios.findOne({ email }).lean();
  }
}

export default new Usuarios();
