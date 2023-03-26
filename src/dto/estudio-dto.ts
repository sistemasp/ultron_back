import { Document } from "mongoose";
import { AnalisisMedicoDto } from "./analisis-medico-dto";
import { EmpleadoDto } from "./empleado-dto";
import { PacienteDto } from "./paciente-dto";
import { SucursalDto } from "./sucursal-dto";

export class EstudioDto extends Document {
    readonly create_date: Date;
    readonly folio: string;
    readonly consultaId: string;
    readonly paciente: PacienteDto;
    readonly dermatologo: EmpleadoDto;
    readonly sucursal: SucursalDto;
    readonly analisis_medicos: AnalisisMedicoDto[];
    readonly fecha_proxima_consulta: string;
}