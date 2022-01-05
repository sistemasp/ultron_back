import { Document } from "mongoose";
import { EmpleadoDto } from "./empleado-dto";
import { PacienteDto } from "./paciente-dto";
import { ServicioDto } from "./servicio-dto";
import { StatusDto } from "./status-dto";
import { SucursalDto } from "./sucursal-dto";
import { TipoCitaDto } from "./tipo-cita-dto";
import { TratamientoDto } from "./tratamiento-dto";

export class CitaDto extends Document {
    readonly fecha_hora : Date;
    readonly paciente : PacienteDto;
    readonly medico : EmpleadoDto;
    readonly servicio : ServicioDto;
    readonly tratamientos : TratamientoDto[];
    readonly numero_sesion : string;
    readonly quien_agenda : EmpleadoDto;
    readonly tipo_cita : TipoCitaDto;
    readonly quien_confirma : EmpleadoDto;
    readonly status : StatusDto;
    readonly motivos : string;
    readonly precio : string;
    readonly tiempo : string;
    readonly observaciones : string;
    readonly sucursal : SucursalDto;
    readonly promovendedor : EmpleadoDto;
    readonly cosmetologa : EmpleadoDto;
}