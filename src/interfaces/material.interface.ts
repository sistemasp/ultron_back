import { Document } from "mongoose";

export interface MaterialI extends Document {
    nombre : string;
    iva : boolean;
}