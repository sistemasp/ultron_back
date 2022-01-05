import { Document } from "mongoose";
import { ServicioI } from "./servicio.interface";

export interface TratamientoI extends Document {
    nombre: string;
    servicio: ServicioI;
}