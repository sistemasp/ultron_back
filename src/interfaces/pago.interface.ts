import { TratamientoI } from "./tratamiento.interface";
import { PacienteI } from "./paciente.interface";
import { SucursalI } from "./sucursal.interface";
import { EmpleadoI } from "./empleado.interface";
import { ServicioI } from "./servicio.interface";
import { BancoI } from "./banco.interface";
import { TipoTarjetaI } from "./tipo-tarjeta.interface";
import { FormaPagoI } from "./forma-pago.interface";
import { EntradaI } from "./entrada.interface";
import { Document } from "mongoose";

export interface PagoI extends Document {
    create_date: Date;
    fecha_pago: Date;
    hora_aplicacion: Date;
    paciente: PacienteI;
    dermatologo: EmpleadoI;
    tratamientos: TratamientoI[];
    quien_recibe_pago: EmpleadoI;
    cantidad: string;
    total: string;
    forma_pago: FormaPagoI;
    banco: BancoI;
    tipo_tarjeta: TipoTarjetaI;
    digitos: string;
    sucursal: SucursalI;
    factura: Boolean;
    deposito_confirmado: Boolean;
    observaciones: string;
    porcentaje_descuento_clinica: string;
    descuento_clinica: string;
    descuento_dermatologo: string;
    tipo_servicio: ServicioI;
    servicio: string;
    pago_anticipado: Boolean;
    entrada: EntradaI;
    turno: string;
}