import * as mongoose from 'mongoose';

const constMongoose = require('mongoose');
const Schema = mongoose.Schema;

export const MaterialEsteticaSchema = new Schema({
    nombre : { type: String },
    precio : { type: String },
    tipo_estetica : { type: constMongoose.ObjectId, ref: 'TipoEstetica'},
    producto: { type: constMongoose.ObjectId, ref: 'Producto' },
    iva: { type: Boolean, default: false },
    is_active: { type: Boolean, default: true },
});