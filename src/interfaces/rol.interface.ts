import { Document } from "mongoose";

export interface RolI extends Document {
    nombre : string;
    permisos : string[];
}