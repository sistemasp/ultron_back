import { Document } from "mongoose";

export class LaboratorioDto extends Document {
    readonly nombre : string;
    readonly is_active: boolean;
}