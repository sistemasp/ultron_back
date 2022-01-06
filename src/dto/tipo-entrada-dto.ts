import { Document } from "mongoose";

export class TipoEntradaDto extends Document {
    readonly nombre : string;
    readonly is_active : boolean;
    readonly is_visible : boolean;
}