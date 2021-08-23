import { EmpleadoI } from "./empleado.interface";
import { SucursalI } from "./sucursal.interface";
import { FormaPagoI } from "./forma-pago.interface";
import { TipoSalidaI } from "./tipo-salida.interface";
import { Document } from "mongoose";
import { PagoDermatologoI } from "./pago-dermatologo.interface";

export interface SalidaI extends Document {
    create_date: Date;
    hora_aplicacion: Date;
    turno: String;
    recepcionista: EmpleadoI;
    concepto: String;
    descripcion: String;
    cantidad: String;
    retencion: String;
    tipo_salida: TipoSalidaI;
    sucursal: SucursalI;
    forma_pago: FormaPagoI;
    pago_dermatologo: PagoDermatologoI;
}