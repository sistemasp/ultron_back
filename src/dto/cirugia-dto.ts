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
    readonly pagado: Boolean;
    readonly status: StatusDto;
    readonly consultaId: String;
    readonly paciente: PacienteDto;
    readonly dermatologo: EmpleadoDto;
    readonly patologo: EmpleadoDto;
    readonly sucursal: SucursalDto;
    readonly consecutivo: Number;
    readonly quien_agenda : EmpleadoDto;
    readonly quien_confirma: EmpleadoDto;
    readonly tipo_cita: TipoCitaDto;
    readonly precio: String;
    readonly pago_dermatologo: String;
    readonly pago_patologo: String;
    readonly total: String;
    readonly total_aplicacion: String;
    readonly materiales: [];
    readonly biopsias: BiopsiaDto[];
    readonly hasBiopsia: Boolean;
    readonly costo_biopsias: String;
    readonly servicio: ServicioDto;
    readonly pagos : PagoDto[];
    readonly factura: FacturaDto;
    readonly hora_llegada : String;
    readonly hora_atencion : String;
    readonly hora_salida : String;
    readonly producto: ProductoDto;
    readonly frecuencia: FrecuenciaDto;
    readonly porcentaje_descuento_clinica: String;
    readonly has_descuento_dermatologo: Boolean;
    readonly descuento_clinica: String;
    readonly descuento_dermatologo: String;
    readonly forma_pago: FormaPagoDto;
    readonly medio: MedioDto;
    readonly turno: String;
}