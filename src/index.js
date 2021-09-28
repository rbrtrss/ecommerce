import server from './services/server';
import db from './services/db';

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Server UP in port: ${PORT}`);
});
