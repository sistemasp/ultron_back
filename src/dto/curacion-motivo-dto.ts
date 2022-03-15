import { Document } from "mongoose";

export class CuracionMotivoDto extends Document {
    readonly nombre : string;
    readonly is_active: boolean;
}