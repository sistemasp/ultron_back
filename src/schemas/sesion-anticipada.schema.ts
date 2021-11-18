import * as mongoose from 'mongoose';

const constMongoose = require('mongoose');
const Schema = mongoose.Schema;

export const SesionAnticipadaSchema = new Schema({
    fecha_pago: { type: Date },
    fecha_asistencia: { type: Date },
    sucursal: { type: constMongoose.ObjectId, ref: 'Sucursal' },
    paciente: { type: constMongoose.ObjectId, ref: 'Paciente' },
    frecuencia: { type: constMongoose.ObjectId, ref: 'Frecuencia' },
    dermatologo: { type: constMongoose.ObjectId, ref: 'Empleado' },
    tipo_cita: { type: constMongoose.ObjectId, ref: 'TipoCita' },
    servicio: { type: constMongoose.ObjectId, ref: 'Servicio' },
    tratamientos: [{}],
    precio: { type: String },
    descuento_clinica: { type: String },
    porcentaje_descuento_clinica: { type: String },
    total: { type: String },
    observaciones: { type: String },
    pagado: { type: Boolean, default: false },
    numero_sesion: { type: String },
    factura: { type: constMongoose.ObjectId, ref: 'Factura' },
    pagos: [{ type: constMongoose.ObjectId, ref: 'Pago' }],
    recepcionista: { type: constMongoose.ObjectId, ref: 'Empleado' },
    consecutivo: { type: Number },
    materiales: [],
    biopsias: [{ type: constMongoose.ObjectId, ref: 'Biopsia' }],
});