import { Document } from "mongoose";

export interface TipoEntradaI extends Document {
    nombre : String;
    is_active : Boolean;
    is_visible : Boolean;
}