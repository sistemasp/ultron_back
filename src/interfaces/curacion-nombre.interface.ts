import { Document } from "mongoose";

export interface CuracionNombreI extends Document {
    nombre : string;
    is_active: boolean;
}