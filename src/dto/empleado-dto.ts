import { Document } from "mongoose";
import { EsquemaDto } from "./esquema-dto";
import { RolDto } from "./rol-dto";

export class EmpleadoDto extends Document {
    readonly nombre: string;
    readonly numero_empleado: string;
    readonly telefono: string;
    readonly password: string;
    readonly rol: RolDto;
    readonly color: string;
    readonly dgp: string;
    readonly ae: string;
    readonly dpej: string;
    readonly fecha_entrada: Date;
    readonly fecha_baja: Date;
    readonly disponible: boolean;
    readonly pago_completo: boolean;
    readonly porcentaje: string;
    readonly porcentaje_estetica: string;
    readonly porcentaje_reconsulta: string;
    readonly esquema: EsquemaDto;
    readonly is_active: boolean;
    readonly super_admin: boolean;
    readonly has_receta: boolean;
}