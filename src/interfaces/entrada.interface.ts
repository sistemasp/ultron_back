import { EmpleadoI } from "./empleado.interface";
import { TipoEntradaI } from "./tipo-entrada.interface";
import { SucursalI } from "./sucursal.interface";
import { FormaPagoI } from "./forma-pago.interface";
import { Document } from "mongoose";

export interface EntradaI extends Document {
    create_date: Date;
    hora_aplicacion: Date;
    turno: string;
    recepcionista: EmpleadoI;
    concepto: string;
    cantidad: string;
    tipo_entrada: TipoEntradaI;
    sucursal: SucursalI;
    forma_pago: FormaPagoI;
    pago_anticipado: Boolean;
}