import { Document } from "mongoose";

export class EsquemaDto extends Document {
    readonly nombre: string;
    readonly descripcion: string;
    readonly porcentaje_consulta: string;
    readonly porcentaje_cirugias: string;
    readonly porcentaje_consulta_privada: string;
    readonly porcentaje_dermocosmetica: string;
    readonly porcentaje_reconsulta: string;
    readonly porcentaje_laser: string;
    readonly create_date: Date;
    readonly is_active: Boolean;
}