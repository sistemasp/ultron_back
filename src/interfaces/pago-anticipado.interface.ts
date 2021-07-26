import { Document } from "mongoose";
import { EmpleadoI } from "./empleado.interface";
import { PacienteI } from "./paciente.interface";
import { PagoI } from "./pago.interface";
import { SesionAnticipadaI } from "./sesion-anticipada.interface";
import { SucursalI } from "./sucursal.interface";
import { TipoCitaI } from "./tipo-cita.interface";

export interface PagoAnticipadoI extends Document {
    fecha_pago: Date;
    sucursal: SucursalI;
    paciente: PacienteI;
    dermatologo: EmpleadoI;
    tipo_cita: TipoCitaI;
    pagos: PagoI[];
    sesionesAnticipadas: SesionAnticipadaI[];
    precio: String;
    total: String;
    factura: Boolean;
    observaciones: String;
}