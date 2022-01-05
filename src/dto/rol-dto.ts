import { Document } from "mongoose";

export class RolDto extends Document {
    readonly nombre : string;
    readonly permisos : string[];
}