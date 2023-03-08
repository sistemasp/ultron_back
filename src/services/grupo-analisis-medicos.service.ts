import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { GrupoAnalisisMedicosI } from 'src/interfaces/grupo-analisis-medicos.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class GrupoAnalisisMedicosService {

    constructor(@InjectModel('GrupoAnalisisMedicos') private readonly grupoGrupoAnalisisMedicossModel : Model<GrupoAnalisisMedicosI>) {}

    /**
     * Muestra todos los grupoGrupoAnalisisMedicosss de la BD
     */
    async showAllGrupoAnalisisMedicoss(): Promise<GrupoAnalisisMedicosI[]> {
        return await this.grupoGrupoAnalisisMedicossModel.find();
    }

    /**
     * Busca solo un grupoGrupoAnalisisMedicoss mediante su ID en la BD
     * @param idGrupoAnalisisMedicos 
     */
    async findGrupoAnalisisMedicosById(idGrupoAnalisisMedicos: string): Promise<GrupoAnalisisMedicosI> {
        return await this.grupoGrupoAnalisisMedicossModel.findOne( { _id: idGrupoAnalisisMedicos } );
    }

    /**
     * Busca solo un grupoGrupoAnalisisMedicoss mediante su numero de empleado en la BD
     * @param idGrupoAnalisisMedicos 
     */
    async findGrupoAnalisisMedicosByEmployeeNumber(employeeNumber: string): Promise<GrupoAnalisisMedicosI> {
        return await this.grupoGrupoAnalisisMedicossModel.findOne( { numero_empleado: employeeNumber } );
    }

    /**
     * Genera un nuevo grupoGrupoAnalisisMedicoss en la BD
     * @param grupoGrupoAnalisisMedicoss 
     */
    async createGrupoAnalisisMedicos(grupoGrupoAnalisisMedicoss: GrupoAnalisisMedicosI): Promise<GrupoAnalisisMedicosI> {
        const newGrupoAnalisisMedicos = new this.grupoGrupoAnalisisMedicossModel(grupoGrupoAnalisisMedicoss);
        return await newGrupoAnalisisMedicos.save();
    }

    /**
     * Busca un grupoGrupoAnalisisMedicoss por su Id para poder actualizarlo
     * @param idGrupoAnalisisMedicos 
     * @param grupoGrupoAnalisisMedicoss 
     */
    async updateGrupoAnalisisMedicos(idGrupoAnalisisMedicos: string, grupoGrupoAnalisisMedicoss: GrupoAnalisisMedicosI): Promise<any> {
        return await this.grupoGrupoAnalisisMedicossModel.updateOne({ _id: idGrupoAnalisisMedicos }, grupoGrupoAnalisisMedicoss);
    }

    /**
     * Busca un grupoGrupoAnalisisMedicoss por su ID y lo elimina de la BD
     * @param idGrupoAnalisisMedicos 
     */
    async deleteGrupoAnalisisMedicos(idGrupoAnalisisMedicos: string ): Promise<GrupoAnalisisMedicosI> {
        return await this.grupoGrupoAnalisisMedicossModel.findOneAndDelete({ _id: idGrupoAnalisisMedicos });
    }

}
