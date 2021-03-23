import { Document } from "mongoose";
import { ProductoI } from "./producto.interface";
import { TipoEsteticaI } from "./tipo-estetica.interface";

export interface MaterialEsteticaI extends Document {
    nombre : String;
    precio : String;
    tipo_estetica : TipoEsteticaI;
    producto: ProductoI;
    iva : Boolean;
    is_active: Boolean;
}