import { Document } from "mongoose";

export class TipoEntradaDto extends Document {
    readonly nombre : string;
    readonly is_active : Boolean;
    readonly is_visible : Boolean;
}