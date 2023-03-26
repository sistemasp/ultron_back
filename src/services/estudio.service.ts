import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { EstudioI } from 'src/interfaces/estudio.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class EstudioService {

    constructor(@InjectModel('Estudio') private readonly estudioModel : Model<EstudioI>) {}

    /**
     * Muestra todos los estudios de la BD
     */
    async showAllEstudios(): Promise<EstudioI[]> {
        return await this.estudioModel.find().sort('nombre');
    }

    /**
     * Busca solo un estudio mediante su ID en la BD
     * @param idEstudio 
     */
    async findEstudioById(idEstudio: string): Promise<EstudioI> {
        return await this.estudioModel.findOne( { _id: idEstudio } );
    }

    /**
     * Busca solo una estudio mediante su consulta en la BD
     * @param idEstudio 
     */
     async findEstudioByConsultaId(consultaId: string, ): Promise<EstudioI> {
        return await this.estudioModel.findOne( { 
            consultaId: consultaId,
        } )
        .populate('analisis_medicos');
    }

    /**
     * Busca solo un estudio mediante su numero de empleado en la BD
     * @param idEstudio 
     */
    async findEstudioByEmployeeNumber(employeeNumber: string): Promise<EstudioI> {
        return await this.estudioModel.findOne( { numero_empleado: employeeNumber } );
    }

    /**
     * Genera un nuevo estudio en la BD
     * @param estudio 
     */
    async createEstudio(estudio: EstudioI): Promise<EstudioI> {
        const newEstudio = new this.estudioModel(estudio);
        return await newEstudio.save();
    }

    /**
     * Busca un estudio por su Id para poder actualizarlo
     * @param idEstudio 
     * @param estudio 
     */
    async updateEstudio(idEstudio: string, estudio: EstudioI): Promise<any> {
        return await this.estudioModel.updateOne({ _id: idEstudio }, estudio);
    }

    /**
     * Busca un estudio por su ID y lo elimina de la BD
     * @param idEstudio 
     */
    async deleteEstudio(idEstudio: string ): Promise<EstudioI> {
        return await this.estudioModel.findOneAndDelete({ _id: idEstudio });
    }

    async findEstudioByRangeDateAndSucursal(anioi, mesi, diai, aniof, mesf, diaf, sucursalId): Promise<EstudioI[]> {
        let startDate = new Date(anioi, mesi, diai);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(aniof, mesf, diaf);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        const estudios = await this.estudioModel.find({ create_date: { $gte: startDate, $lte: endDate }, sucursal: sucursalId })
            .populate('paciente')
            .populate('dermatologo')
            /*.populate(
                {
                    path: "productos",
                    populate: {
                        path: "laboratorio"
                    }
                },
                {
                    path: "productos",
                    populate: {
                        path: "producto"
                    }
                })*/;

        return estudios;
    }
}
