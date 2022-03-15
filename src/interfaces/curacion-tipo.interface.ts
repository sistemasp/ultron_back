import { Document } from "mongoose";
import { CuracionNombreI } from "./curacion-nombre.interface";

export interface CuracionTipoI extends Document {
    nombre : string;
    curacionNombre : CuracionNombreI;
    is_active: boolean;
}