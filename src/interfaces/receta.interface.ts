import { Document } from "mongoose";
import { EmpleadoI } from "./empleado.interface";
import { PacienteI } from "./paciente.interface";
import { SucursalI } from "./sucursal.interface";

export interface RecetaI extends Document {
    create_date: Date;
    folio: string;
    consultaId: string;
    paciente: PacienteI;
    dermatologo: EmpleadoI;
    sucursal: SucursalI;
    productos : [];
    fecha_proxima_consulta: string;
}