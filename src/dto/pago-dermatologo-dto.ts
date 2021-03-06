import { EmpleadoDto } from "./empleado-dto";
import { ConsultaDto } from "./consulta-dto";
import { CirugiaDto } from "./cirugia-dto";
import { EsteticaDto } from "./estetica-dto";
import { FacialDto } from "./facial-dto";
import { AparatologiaDto } from "./aparatologia-dto";
import { DermapenDto } from "./dermapen-dto";
import { Document } from "mongoose";

export class PagoDermatologoDto extends Document {
    readonly create_date: Date;
    readonly fecha_pago: Date;
    readonly dermatologo: EmpleadoDto;
    readonly consultas: ConsultaDto[];
    readonly cirugias: CirugiaDto[];
    readonly faciales: FacialDto[];
    readonly dermapens: DermapenDto[];
    readonly aparatologias: AparatologiaDto[];
    readonly esteticas: EsteticaDto[];
    readonly turno: String;
    readonly retencion: String;
    readonly total: String;
    readonly pagado: Boolean;
}