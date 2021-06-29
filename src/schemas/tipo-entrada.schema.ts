import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TipoEntradaSchema = new Schema({
    nombre : String
});