import express from 'express';
import http from 'http';
import path from 'path';
import productos from '../controller/productos.controller';
import mensajes from '../models/mensajes.model';
import mensajesRouter from '../routes/mensajes.router';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../views/index.html'));
});

app.use('/mensajes', mensajesRouter);

io.on('connection', (socket) => {
  console.log(`Usuario conectado en ${socket.id}`);

  socket.on('addedProducto', (prd) => {
    productos.add(prd);
    console.log(prd);
  });

  socket.on('message', async (msg) => {
    mensajes.add(msg);
    // console.log(JSON.stringify(await normalizador()));
    // io.emit('message', { sender: 'yo', msg });
    io.emit('message', await mensajes.find());
  });

  socket.on('loggedUser', (usr) => {
    console.log(usr);
  });
});

export default server;
