import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const AnalisisMedicoSchema = new Schema({
    nombre : { type: String },
    has_description: { type: Boolean, default: true },
    is_active: { type: Boolean, default: true }
});