import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
const constMongoose = require('mongoose');

export const CuracionTipoSchema = new Schema({
    nombre : { type: String },
    curacion_nombre: { type: constMongoose.ObjectId, ref: 'CuracionNombre' },
    is_active: { type: Boolean, default: true },
});