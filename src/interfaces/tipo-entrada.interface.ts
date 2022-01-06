import { Document } from "mongoose";

export interface TipoEntradaI extends Document {
    nombre : string;
    is_active : boolean;
    is_visible : boolean;
}