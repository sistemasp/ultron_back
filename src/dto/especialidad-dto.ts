import { Document } from "mongoose";

export class EspecialidadDto extends Document {
    readonly nombre: string;
    readonly is_active: boolean;
}