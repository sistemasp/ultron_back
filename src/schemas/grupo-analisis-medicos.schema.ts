import * as mongoose from 'mongoose';

const constMongoose = require('mongoose');
const Schema = mongoose.Schema;

export const GrupoAnalisisMedicosSchema = new Schema({

    analisis_medicos: [{ type: constMongoose.ObjectId, ref: 'AnalisisMedico' }],
    is_active: { type: Boolean },
});