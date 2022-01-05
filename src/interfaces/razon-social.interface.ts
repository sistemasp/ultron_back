import { Document } from "mongoose";

export interface RazonSocialI extends Document {
    create_date: Date;
    rfc: string;
    nombre_completo: string;
    domicilio: string;
    numero_exterior: string;
    numero_interior: string;
    colonia: string;
    ciudad: string;
    municipio: string;
    estado: string;
    codigo_postal: string;
    telefono: string;
    email: string;
}