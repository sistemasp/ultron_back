import { Document } from "mongoose";
import { LaboratorioI } from "./laboratorio.interface";

export interface ProductoComercialI extends Document {
    nombre: String;
    laboratorio: LaboratorioI;
    is_active: Boolean;
}