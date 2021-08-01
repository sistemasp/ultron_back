import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TipoSalidaSchema = new Schema({
    nombre : { type: String },
    confirmacion : { type: Boolean, default: false },
    is_active: { type: Boolean, default: true },
    is_visible: { type: Boolean, default: true },
});