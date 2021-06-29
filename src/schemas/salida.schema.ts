import * as mongoose from 'mongoose';

const constMongoose = require('mongoose');
const Schema = mongoose.Schema;

export const SalidaSchema = new Schema({
    create_date: { type: Date, default: new Date() },
    turno: { type: String },
    hora_aplicacion: { type: Date, default: new Date() },
    recepcionista: { type: constMongoose.ObjectId, ref: 'Empleado' },
    concepto: { type: String },
    descripcion: { type: String },
    cantidad: { type: String },
    retencion: { type: String },
    tipo_salida: { type: constMongoose.ObjectId, ref: 'TipoSalida' },
    sucursal: { type: constMongoose.ObjectId, ref: 'Sucursal' },
    forma_pago: { type: constMongoose.ObjectId, ref: 'FormaPago' },
});