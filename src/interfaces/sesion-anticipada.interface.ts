import { Document } from "mongoose";
import { PacienteI } from "./paciente.interface";
import { ServicioI } from "./servicio.interface";
import { SucursalI } from "./sucursal.interface";

export interface SesionAnticipadaI extends Document {
    fecha_pago: Date;
    fecha_asistencia: Date;
    sucursal: SucursalI;
    paciente: PacienteI;
    servicio: ServicioI;
    tratamientos: [];
    precio: String;
    total: String;
    observaciones: String;
}