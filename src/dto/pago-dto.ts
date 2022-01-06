import { TratamientoDto } from "./tratamiento-dto";
import { PacienteDto } from "./paciente-dto";
import { SucursalDto } from "./sucursal-dto";
import { EmpleadoDto } from "./empleado-dto";
import { ServicioDto } from "./servicio-dto";
import { BancoDto } from "./banco-dto";
import { TipoTarjetaDto } from "./tipo-tarjeta-dto";
import { FormaPagoDto } from "./forma-pago-dto";
import { EntradaDto } from "./entrada-dto";
import { Document } from "mongoose";

export class PagoDto extends Document {
    readonly create_date: Date;
    readonly fecha_pago: Date;
    readonly hora_aplicacion: Date;
    readonly paciente: PacienteDto;
    readonly dermatologo: EmpleadoDto;
    readonly tratamientos: TratamientoDto[];
    readonly quien_recibe_pago: EmpleadoDto;
    readonly cantidad: string;
    readonly total: string;
    readonly forma_pago: FormaPagoDto;
    readonly banco: BancoDto;
    readonly tipo_tarjeta: TipoTarjetaDto;
    readonly digitos: string;
    readonly sucursal: SucursalDto;
    readonly factura: boolean;
    readonly deposito_confirmado: boolean;
    readonly observaciones: string;
    readonly porcentaje_descuento_clinica: string;
    readonly descuento_clinica: string;
    readonly descuento_dermatologo: string;
    readonly tipo_servicio: ServicioDto;
    readonly servicio: string;
    readonly pago_anticipado: boolean;
    readonly entrada: EntradaDto;
    readonly turno: string;

}