import { Document } from "mongoose";

export interface EspecialidadI extends Document {
    nombre : string;
    is_active: Boolean;
}