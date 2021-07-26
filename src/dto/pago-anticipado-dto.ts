import { Document } from "mongoose";
import { EmpleadoDto } from "./empleado-dto";
import { PacienteDto } from "./paciente-dto";
import { PagoDto } from "./pago-dto";
import { SesionAnticipadaDto } from "./sesion-anticipada-dto";
import { SucursalDto } from "./sucursal-dto";
import { TipoCitaDto } from "./tipo-cita-dto";

export class PagoAnticipadoDto extends Document {
    readonly fecha_pago: Date;
    readonly sucursal: SucursalDto;
    readonly paciente: PacienteDto;
    readonly dermatologo: EmpleadoDto;
    readonly tipo_cita: TipoCitaDto;
    readonly pagos: PagoDto[];
    readonly sesionesAnticipadas: SesionAnticipadaDto[];
    readonly precio: String;
    readonly total: String;
    readonly factura: Boolean;
    readonly observaciones: String;
}