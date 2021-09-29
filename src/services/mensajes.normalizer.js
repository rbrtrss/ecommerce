import { normalize, schema } from 'normalizr';
import mensajes from '../models/mensajes.model';

const nMensajes = async () => {
  const sinprocesar = await mensajes.find();
  // const email = new schema.Entity('email');
  //   const mensaje = new schema.Entity('mensaje', {}, { idAttribute: '_id' });
  const usuario = new schema.Entity('author', {}, { idAttribute: 'email' });
  // const usuario = new schema.Entity('author');
  // console.log(usuario);
  // const texto = new schema.Entity('text');
  const mensaje = new schema.Entity(
    'mensaje',
    {
      author: usuario,
    },
    { idAttribute: '_id' }
  );
  // const mensaje = { mensaje: { author: usuario } };
  // const alltogethernow = new schema.Entity('mensajes', {
  //   author: usuario,
  //   textos: [mensaje],
  // });
  return normalize(sinprocesar, [mensaje]);
  // return sinprocesar;
  // return normalize(sinprocesar, [listaMensaje]);
};

// const rawMensajes = {
//   id: '123',
//   author: {
//     id: '1',
//     name: 'Paul',
//   },
//   title: 'My awesome blog post',
//   comments: [
//     {
//       id: '324',
//       commenter: {
//         id: '2',
//         name: 'Nicole',
//       },
//     },
//   ],
// };
// //   const author = new schema.Entity('author', {}, { idAttribute: 'email' });
// //   const mensaje = new schema.Entity('text');
// //   return normalize(rawMensajes, mensaje);

// // Define a users schema
// const user = new schema.Entity('author');

// // Define your comments schema
// const comment = new schema.Entity('comments', {
//   commenter: user,
// });

// // Define your article
// const article = new schema.Entity('articles', {
//   author: user,
//   comments: [comment],
// });

// const normalizador = async () => {
//   return normalize(rawMensajes, article);
// };

export default nMensajes;
