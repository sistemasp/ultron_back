import { Document } from "mongoose";

export interface UsoCfdiI extends Document {
    clave : string;
    descripcion : string;
}