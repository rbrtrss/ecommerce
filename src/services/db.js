import mongoose from 'mongoose';

console.log(`${process.env.ATLAS_URI}`);
// const db = mongoose.connect('mongodb://127.0.0.1:27017/tarea23');
const db = mongoose.connect(`${process.env.ATLAS_URI}`);

export default db;
