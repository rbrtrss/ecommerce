import express from 'express';
import mensajesController from '../controller/mensajes.controller';

const router = express.Router();

router.get('/', mensajesController.muestraTodos);

router.post('/', mensajesController.addNuevoMensaje);

router.get('/normalizados', mensajesController.muestraNormalizado);

export default router;
