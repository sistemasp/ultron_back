import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const CuracionMotivoSchema = new Schema({
    nombre : { type: String },
    is_active: { type: Boolean, default: true },
});