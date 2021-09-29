import { normalize, schema } from 'normalizr';
import mensajes from '../models/mensajes.model';

const nMensajes = async () => {
  const sinprocesar = await mensajes.find();
  const usuario = new schema.Entity('author', {}, { idAttribute: 'email' });
  const mensaje = new schema.Entity(
    'mensaje',
    {
      author: usuario,
    },
    { idAttribute: '_id' }
  );
  return normalize(sinprocesar, [mensaje]);
};

export default nMensajes;
