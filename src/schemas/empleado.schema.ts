import * as mongoose from 'mongoose';

const constMongoose = require('mongoose');
const Schema = mongoose.Schema;

export const EmpleadoSchema = new Schema({
    nombre: { type: String },
    numero_empleado: { type: String },
    telefono: { type: String },
    password: { type: String },
    rol: { type: constMongoose.ObjectId, ref: 'Rol' },
    color: { type: String },
    dgp:  { type: String },
    ae:  { type: String },
    dpej:  { type: String },
    fecha_entrada: { type: Date },
    fecha_baja: { type: Date },
    disponible: { type: Boolean, default: true },
    pago_completo: { type: Boolean, default: false },
    porcentaje: { type: String },
    porcentaje_estetica: { type: String },
    porcentaje_reconsulta: { type: String },
    esquema: { type: constMongoose.ObjectId, ref: 'Esquema' },
    is_active: { type: Boolean, default: true },
    super_admin: { type: Boolean, default: false },
    has_receta: { type: Boolean, default: false },
});