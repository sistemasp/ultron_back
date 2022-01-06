import { Document } from "mongoose";
import { SalidaDto } from "./salida-dto";
import { EmpleadoDto } from "./empleado-dto";
import { EntradaDto } from "./entrada-dto";
import { SucursalDto } from "./sucursal-dto";

export class CorteDto extends Document {
    readonly create_date: Date;
    readonly hora_apertura: Date;
    readonly hora_cierre: Date;
    readonly turno: string;
    readonly entradas: EntradaDto[];
    readonly pagos_anticipados: EntradaDto[];
    readonly salidas: SalidaDto[];
    readonly recepcionista: EmpleadoDto;
    readonly sucursal: SucursalDto;
    readonly generado: boolean;
}