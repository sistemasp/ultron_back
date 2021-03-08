import * as mongoose from 'mongoose';

const constMongoose = require('mongoose');
const Schema = mongoose.Schema;

export const PacienteSchema = new Schema({
    create_date: { type : Date },
    nombres: { type: String },
    apellidos: { type: String },
    fecha_nacimiento: { type: String },
    telefono: { type: String },
    email: { type: String },
    sexo: { type: constMongoose.ObjectId, ref: 'Sexo' },
    ocupacion: { type: String },
    alerta_medica: { type: Boolean, default: false },
    domicilio : { type: String },
    numero_exterior : { type: String },
    numero_interior : { type: String },
    colonia : { type: String },
    ciudad : { type: String },
    municipio : { type: String },
    estado : { type: String },
    codigo_postal : { type: String },
});