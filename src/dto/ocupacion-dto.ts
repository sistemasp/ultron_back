import { Document } from "mongoose";

export class OcupacionDto extends Document {
    readonly nombre : String;
    readonly is_active: Boolean;
}