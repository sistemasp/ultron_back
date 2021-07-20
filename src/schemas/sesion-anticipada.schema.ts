import * as mongoose from 'mongoose';

const constMongoose = require('mongoose');
const Schema = mongoose.Schema;

export const SesionAnticipadaSchema = new Schema({
    fecha_pago: { type: Date },
    fecha_asistencia: { type: Date },
    sucursal: { type: constMongoose.ObjectId, ref: 'Sucursal' },
    paciente: { type: constMongoose.ObjectId, ref: 'Paciente' },
    servicio: { type: constMongoose.ObjectId, ref: 'Servicio' },
    tratamiento: { type: constMongoose.ObjectId, ref: 'Tratamiento' },
    areas: [{ type: constMongoose.ObjectId, ref: 'Area' }],
    observaciones: { type: String },
});