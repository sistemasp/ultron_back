import { Document } from "mongoose";
import { ProductoDto } from "./producto-dto";
import { TipoEsteticaDto } from "./tipo-estetica-dto";

export class MaterialEsteticaDto extends Document {
    readonly nombre : string;
    readonly precio : string;
    readonly tipo_estetica : TipoEsteticaDto;
    readonly producto: ProductoDto;
    readonly iva : boolean;
    readonly is_active: boolean;
}