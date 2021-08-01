import { Document } from "mongoose";

export class TipoEntradaDto extends Document {
    readonly nombre : String;
    readonly is_active : Boolean;
    readonly is_visible : Boolean;
}