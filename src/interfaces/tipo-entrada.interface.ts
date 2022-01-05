import { Document } from "mongoose";

export interface TipoEntradaI extends Document {
    nombre : string;
    is_active : Boolean;
    is_visible : Boolean;
}