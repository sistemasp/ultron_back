import * as mongoose from 'mongoose';

const constMongoose = require('mongoose');
const Schema = mongoose.Schema;

export const PagoAnticipadoSchema = new Schema({
    fecha_pago: { type: Date },
    sucursal: { type: constMongoose.ObjectId, ref: 'Sucursal' },
    paciente: { type: constMongoose.ObjectId, ref: 'Paciente' },
    pagos: [{ type: constMongoose.ObjectId, ref: 'Pago' }],
    sesionesAnticipadas: [{ type: constMongoose.ObjectId, ref: 'SesionAnticipada' }],
    precio: { type: String },
    total: { type: String },
    observaciones:{ type: String },
});