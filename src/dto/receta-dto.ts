import { Document } from "mongoose";
import { EmpleadoDto } from "./empleado-dto";
import { PacienteDto } from "./paciente-dto";
import { SucursalDto } from "./sucursal-dto";

export class RecetaDto extends Document {
    readonly create_date: Date;
    readonly consultaId: String;
    readonly paciente: PacienteDto;
    readonly dermatologo: EmpleadoDto;
    readonly sucursal: SucursalDto;
    readonly productos: [];
}