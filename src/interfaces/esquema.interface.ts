import { Document } from "mongoose";

export interface EsquemaI extends Document {
    nombre: string;
    descripcion: string;
    porcentaje_consulta: string;
    porcentaje_consulta_privada: string;
    porcentaje_cirugias: string;
    porcentaje_dermocosmetica: string;
    porcentaje_reconsulta: string;
    porcentaje_laser: string;
    create_date: Date;
    is_active: boolean;
}