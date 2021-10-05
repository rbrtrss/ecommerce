import Mensajes from '../models/mensajes.model';
import nMensajes from '../services/mensajes.normalizer';

const userEmail = 'frodo@comarca.com.nz';
const userPassword = 'precioso';

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

  arrancaSesion(req, res) {
    if (!req.body.email || !req.body.password) {
      console.log(req.session);
      return res.json({ error: 'login fallido' });
    } else if (
      req.body.email === userEmail &&
      req.body.password === userPassword
    ) {
      req.session.email = req.body.email;
      req.session.loggedIn = true;
      console.log(req.session);
      return res.json({
        email: req.session.email,
        loggedIn: req.session.loggedIn,
      });
    } else {
      console.log(req.session);
      return res.json({ error: 'Usuario o password incorrecto' });
    }
  }

  terminaSesion(req, res) {
    console.log(req.session);
    req.session.destroy();
    console.log('deslogueado');
  }
}

export default new MensajesController();
