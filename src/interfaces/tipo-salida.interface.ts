import { Document } from "mongoose";

export interface TipoSalidaI extends Document {
    nombre : String;
    confirmacion: Boolean;
    is_active : Boolean;
    is_visible : Boolean;
}