import { ConsultaDto } from "./consulta-dto";
import { BiopsiaDto } from "./biopsia-dto";
import { PacienteDto } from "./paciente-dto";
import { EmpleadoDto } from "./empleado-dto";
import { SucursalDto } from "./sucursal-dto";
import { StatusDto } from "./status-dto";
import { ServicioDto } from "./servicio-dto";
import { PagoDto } from "./pago-dto";
import { ProductoDto } from "./producto-dto";
import { FrecuenciaDto } from "./frecuencia-dto";
import { TipoCitaDto } from "./tipo-cita-dto";
import { FacturaDto } from "./factura-dto";
import { Document } from "mongoose";
import { FormaPagoDto } from "./forma-pago-dto";
import { MedioDto } from "./medio-dto";

export class CirugiaDto extends Document {
    readonly create_date: Date;
    readonly hora_aplicacion: Date;
    readonly fecha_hora: Date;
    readonly pagado: boolean;
    readonly status: StatusDto;
    readonly consultaId: string;
    readonly paciente: PacienteDto;
    readonly dermatologo: EmpleadoDto;
    readonly patologo: EmpleadoDto;
    readonly sucursal: SucursalDto;
    readonly consecutivo: Number;
    readonly quien_agenda : EmpleadoDto;
    readonly quien_confirma: EmpleadoDto;
    readonly tipo_cita: TipoCitaDto;
    readonly precio: string;
    readonly pago_dermatologo: string;
    readonly pago_patologo: string;
    readonly total: string;
    readonly total_aplicacion: string;
    readonly materiales: [];
    readonly biopsias: BiopsiaDto[];
    readonly hasBiopsia: boolean;
    readonly costo_biopsias: string;
    readonly servicio: ServicioDto;
    readonly pagos : PagoDto[];
    readonly factura: FacturaDto;
    readonly hora_llegada : string;
    readonly hora_atencion : string;
    readonly hora_salida : string;
    readonly producto: ProductoDto;
    readonly frecuencia: FrecuenciaDto;
    readonly porcentaje_descuento_clinica: string;
    readonly has_descuento_dermatologo: boolean;
    readonly descuento_clinica: string;
    readonly descuento_dermatologo: string;
    readonly forma_pago: FormaPagoDto;
    readonly medio: MedioDto;
    readonly turno: string;
    readonly observaciones: string;
}