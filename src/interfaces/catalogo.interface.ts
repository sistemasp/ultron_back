import { Document } from "mongoose";

export interface CatalogoI extends Document {
    nombre: String;
    is_active: Boolean;
    columns: [];
}