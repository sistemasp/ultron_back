import { Document } from "mongoose";
import { LaboratorioI } from "./laboratorio.interface";

export interface ProductoComercialI extends Document {
    nombre: string;
    laboratorio: LaboratorioI;
    is_active: boolean;
}