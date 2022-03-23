import { Document } from "mongoose";
import { CuracionNombreDto } from "./curacion-nombre-dto";

export class CuracionTipoDto extends Document {
    readonly nombre : string;
    readonly curacion_nombre : CuracionNombreDto;
    readonly is_active: boolean;
}