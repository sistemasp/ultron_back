import { Document } from "mongoose";

export interface CuracionAreaI extends Document {
    nombre: string;
    is_active: boolean;
}