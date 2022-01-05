import { Document } from "mongoose";
import { ServicioDto } from "./servicio-dto";

export class TratamientoDto extends Document {
    readonly nombre : string;
    readonly servicio : ServicioDto;
}