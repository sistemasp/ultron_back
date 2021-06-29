import * as mongoose from 'mongoose';

const constMongoose = require('mongoose');
const Schema = mongoose.Schema;

export const EntradaSchema = new Schema({
    create_date: { type: Date, default: new Date() },
    hora_aplicacion: { type: Date, default: new Date() },
    turno: { type: String },
    recepcionista: { type: constMongoose.ObjectId, ref: 'Empleado' },
    concepto: { type: String },
    cantidad: { type: String },
    tipo_entrada: { type: constMongoose.ObjectId, ref: 'TipoEntrada' },
    sucursal: { type: constMongoose.ObjectId, ref: 'Sucursal' },
    forma_pago: { type: constMongoose.ObjectId, ref: 'FormaPago' },
    pago_anticipado: { type: Boolean, default: false },
});