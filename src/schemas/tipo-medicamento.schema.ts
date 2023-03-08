import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TipoMedicamentoSchema = new Schema({
    nombre : { type: String },
});