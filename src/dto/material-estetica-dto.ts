import { Document } from "mongoose";
import { ProductoDto } from "./producto-dto";
import { TipoEsteticaDto } from "./tipo-estetica-dto";

export class MaterialEsteticaDto extends Document {
    readonly nombre : String;
    readonly precio : String;
    readonly tipo_estetica : TipoEsteticaDto;
    readonly producto: ProductoDto;
    readonly iva : Boolean;
    readonly is_active: Boolean;
}