import * as mongoose from 'mongoose';

const constMongoose = require('mongoose');
const Schema = mongoose.Schema;

export const PagoAnticipadoSchema = new Schema({
    fecha_pago: { type: Date },
    sucursal: { type: constMongoose.ObjectId, ref: 'Sucursal' },
    paciente: { type: constMongoose.ObjectId, ref: 'Paciente' },
    dermatologo: { type: constMongoose.ObjectId, ref: 'Empleado' },
    tipo_cita: { type: constMongoose.ObjectId, ref: 'TipoCita' },
    pagos: [{ type: constMongoose.ObjectId, ref: 'Pago' }],
    sesiones_anticipadas: [{ type: constMongoose.ObjectId, ref: 'SesionAnticipada' }],
    precio: { type: String },
    total: { type: String },
    factura: { type: Boolean, default: false },
    observaciones:{ type: String },
    servicio: { type: constMongoose.ObjectId, ref: 'Servicio' },
});