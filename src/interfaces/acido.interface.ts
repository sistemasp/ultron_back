import { Document } from "mongoose";

export interface AcidoI extends Document {
    nombre : String;
    is_active: Boolean;
}