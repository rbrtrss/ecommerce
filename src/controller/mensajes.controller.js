import Mensajes from '../models/mensajes.model';
import nMensajes from '../services/mensajes.normalizer';

class MensajesController {
  async addNuevoMensaje(req, res) {
    const nuevo = req.body;
    await Mensajes.add(nuevo);
    return res.json({ agregado: nuevo });
  }
  async muestraTodos(req, res) {
    const mensajes = await Mensajes.find();
    return res.json({ mensajes: mensajes });
  }
  async muestraNormalizado(req, res) {
    const normalizados = await nMensajes();
    res.json({ normalizados: normalizados });
  }
}

export default new MensajesController();
