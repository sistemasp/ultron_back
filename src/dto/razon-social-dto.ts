import { Document } from "mongoose";

export class RazonSocialDto extends Document {
    readonly create_date: Date;
    readonly rfc: string;
    readonly nombre_completo: string;
    readonly domicilio: string;
    readonly numero_exterior: string;
    readonly numero_interior: string;
    readonly colonia: string;
    readonly ciudad: string;
    readonly municipio: string;
    readonly estado: string;
    readonly codigo_postal: string;
    readonly telefono: string;
    readonly email: string;
}