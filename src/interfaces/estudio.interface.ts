import { Document } from "mongoose";
import { AnalisisMedicoI } from "./analisis-medico.interface";
import { EmpleadoI } from "./empleado.interface";
import { PacienteI } from "./paciente.interface";
import { SucursalI } from "./sucursal.interface";

export interface EstudioI extends Document {
    create_date: Date;
    folio: string;
    consultaId: string;
    paciente: PacienteI;
    dermatologo: EmpleadoI;
    sucursal: SucursalI;
    analisis_medicos : AnalisisMedicoI[];
    fecha_proxima_consulta: string;
}