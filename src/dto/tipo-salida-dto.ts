import { Document } from "mongoose";

export class TipoSalidaDto extends Document {
    readonly nombre : string;
    readonly confirmacion: boolean;
    readonly is_active : boolean;
    readonly is_visible : boolean;
}