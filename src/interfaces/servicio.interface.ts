import { Document } from "mongoose";

export interface ServicioI extends Document {
    nombre : string;
    clave : string;
    color : string;
    is_active : boolean;
    is_visible : boolean;
}