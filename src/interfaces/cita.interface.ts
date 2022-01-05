import { Document } from "mongoose";
import { EmpleadoI } from "./empleado.interface";
import { PacienteI } from "./paciente.interface";
import { ServicioI } from "./servicio.interface";
import { StatusI } from "./status.interface";
import { SucursalI } from "./sucursal.interface";
import { TipoCitaI } from "./tipo-cita.interface";
import { TratamientoI } from "./tratamiento.interface";

export interface CitaI extends Document {
    fecha_hora : Date;
    paciente : PacienteI;
    medico : EmpleadoI;
    servicio : ServicioI;
    tratamientos : TratamientoI[];
    numero_sesion : string;
    quien_agenda : EmpleadoI;
    tipo_cita : TipoCitaI;
    quien_confirma : EmpleadoI;
    status : StatusI;
    motivos : string;
    precio : string;
    tiempo : string;
    observaciones : string;
    sucursal : SucursalI;
    promovendedor : EmpleadoI;
    cosmetologa : EmpleadoI;
}