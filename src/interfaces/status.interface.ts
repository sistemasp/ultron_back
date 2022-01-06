import { Document } from "mongoose";

export interface StatusI extends Document {
    nombre : string;
    color : string;
    confirmacion: boolean;
    visible: boolean;
}