import { Document } from "mongoose";

export class OcupacionDto extends Document {
    readonly nombre : string;
    readonly is_active: Boolean;
}