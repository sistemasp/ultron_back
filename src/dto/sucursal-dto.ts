import { Document } from "mongoose";
import { ServicioDto } from "./servicio-dto";

export class SucursalDto extends Document {
    readonly clave: String;
    readonly nombre: String;
    readonly direccion: String;
    readonly telefonos: String[];
    readonly servicios: ServicioDto[];
    readonly precio_matutino: String;
    readonly precio_vespertino: String;
    readonly precio_sabado_matutino: String;
    readonly precio_sabado_vespertino: String;
    readonly precio_festivo: String;
    readonly color : String;
    readonly camillas : String;
    readonly laseres : String;
}