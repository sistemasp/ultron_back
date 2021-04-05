import { Document } from "mongoose";

export class CatalogoDto extends Document {
    readonly nombre: String;
    readonly is_active: Boolean;
    readonly columns: [];
}