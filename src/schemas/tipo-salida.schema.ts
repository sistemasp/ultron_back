import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TipoSalidaSchema = new Schema({
    nombre : { type: String },
    confirmacion : { type: Boolean, default: false },
});