import { Document } from "mongoose";

export class CuracionAreaDto extends Document {
    readonly nombre: string;
    readonly is_active: boolean;
}