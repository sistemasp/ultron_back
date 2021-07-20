import { Document } from "mongoose";
import { AreaI } from "./area.interface";
import { PacienteI } from "./paciente.interface";
import { ServicioI } from "./servicio.interface";
import { SucursalI } from "./sucursal.interface";
import { TratamientoI } from "./tratamiento.interface";

export interface SesionAnticipadaI extends Document {
    fecha_pago: Date;
    fecha_asistencia: Date;
    sucursal: SucursalI;
    paciente: PacienteI;
    servicio: ServicioI;
    tratamiento: TratamientoI;
    areas: AreaI[];
    precio: String;
    total: String;
    observaciones: String;
}