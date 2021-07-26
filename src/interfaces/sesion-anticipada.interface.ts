import { Document } from "mongoose";
import { EmpleadoI } from "./empleado.interface";
import { PacienteI } from "./paciente.interface";
import { ServicioI } from "./servicio.interface";
import { SucursalI } from "./sucursal.interface";
import { TipoCitaI } from "./tipo-cita.interface";

export interface SesionAnticipadaI extends Document {
    fecha_pago: Date;
    fecha_asistencia: Date;
    sucursal: SucursalI;
    paciente: PacienteI;
    dermatologo: EmpleadoI;
    tipo_cita: TipoCitaI;
    servicio: ServicioI;
    tratamientos: [];
    precio: String;
    descuento_clinica: String;
    porcentaje_descuento_clinica: String;
    total: String;
    observaciones: String;
    pagado: Boolean;
}