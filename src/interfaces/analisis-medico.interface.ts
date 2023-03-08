import { Document } from "mongoose";

export interface AnalisisMedicoI extends Document {
    nombre : string;
    has_description: boolean;
    is_active: boolean;
}