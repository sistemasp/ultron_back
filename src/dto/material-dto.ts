import { Document } from "mongoose";

export class MaterialDto extends Document {
    readonly nombre : string;
    readonly iva : boolean;
}