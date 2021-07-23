import { Document } from "mongoose";
import { PacienteDto } from "./paciente-dto";
import { ServicioDto } from "./servicio-dto";
import { SucursalDto } from "./sucursal-dto";

export class SesionAnticipadaDto extends Document {
    readonly fecha_pago: Date;
    readonly fecha_asistencia: Date;
    readonly sucursal: SucursalDto;
    readonly paciente: PacienteDto;
    readonly servicio: ServicioDto;
    readonly tratamientos: [];
    readonly precio: String;
    readonly total: String;
    readonly observaciones: String;
}