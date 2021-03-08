import { Document } from "mongoose";

export interface LaboratorioI extends Document {
    nombre : String;
    is_active: Boolean;
}