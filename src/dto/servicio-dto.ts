import { Document } from "mongoose";

export class ServicioDto extends Document {
    readonly nombre : string;
    readonly clave : string;
    readonly color : string;
    readonly is_active : boolean;
    readonly is_visible : boolean;
}