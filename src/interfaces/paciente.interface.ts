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
    domicilio: String;
    numero_exterior: String;
    numero_interior: String;
    colonia: String;
    ciudad: String;
    municipio: String;
    estado: String;
    codigo_postal: String;
    quien_captura: EmpleadoI;
}