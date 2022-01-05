import { Document } from "mongoose";
import { EmpleadoDto } from "./empleado-dto";
import { ServicioDto } from "./servicio-dto";
import { StatusDto } from "./status-dto";

export class CancelacionDto extends Document {
    readonly supervisor: EmpleadoDto;
    readonly recepcionista: EmpleadoDto;
    readonly create_date: Date;
    readonly tipo_servicio: ServicioDto;
    readonly servicio: string;
    readonly hora_llegada: string;
    readonly hora_salida: string;
    readonly status: StatusDto;
}