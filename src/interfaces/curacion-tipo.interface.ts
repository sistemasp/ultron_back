import { Document } from "mongoose";
import { CuracionNombreI } from "./curacion-nombre.interface";

export interface CuracionTipoI extends Document {
    nombre : string;
    curacion_nombre : CuracionNombreI;
    is_active: boolean;
}