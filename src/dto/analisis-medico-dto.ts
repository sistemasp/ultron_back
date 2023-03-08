import { Document } from "mongoose";

export class AnalisisMedicoDto extends Document {
    readonly nombre : string;
    readonly has_description: boolean;
    readonly is_active: boolean;
}