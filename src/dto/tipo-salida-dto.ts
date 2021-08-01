import { Document } from "mongoose";

export class TipoSalidaDto extends Document {
    readonly nombre : String;
    readonly confirmacion: Boolean;
    readonly is_active : Boolean;
    readonly is_visible : Boolean;
}