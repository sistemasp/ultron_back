import { Document } from "mongoose";
import { LaboratorioDto } from "./laboratorio-dto";
import { TipoMedicamentoDto } from "./tipo-medicamento-dto";

export class ProductoComercialDto extends Document {
    readonly nombre : string;
    readonly laboratorio : LaboratorioDto;
    readonly producto_activo : string;
    readonly tipo_medicamento : TipoMedicamentoDto;
    readonly is_active: boolean;
}