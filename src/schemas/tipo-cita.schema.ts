import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TipoCitaSchema = new Schema({
    nombre : { type: String },
});