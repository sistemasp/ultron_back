import { Document } from "mongoose";
import { CuracionNombreDto } from "./curacion-nombre-dto";

export class CuracionTipoDto extends Document {
    readonly nombre : string;
    readonly curacionNombre : CuracionNombreDto;
    readonly is_active: boolean;
}