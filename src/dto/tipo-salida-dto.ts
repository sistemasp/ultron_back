import { Document } from "mongoose";

export class TipoSalidaDto extends Document {
    readonly nombre : String;
    readonly confirmacion: Boolean;
}