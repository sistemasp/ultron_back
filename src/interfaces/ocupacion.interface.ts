import { Document } from "mongoose";

export interface OcupacionI extends Document {
    nombre : string;
    is_active: Boolean;
}