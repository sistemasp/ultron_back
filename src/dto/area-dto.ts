import { Document } from "mongoose";
import { ServicioDto } from "./servicio-dto";
import { TratamientoDto } from "./tratamiento-dto";

export class AreaDto extends Document {
    readonly nombre : string;
    readonly servicio : ServicioDto;
    readonly tratamiento : TratamientoDto;
    readonly tiempo : string;
    readonly precio_ma : string;
    readonly precio_rd : string;
    readonly precio_oc : string;
    readonly precio_fe : string;
    readonly comision_derivado : string;
    readonly comision_revisado : string;
    readonly comision_realizado : string;
    readonly comision_derivado_ma : string;
    readonly comision_revisado_ma : string;
    readonly comision_realizado_ma : string;
    readonly comision_derivado_rd : string;
    readonly comision_revisado_rd : string;
    readonly comision_realizado_rd : string;
    readonly iva : boolean;
}