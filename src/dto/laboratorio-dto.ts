import { Document } from "mongoose";

export class LaboratorioDto extends Document {
    readonly nombre : String;
    readonly is_active: Boolean;
}