import { Document } from "mongoose";
import { ServicioI } from "./servicio.interface";
import { TratamientoI } from "./tratamiento.interface";

export interface AreaI extends Document {
    nombre: string;
    servicio: ServicioI;
    tratamiento: TratamientoI;
    tiempo: string;
    precio_ma: string;
    precio_rd: string;
    precio_oc: string;
    precio_fe: string;
    comision_derivado: string;
    comision_revisado: string;
    comision_realizado: string;
    comision_derivado_ma: string;
    comision_revisado_ma: string;
    comision_realizado_ma: string;
    comision_derivado_rd: string;
    comision_revisado_rd: string;
    comision_realizado_rd: string;
    iva : Boolean;
}