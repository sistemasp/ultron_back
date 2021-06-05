import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { RazonSocialI } from 'src/interfaces/razon-social.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class RazonSocialService {

    constructor(@InjectModel('RazonSocial') private readonly razonSocialModel: Model<RazonSocialI>) { }

    /**
     * Muestra todos los razonSocials de la BD
     */
    async showAllRazonSocials(): Promise<RazonSocialI[]> {
        return await this.razonSocialModel.find().sort('-create_date');
    }

    /**
     * Muestra todos los pacientes de la BD
     */
    async remotePatients(per_page, page, search): Promise<{}> {
        const exp = `(?imxs)${search.split(' ').join('.')}(?-imxs)`;
        const query = {

        };
        const total = await this.razonSocialModel.countDocuments(query);
        const razonSocials = await this.razonSocialModel.find(search !== '' ? query : {})
            .limit(Number(per_page))
            .skip(Number(page - 1) * Number(per_page))
            .sort('-create_date')
            .select('rfc nombre_completo domicilio numero_exterior numero_interior colonia ciudad municipio estado codigo_postal telefono email');
        const response = {
            ad: {},
            data: razonSocials,
            page: page,
            per_page: per_page,
            total: total,
            total_pages: Number(total / per_page),
        }
        return response;
    }

    /**
     * Busca solo un razonSocial mediante su ID en la BD
     * @param idRazonSocial 
     */
    async findRazonSocialById(idRazonSocial: string): Promise<RazonSocialI> {
        return await this.razonSocialModel.findOne({ _id: idRazonSocial });
    }

    /**
     * Busca solo un razonSocial mediante su numero de empleado en la BD
     * @param idRazonSocial 
     */
    async findRazonSocialByEmployeeNumber(employeeNumber: string): Promise<RazonSocialI> {
        return await this.razonSocialModel.findOne({ numero_empleado: employeeNumber });
    }

    /**
     * Genera un nuevo razonSocial en la BD
     * @param razonSocial 
     */
    async createRazonSocial(razonSocial: RazonSocialI): Promise<RazonSocialI> {
        const newRazonSocial = new this.razonSocialModel(razonSocial);
        return await newRazonSocial.save();
    }

    /**
     * Busca un razonSocial por su Id para poder actualizarlo
     * @param idRazonSocial 
     * @param razonSocial 
     */
    async updateRazonSocial(idRazonSocial: string, razonSocial: RazonSocialI): Promise<any> {
        return await this.razonSocialModel.updateOne({ _id: idRazonSocial }, razonSocial);
    }

    /**
     * Busca un razonSocial por su ID y lo elimina de la BD
     * @param idRazonSocial 
     */
    async deleteRazonSocial(idRazonSocial: string): Promise<RazonSocialI> {
        return await this.razonSocialModel.findOneAndDelete({ _id: idRazonSocial });
    }

}
