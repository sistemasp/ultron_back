import { EmpleadoDto } from "./empleado-dto";
import { BiopsiaDto } from "./biopsia-dto";
import { Document } from "mongoose";

export class PagoPatologoDto extends Document {
    readonly create_date: Date;
    readonly fecha_pago: Date;
    readonly patologo: EmpleadoDto;
    readonly biopsias: BiopsiaDto[];
    readonly turno: string;
    readonly retencion: string;
    readonly total: string;
    readonly pagado: boolean;
}