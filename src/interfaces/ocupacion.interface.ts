import { Document } from "mongoose";

export interface OcupacionI extends Document {
    nombre : String;
    is_active: Boolean;
}