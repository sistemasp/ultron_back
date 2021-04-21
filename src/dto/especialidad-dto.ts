import { Document } from "mongoose";

export class EspecialidadDto extends Document {
    readonly nombre: String;
    readonly is_active: Boolean;
}