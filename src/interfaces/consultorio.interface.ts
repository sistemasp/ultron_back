import { EmpleadoI } from "./empleado.interface";
import { PacienteI } from "./paciente.interface";
import { SucursalI } from "./sucursal.interface";
import { ServicioI } from "./servicio.interface";
import { Document } from "mongoose";

export interface ConsultorioI extends Document  {
    nombre: string;
    dermatologo: EmpleadoI;
    paciente: PacienteI;
    tipo_servicio: ServicioI;
    servicio: string;
    sucursal: SucursalI;
    disponible: Boolean;
    consultaId: string;
}