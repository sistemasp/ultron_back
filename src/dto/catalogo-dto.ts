import { Document } from "mongoose";

export class CatalogoDto extends Document {
    readonly nombre: string;
    readonly is_active: boolean;
    readonly columns: [];
}