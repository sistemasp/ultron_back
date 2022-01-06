import { Document } from "mongoose";

export class StatusDto extends Document {
    readonly nombre : string;
    readonly color : string;
    readonly confirmacion: boolean;
    readonly visible: boolean;
}