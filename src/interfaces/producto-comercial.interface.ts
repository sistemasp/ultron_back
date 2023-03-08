import { Document } from "mongoose";
import { LaboratorioI } from "./laboratorio.interface";
import { TipoMedicamentoI } from "./tipo-medicamento.interface";

export interface ProductoComercialI extends Document {
    nombre: string;
    laboratorio: LaboratorioI;
    producto_activo: string;
    tipo_medicamento: TipoMedicamentoI;
    is_active: boolean;
}