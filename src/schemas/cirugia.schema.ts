import * as mongoose from 'mongoose';

const constMongoose = require('mongoose');
const Schema = mongoose.Schema;

export const CirugiaSchema = new Schema({
    create_date: { type: Date, default: new Date() },
    hora_aplicacion: { type: Date },
    fecha_hora: { type: Date },
    consultaId: { type: String },
    paciente: { type: constMongoose.ObjectId, ref: 'Paciente' },
    dermatologo: { type: constMongoose.ObjectId, ref: 'Empleado' },
    quien_agenda: { type: constMongoose.ObjectId, ref: 'Empleado' },
    quien_confirma: { type: constMongoose.ObjectId, ref: 'Empleado' },
    tipo_cita: { type: constMongoose.ObjectId, ref: 'TipoCita' },
    sucursal: { type: constMongoose.ObjectId, ref: 'Sucursal' },
    status: { type: constMongoose.ObjectId, ref: 'Status' },
    consecutivo: { type: Number },
    pagado: { type: Boolean, default: false },
    precio: { type: String },
    pago_dermatologo: { type: String },
    pago_patologo: { type: String },
    total: { type: String },
    total_aplicacion: { type: String },
    hora_llegada: { type: String },
    hora_atencion: { type: String },
    hora_salida: { type: String },
    materiales: [],
    biopsias: [{ type: constMongoose.ObjectId, ref: 'Biopsia' }],
    hasBiopsia: { type: Boolean, default: false },
    costo_biopsias: { type: String },
    servicio: { type: constMongoose.ObjectId, ref: 'Servicio' },
    factura: { type: constMongoose.ObjectId, ref: 'Factura' },
    pagos: [{ type: constMongoose.ObjectId, ref: 'Pago' }],
    producto: { type: constMongoose.ObjectId, ref: 'Producto' },
    frecuencia: { type: constMongoose.ObjectId, ref: 'Frecuencia' },
    porcentaje_descuento_clinica: { type: String },
    has_descuento_dermatologo: { type: Boolean, default: false },
    descuento_clinica: { type: String },
    descuento_dermatologo: { type: String },
    forma_pago: { type: constMongoose.ObjectId, ref: 'FormaPago' },
    medio: { type: constMongoose.ObjectId, ref: 'Medio' },
});
