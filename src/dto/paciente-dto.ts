import { Document } from "mongoose";
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
    readonly domicilio: String;
    readonly numero_exterior: String;
    readonly numero_interior: String;
    readonly colonia: String;
    readonly ciudad: String;
    readonly municipio: String;
    readonly estado: String;
    readonly codigo_postal: String;
}