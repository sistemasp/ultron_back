import { Document } from "mongoose";
import { EmpleadoDto } from "./empleado-dto";
import { SexoDto } from "./sexo-dto";

export class PacienteDto extends Document {
    readonly create_date: Date;
    readonly nombres : string;
    readonly apellidos : string;
    readonly fecha_nacimiento : string;
    readonly telefono : string;
    readonly email : string;
    readonly sexo : SexoDto;
    readonly ocupacion : string;
    readonly alerta_medica : boolean;
    readonly domicilio: string;
    readonly numero_exterior: string;
    readonly numero_interior: string;
    readonly colonia: string;
    readonly ciudad: string;
    readonly municipio: string;
    readonly estado: string;
    readonly codigo_postal: string;
    readonly quien_captura: EmpleadoDto;
}