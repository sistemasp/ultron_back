import { Document } from "mongoose";

export class AcidoDto extends Document {
    readonly nombre: string;
    readonly is_active: boolean;
}