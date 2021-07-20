import { Document } from "mongoose";
import { PacienteDto } from "./paciente-dto";
import { PagoDto } from "./pago-dto";
import { SesionAnticipadaDto } from "./sesion-anticipada-dto";
import { SucursalDto } from "./sucursal-dto";

export class PagoAnticipadoDto extends Document {
    readonly fecha_pago: Date;
    readonly sucursal: SucursalDto;
    readonly paciente: PacienteDto;
    readonly pagos: PagoDto[];
    readonly sesionesAnticipadas: SesionAnticipadaDto[];
    readonly precio: String;
    readonly total: String;
    readonly observaciones: String;
}