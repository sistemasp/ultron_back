import { PacienteI } from "./paciente.interface";
import { SucursalI } from "./sucursal.interface";
import { EmpleadoI } from "./empleado.interface";
import { TipoCitaI } from "./tipo-cita.interface";
import { StatusI } from "./status.interface";
import { ServicioI } from "./servicio.interface";
import { PagoI } from "./pago.interface";
import { AreaI } from "./area.interface";
import { MedioI } from "./medio.interface";
import { ConsultaI } from "./consulta.interface";
import { ProductoI } from "./producto.interface";
import { FrecuenciaI } from "./frecuencia.interface";
import { FacturaI } from "./factura.interface";
import { Document } from "mongoose";
import { FormaPagoI } from "./forma-pago.interface";

export interface FacialI extends Document {
    create_date: Date;
    hora_aplicacion: Date;
    fecha_hora: Date;
    paciente: PacienteI;
    dermatologo: EmpleadoI;
    servicio: ServicioI;
    tratamientos: [];
    areas: AreaI[];
    numero_sesion: string;
    quien_agenda: EmpleadoI;
    tipo_cita: TipoCitaI;
    medio: MedioI;
    quien_confirma_llamada: EmpleadoI;
    quien_confirma_asistencia: EmpleadoI;
    status: StatusI;
    motivos: string;
    precio: string;
    total: string;
    pago_dermatologo: string;
    tiempo: string;
    observaciones: string;
    sucursal: SucursalI;
    promovendedor: EmpleadoI;
    cosmetologa: EmpleadoI;
    quien_realiza: EmpleadoI;
    hora_llegada: string;
    hora_atencion: string;
    hora_salida: string;
    pagado: boolean;
    factura: FacturaI;
    pagos: PagoI[];
    consecutivo: Number;
    consultaId: string;
    producto: ProductoI;
    frecuencia: FrecuenciaI;
    porcentaje_descuento_clinica: string;
    has_descuento_dermatologo: boolean;
    descuento_clinica: string;
    descuento_dermatologo: string;
    forma_pago: FormaPagoI;
    turno: string;
}