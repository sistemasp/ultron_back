import { Document } from "mongoose";

export interface LaboratorioI extends Document {
    nombre : string;
    is_active: boolean;
}