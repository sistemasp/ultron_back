import { Document } from "mongoose";
import { SalidaI } from "./salida.interface";
import { EmpleadoI } from "./empleado.interface";
import { EntradaI } from "./entrada.interface";
import { SucursalI } from "./sucursal.interface";

export interface CorteI extends Document {
    create_date: Date;
    hora_apertura: Date;
    hora_cierre: Date;
    turno: string;
    entradas: EntradaI[];
    pagos_anticipados: EntradaI[];
    salidas: SalidaI[];
    recepcionista: EmpleadoI;
    sucursal: SucursalI;
    generado: boolean;
}