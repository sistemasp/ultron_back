import { EmpleadoI } from "./empleado.interface";
import { PacienteI } from "./paciente.interface";
import { SucursalI } from "./sucursal.interface";
import { StatusI } from "./status.interface";
import { Document } from "mongoose";

export interface BiopsiaI extends Document {
    create_date: Date;
    hora_aplicacion: Date;
    consecutivo: Number;
    fecha_realizacion: Date;
    dermatologo: EmpleadoI;
    paciente: PacienteI;
    sucursal: SucursalI;
    patologo: EmpleadoI;
    con_pago: Boolean;
    fecha_entrega_patologo: Date;
    quien_entrega: EmpleadoI;
    fecha_entrega_resultado: Date;
    quien_recibe: EmpleadoI;
    diagnostico: string;
    status: StatusI;
    a_quien_se_entrega: EmpleadoI;
    fecha_entrega: Date;
    quien_lo_entrega: EmpleadoI;
}