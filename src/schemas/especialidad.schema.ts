import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const EspecialidadSchema = new Schema({
    nombre : { type: String },
    is_active: { type: Boolean, default: true },
});