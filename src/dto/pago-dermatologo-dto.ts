import { EmpleadoDto } from "./empleado-dto";
import { ConsultaDto } from "./consulta-dto";
import { CuracionDto } from "./curacion-dto";
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
    readonly curaciones: CuracionDto[];
    readonly faciales: FacialDto[];
    readonly dermapens: DermapenDto[];
    readonly aparatologias: AparatologiaDto[];
    readonly esteticas: EsteticaDto[];
    readonly turno: string;
    readonly retencion: string;
    readonly total: string;
    readonly pagado: Boolean;
}