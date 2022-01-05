import { Document } from "mongoose";
import { EmpleadoDto } from "./empleado-dto";

export class ClaveSupervisorDto extends Document {
    readonly clave : string;
    readonly supervisor: EmpleadoDto;
    readonly is_active: Boolean;
}