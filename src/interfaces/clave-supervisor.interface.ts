import { Document } from "mongoose";
import { EmpleadoI } from "./empleado.interface";

export interface ClaveSupervisorI extends Document {
    clave: string;
    supervisor: EmpleadoI;
    is_active: boolean;
}