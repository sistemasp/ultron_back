import { Document } from "mongoose";
import { EmpleadoDto } from "./empleado-dto";
import { FacturaDto } from "./factura-dto";
import { FrecuenciaDto } from "./frecuencia-dto";
import { PacienteDto } from "./paciente-dto";
import { PagoDto } from "./pago-dto";
import { ServicioDto } from "./servicio-dto";
import { SucursalDto } from "./sucursal-dto";
import { TipoCitaDto } from "./tipo-cita-dto";

export class SesionAnticipadaDto extends Document {
    readonly fecha_pago: Date;
    readonly fecha_asistencia: Date;
    readonly sucursal: SucursalDto;
    readonly paciente: PacienteDto;
    readonly frecuencia: FrecuenciaDto;
    readonly dermatologo: EmpleadoDto;
    readonly tipo_cita: TipoCitaDto;
    readonly servicio: ServicioDto;
    readonly tratamientos: [];
    readonly precio: String;
    readonly descuento_clinica: String;
    readonly porcentaje_descuento_clinica: String;
    readonly total: String;
    readonly observaciones: String;
    readonly pagado: Boolean;
    readonly numero_sesion: String;
    readonly factura: FacturaDto;
    readonly pagos: PagoDto[];
}