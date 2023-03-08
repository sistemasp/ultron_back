import { AnalisisMedicoDto } from "./analisis-medico-dto";

export class GrupoAnalisisMedicosDto{
    readonly analisis_medicos: AnalisisMedicoDto[];
    readonly is_active: boolean;
}