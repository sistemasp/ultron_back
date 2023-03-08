
import { AnalisisMedicoI } from "./analisis-medico.interface";

export interface GrupoAnalisisMedicosI {
    analisis_medicos: AnalisisMedicoI[];
    is_active: boolean;
}