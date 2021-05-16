import * as mongoose from 'mongoose';

const constMongoose = require('mongoose');
const Schema = mongoose.Schema;

export const CitaSchema = new Schema({
    servicio: { type: constMongoose.ObjectId, ref: 'Servicio' },
    fecha_hora : { type : Date },
    paciente : { type: constMongoose.ObjectId, ref: 'Paciente'},
    cita : { type: constMongoose.ObjectId, ref: 'Cta'},
    medico : { type: constMongoose.ObjectId, ref: 'Empleado'},
    tratamientos : [{ type: constMongoose.ObjectId, ref: 'Tratamiento'}],
    numero_sesion : { type: String },
    quien_agenda : { type: constMongoose.ObjectId, ref: 'Empleado'},
    tipo_cita : { type: constMongoose.ObjectId, ref: 'TipoCita'},
    quien_confirma : { type: constMongoose.ObjectId, ref: 'Empleado'},
    status : { type: constMongoose.ObjectId, ref: 'Status'},
    motivos : { type: String },
    precio : { type: String },
    tiempo : { type: String },
    observaciones : { type: String },
    sucursal : { type: constMongoose.ObjectId, ref: 'Sucursal'},
    promovendedor : { type: constMongoose.ObjectId, ref: 'Empleado'},
    cosmetologa : { type: constMongoose.ObjectId, ref: 'Empleado'},
});