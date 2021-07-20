import { Document } from "mongoose";
import { AreaDto } from "./area-dto";
import { PacienteDto } from "./paciente-dto";
import { ServicioDto } from "./servicio-dto";
import { SucursalDto } from "./sucursal-dto";
import { TratamientoDto } from "./tratamiento-dto";

export class SesionAnticipadaDto extends Document {
    readonly fecha_pago: Date;
    readonly fecha_asistencia: Date;
    readonly sucursal: SucursalDto;
    readonly paciente: PacienteDto;
    readonly servicio: ServicioDto;
    readonly tratamiento: TratamientoDto;
    readonly areas: AreaDto[];
    readonly precio: String;
    readonly total: String;
    readonly observaciones: String;
}