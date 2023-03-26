import { Document } from "mongoose";
import { EsquemaI } from "./esquema.interface";
import { RolI } from "./rol.interface";

export interface EmpleadoI extends Document {
    nombre: string;
    numero_empleado: string;
    telefono: string;
    password: string;
    rol: RolI;
    color: string;
    dgp: string;
    ae: string;
    dpej: string;
    fecha_entrada: Date;
    fecha_baja: Date;
    disponible: boolean;
    pago_completo: boolean;
    porcentaje: string;
    porcentaje_estetica: string;
    porcentaje_reconsulta: string;
    esquema: EsquemaI;
    is_active: boolean;
    super_admin: boolean;
}