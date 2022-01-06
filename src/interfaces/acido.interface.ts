import { Document } from "mongoose";

export interface AcidoI extends Document {
    nombre : string;
    is_active: boolean;
}