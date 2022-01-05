import { Document } from "mongoose";

export interface StatusI extends Document {
    nombre : string;
    color : string;
    confirmacion: Boolean;
    visible: Boolean;
}