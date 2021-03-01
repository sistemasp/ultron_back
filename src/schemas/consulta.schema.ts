import * as mongoose from 'mongoose';

const constMongoose = require('mongoose');
const Schema = mongoose.Schema;

export const ConsultaSchema = new Schema({
    create_date: { type: Date },
    hora_aplicacion: { type: Date },
    folio: { type: String },
    fecha_hora: { type: Date },
    paciente: { type: constMongoose.ObjectId, ref: 'Paciente' },
    dermatologo: { type: constMongoose.ObjectId, ref: 'Empleado' },
    quien_agenda: { type: constMongoose.ObjectId, ref: 'Empleado' },
    tipo_cita: { type: constMongoose.ObjectId, ref: 'TipoCita' },
    medio: { type: constMongoose.ObjectId, ref: 'Medio' },
    quien_confirma_llamada: { type: constMongoose.ObjectId, ref: 'Empleado' },
    quien_confirma_asistencia: { type: constMongoose.ObjectId, ref: 'Empleado' },
    status: { type: constMongoose.ObjectId, ref: 'Status' },
    motivos: { type: String },
    precio: { type: String },
    total: { type: String },
    pago_dermatologo: { type: String },
    hora_llegada: { type: String },
    hora_atencion: { type: String },
    hora_salida: { type: String },
    tiempo: { type: String },
    observaciones: { type: String },
    sucursal: { type: constMongoose.ObjectId, ref: 'Sucursal' },
    promovendedor: { type: constMongoose.ObjectId, ref: 'Empleado' },
    factura: { type: constMongoose.ObjectId, ref: 'Factura' },
    pagado: { type: Boolean, default: false },
    pagos: [{ type: constMongoose.ObjectId, ref: 'Pago' }],
    consecutivo: { type: Number },
    frecuencia: { type: constMongoose.ObjectId, ref: 'Frecuencia' },
    servicio: { type: constMongoose.ObjectId, ref: 'Servicio' },
    producto: { type: constMongoose.ObjectId, ref: 'Producto' },
    porcentaje_descuento_clinica: { type: String },
    has_descuento_dermatologo: { type: Boolean, default: false },
    descuento_clinica: { type: String },
    descuento_dermatologo: { type: String },
    forma_pago: { type: constMongoose.ObjectId, ref: 'FormaPago' },
});