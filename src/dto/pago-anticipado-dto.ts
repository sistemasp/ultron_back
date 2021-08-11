import { Document } from "mongoose";
import { EmpleadoDto } from "./empleado-dto";
import { FacturaDto } from "./factura-dto";
import { PacienteDto } from "./paciente-dto";
import { PagoDto } from "./pago-dto";
import { ServicioDto } from "./servicio-dto";
import { SesionAnticipadaDto } from "./sesion-anticipada-dto";
import { SucursalDto } from "./sucursal-dto";
import { TipoCitaDto } from "./tipo-cita-dto";

export class PagoAnticipadoDto extends Document {
    readonly fecha_pago: Date;
    readonly sucursal: SucursalDto;
    readonly paciente: PacienteDto;
    readonly recepcionista: EmpleadoDto;
    readonly dermatologo: EmpleadoDto;
    readonly tipo_cita: TipoCitaDto;
    readonly pagos: PagoDto[];
    readonly sesiones_anticipadas: SesionAnticipadaDto[];
    readonly precio: String;
    readonly total: String;
    readonly factura: FacturaDto;
    readonly observaciones: String;
    readonly servicio: ServicioDto;
}