import { Document } from "mongoose";
import { EmpleadoI } from "./empleado.interface";
import { SexoI } from "./sexo.interface";

export interface PacienteI extends Document {
    create_date: Date;
    nombres: string;
    apellidos: string;
    fecha_nacimiento: string;
    telefono: string;
    email: string;
    sexo: SexoI;
    ocupacion: string;
    alerta_medica: boolean;
    domicilio: string;
    numero_exterior: string;
    numero_interior: string;
    colonia: string;
    ciudad: string;
    municipio: string;
    estado: string;
    codigo_postal: string;
    quien_captura: EmpleadoI;
}