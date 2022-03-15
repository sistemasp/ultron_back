import { Document } from "mongoose";

export class CuracionNombreDto extends Document {
    readonly nombre : string;
    readonly is_active: boolean;
}