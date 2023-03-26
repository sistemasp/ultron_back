import * as mongoose from 'mongoose';

const constMongoose = require('mongoose');
const Schema = mongoose.Schema;

export const EstudioSchema = new Schema({
    create_date: { type: Date, default: new Date() },
    folio: { type: String },
    consultaId: { type: String },
    paciente: { type: constMongoose.ObjectId, ref: 'Paciente' },
    dermatologo: { type: constMongoose.ObjectId, ref: 'Empleado' },
    sucursal: { type: constMongoose.ObjectId, ref: 'Sucursal' },
    analisis_medicos: [{ type: constMongoose.ObjectId, ref: 'AnalisisMedico' }],
    fecha_proxima_consulta: { type: String },
});