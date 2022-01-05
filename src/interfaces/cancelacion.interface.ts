import { Document } from "mongoose";
import { EmpleadoI } from "./empleado.interface";
import { ServicioI } from "./servicio.interface";
import { StatusI } from "./status.interface";

export interface CancelacionI extends Document {
    supervisor: EmpleadoI;
    recepcionista: EmpleadoI;
    create_date: Date;
    tipo_servicio: ServicioI;
    servicio: string;
    hora_llegada: string;
    hora_salida: string;
    status: StatusI;
}