import { Document } from "mongoose";
import { ServicioI } from "./servicio.interface";

export interface SucursalI extends Document {
    clave: String;
    nombre: String;
    direccion: String;
    telefonos: String[];
    servicios: ServicioI[];
    precio_matutino: String;
    precio_vespertino: String;
    precio_sabado_matutino: String;
    precio_sabado_vespertino: String;
    precio_festivo: String;
    color : String;
    camillas : String;
    laseres : String;
}