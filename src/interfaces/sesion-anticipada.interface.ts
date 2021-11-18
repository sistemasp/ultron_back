import { Document } from "mongoose";
import { BiopsiaI } from "./biopsia.interface";
import { EmpleadoI } from "./empleado.interface";
import { FacturaI } from "./factura.interface";
import { FrecuenciaI } from "./frecuencia.interface";
import { PacienteI } from "./paciente.interface";
import { PagoI } from "./pago.interface";
import { ServicioI } from "./servicio.interface";
import { SucursalI } from "./sucursal.interface";
import { TipoCitaI } from "./tipo-cita.interface";

export interface SesionAnticipadaI extends Document {
    fecha_pago: Date;
    fecha_asistencia: Date;
    sucursal: SucursalI;
    paciente: PacienteI;
    frecuencia: FrecuenciaI;
    dermatologo: EmpleadoI;
    tipo_cita: TipoCitaI;
    servicio: ServicioI;
    tratamientos: [];
    precio: String;
    descuento_clinica: String;
    porcentaje_descuento_clinica: String;
    total: String;
    observaciones: String;
    pagado: Boolean;
    numero_sesion: String;
    factura: FacturaI;
    pagos: PagoI[];
    recepcionista: EmpleadoI;
    consecutivo: Number;
    materiales: [];
    biopsias: BiopsiaI[];
}