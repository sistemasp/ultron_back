import { Document } from "mongoose";

export interface TipoSalidaI extends Document {
    nombre : string;
    confirmacion: boolean;
    is_active : boolean;
    is_visible : boolean;
}