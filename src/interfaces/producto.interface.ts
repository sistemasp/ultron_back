import { Document } from "mongoose";
import { ServicioI } from "./servicio.interface";

export interface ProductoI extends Document {
    nombre: string;
    servicio: ServicioI;
}