import { EmpleadoI } from "./empleado.interface";
import { ConsultaI } from "./consulta.interface";
import { CirugiaI } from "./cirugia.interface";
import { EsteticaI } from "./estetica.interface";
import { FacialI } from "./facial.interface";
import { AparatologiaI } from "./aparatologia.interface";
import { DermapenI } from "./dermapen.interface";
import { Document } from "mongoose";

export interface PagoDermatologoI extends Document {
    create_date: Date;
    fecha_pago: Date;
    dermatologo: EmpleadoI;
    consultas: ConsultaI[];
    cirugias: CirugiaI[];
    faciales: FacialI[];
    dermapens: DermapenI[];
    aparatologias: AparatologiaI[];
    esteticas: EsteticaI[];
    turno: string;
    retencion: string;
    total: string;
    pagado: Boolean;
}