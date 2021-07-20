import { Document } from "mongoose";
import { PacienteI } from "./paciente.interface";
import { PagoI } from "./pago.interface";
import { SesionAnticipadaI } from "./sesion-anticipada.interface";
import { SucursalI } from "./sucursal.interface";

export interface PagoAnticipadoI extends Document {
    fecha_pago: Date;
    sucursal: SucursalI;
    paciente: PacienteI;
    pagos: PagoI[];
    sesionesAnticipadas: SesionAnticipadaI[];
    precio: String;
    total: String;
    observaciones: String;
}