import { Document } from "mongoose";

export interface CuracionMotivoI extends Document {
    nombre : string;
    is_active: boolean;
}