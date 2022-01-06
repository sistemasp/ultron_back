import { Document } from "mongoose";
import { ProductoI } from "./producto.interface";
import { TipoEsteticaI } from "./tipo-estetica.interface";

export interface MaterialEsteticaI extends Document {
    nombre : string;
    precio : string;
    tipo_estetica : TipoEsteticaI;
    producto: ProductoI;
    iva : boolean;
    is_active: boolean;
}