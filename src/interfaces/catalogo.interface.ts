import { Document } from "mongoose";

export interface CatalogoI extends Document {
    nombre: string;
    is_active: boolean;
    columns: [];
}