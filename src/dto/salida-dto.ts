import { EmpleadoDto } from "./empleado-dto";
import { TipoEntradaDto } from "./tipo-entrada-dto";
import { SucursalDto } from "./sucursal-dto";
import { FormaPagoDto } from "./forma-pago-dto";
import { TipoSalidaDto } from "./tipo-salida-dto";
import { Document } from "mongoose";
import { PagoDermatologoDto } from "./pago-dermatologo-dto";

export class SalidaDto extends Document {
    readonly create_date: Date;
    readonly hora_aplicacion: Date;
    readonly turno: String;
    readonly recepcionista: EmpleadoDto;
    readonly concepto: String;
    readonly descripcion: String;
    readonly cantidad: String;
    readonly retencion: String;
    readonly tipo_salida: TipoSalidaDto;
    readonly sucursal: SucursalDto;
    readonly forma_pago: FormaPagoDto;
    readonly pago_dermatologo: PagoDermatologoDto;
}