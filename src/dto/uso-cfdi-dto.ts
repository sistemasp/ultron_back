import { Document } from "mongoose";

export class UsoCfdiDto extends Document {
    readonly clave : string;
    readonly descripcion : string;
}