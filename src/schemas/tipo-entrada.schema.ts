import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TipoEntradaSchema = new Schema({
    nombre: { type: String },
    is_active: { type: Boolean, default: true },
    is_visible: { type: Boolean, default: true },
});