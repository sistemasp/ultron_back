import * as mongoose from 'mongoose';

const constMongoose = require('mongoose');
const Schema = mongoose.Schema;

export const ProductoComercialSchema = new Schema({
    nombre: { type: String },
    laboratorio: { type: constMongoose.ObjectId, ref: 'Laboratorio' },
    is_active: { type: Boolean, default: true },
});