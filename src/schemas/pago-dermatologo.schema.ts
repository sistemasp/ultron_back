import * as mongoose from 'mongoose';

const constMongoose = require('mongoose');
const Schema = mongoose.Schema;

export const PagoDermatologoSchema = new Schema({
    create_date: { type: Date, default: new Date() },
    fecha_pago: { type: Date },
    dermatologo: { type: constMongoose.ObjectId, ref: 'Empleado' },
    consultas: [{ type: constMongoose.ObjectId, ref: 'Consulta' }],
    cirugias: [{ type: constMongoose.ObjectId, ref: 'Cirugia' }],
    faciales: [{ type: constMongoose.ObjectId, ref: 'Facial' }],
    dermapens: [{ type: constMongoose.ObjectId, ref: 'Dermapens' }],
    aparatologias: [{ type: constMongoose.ObjectId, ref: 'Aparatologia' }],
    esteticas: [{ type: constMongoose.ObjectId, ref: 'Estetica' }],
    sucursal: { type: constMongoose.ObjectId, ref: 'Sucursal' },
    turno: { type: String },
    retencion: { type: String },
    total: { type: String },
    pagado: Boolean,
});