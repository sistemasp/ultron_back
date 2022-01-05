import { EmpleadoDto } from "./empleado-dto";
import { TipoEntradaDto } from "./tipo-entrada-dto";
import { SucursalDto } from "./sucursal-dto";
import { FormaPagoDto } from "./forma-pago-dto";
import { Document } from "mongoose";

export class EntradaDto extends Document {
    readonly create_date: Date;
    readonly hora_aplicacion: Date;
    readonly turno: string;
    readonly recepcionista: EmpleadoDto;
    readonly concepto: string;
    readonly cantidad: string;
    readonly tipo_entrada: TipoEntradaDto;
    readonly sucursal: SucursalDto;
    readonly forma_pago: FormaPagoDto;
    readonly pago_anticipado: Boolean;
}