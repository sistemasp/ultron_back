import { PacienteI } from "./paciente.interface";
import { RazonSocialI } from "./razon-social.interface";
import { UsoCfdiI } from "./uso-cfdi.interface";
import { FormaPagoI } from "./forma-pago.interface";
import { SucursalI } from "./sucursal.interface";
import { ServicioI } from "./servicio.interface";
import { Document } from "mongoose";

export interface FacturaI extends Document {
    fecha_hora : Date;
    paciente: PacienteI;
    razon_social: RazonSocialI;
    uso_cfdi: UsoCfdiI;
    forma_pago: FormaPagoI;
    ultimos_4_digitos: string;
    cantidad: string;
    sucursal : SucursalI;
    tipo_servicio: string;
    servicio: string;
}