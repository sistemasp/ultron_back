import { Document } from "mongoose";
import { ServicioDto } from "./servicio-dto";

export class ProductoDto extends Document {
    readonly nombre : string;
    readonly servicio : ServicioDto;
}