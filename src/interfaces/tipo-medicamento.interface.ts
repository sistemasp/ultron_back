import { Document } from "mongoose";

export interface TipoMedicamentoI extends Document {
    nombre : string;
}