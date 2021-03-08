import { Document } from "mongoose";
import { LaboratorioDto } from "./laboratorio-dto";

export class ProductoComercialDto extends Document {
    readonly nombre : String;
    readonly laboratorio : LaboratorioDto;
    readonly is_active: Boolean;
}