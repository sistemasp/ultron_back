import { PacienteDto } from "./paciente-dto";
import { SucursalDto } from "./sucursal-dto";
import { EmpleadoDto } from "./empleado-dto";
import { StatusDto } from "./status-dto";
import { TipoCitaDto } from "./tipo-cita-dto";
import { PagoDto } from "./pago-dto";
import { FrecuenciaDto } from "./frecuencia-dto";
import { ServicioDto } from "./servicio-dto";
import { MedioDto } from "./medio-dto";
import { ProductoDto } from "./producto-dto";
import { FacturaDto } from "./factura-dto";
import { Document } from "mongoose";
import { FormaPagoDto } from "./forma-pago-dto";

export class ConsultaDto extends Document {
    readonly create_date: Date;
    readonly hora_aplicacion: Date;
    readonly folio: string;
    readonly fecha_hora: Date;
    readonly paciente: PacienteDto;
    readonly dermatologo: EmpleadoDto;
    readonly quien_agenda: EmpleadoDto;
    readonly tipo_cita: TipoCitaDto;
    readonly medio: MedioDto;
    readonly quien_confirma_llamada: EmpleadoDto;
    readonly quien_confirma_asistencia: EmpleadoDto;
    readonly status: StatusDto;
    readonly motivos: string;
    readonly precio: string;
    readonly total: string;
    readonly pago_dermatologo: string;
    readonly hora_llegada: string;
    readonly hora_atencion: string;
    readonly hora_salida: string;
    readonly tiempo: string;
    readonly observaciones: string;
    readonly sucursal: SucursalDto;
    readonly promovendedor: EmpleadoDto;
    readonly pagado: Boolean;
    readonly factura: FacturaDto;
    readonly pagos: PagoDto[];
    readonly consecutivo: Number;
    readonly frecuencia: FrecuenciaDto;
    readonly servicio: ServicioDto;
    readonly producto: ProductoDto;
    readonly porcentaje_descuento_clinica: string;
    readonly has_descuento_dermatologo: Boolean;
    readonly descuento_clinica: string;
    readonly descuento_dermatologo: string;
    readonly forma_pago: FormaPagoDto;
    readonly turno: string;
}