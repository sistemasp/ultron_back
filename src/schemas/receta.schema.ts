import * as mongoose from 'mongoose';

const constMongoose = require('mongoose');
const Schema = mongoose.Schema;

export const RecetaSchema = new Schema({
    create_date: { type: Date, default: new Date() },
    consultaId: { type: String },
    paciente: { type: constMongoose.ObjectId, ref: 'Paciente' },
    dermatologo: { type: constMongoose.ObjectId, ref: 'Empleado' },
    sucursal: { type: constMongoose.ObjectId, ref: 'Sucursal' },
    productos: [{}],
});