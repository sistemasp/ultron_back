import { Document } from "mongoose";

export interface EspecialidadI extends Document {
    nombre : String;
    is_active: Boolean;
}