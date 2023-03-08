import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { AnalisisMedicoI } from 'src/interfaces/analisis-medico.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AnalisisMedicoService {

    constructor(@InjectModel('AnalisisMedico') private readonly analisisMedicoModel : Model<AnalisisMedicoI>) {}

    /**
     * Muestra todos los analisisMedicos de la BD
     */
    async showAllAnalisisMedicos(): Promise<AnalisisMedicoI[]> {
        return await this.analisisMedicoModel.find();
    }

    /**
     * Busca solo un analisisMedico mediante su ID en la BD
     * @param idAnalisisMedico 
     */
    async findAnalisisMedicoById(idAnalisisMedico: string): Promise<AnalisisMedicoI> {
        return await this.analisisMedicoModel.findOne( { _id: idAnalisisMedico } );
    }

    /**
     * Busca solo un analisisMedico mediante su numero de empleado en la BD
     * @param idAnalisisMedico 
     */
    async findAnalisisMedicoByEmployeeNumber(employeeNumber: string): Promise<AnalisisMedicoI> {
        return await this.analisisMedicoModel.findOne( { numero_empleado: employeeNumber } );
    }

    /**
     * Genera un nuevo analisisMedico en la BD
     * @param analisisMedico 
     */
    async createAnalisisMedico(analisisMedico: AnalisisMedicoI): Promise<AnalisisMedicoI> {
        const newAnalisisMedico = new this.analisisMedicoModel(analisisMedico);
        return await newAnalisisMedico.save();
    }

    /**
     * Busca un analisisMedico por su Id para poder actualizarlo
     * @param idAnalisisMedico 
     * @param analisisMedico 
     */
    async updateAnalisisMedico(idAnalisisMedico: string, analisisMedico: AnalisisMedicoI): Promise<any> {
        return await this.analisisMedicoModel.updateOne({ _id: idAnalisisMedico }, analisisMedico);
    }

    /**
     * Busca un analisisMedico por su ID y lo elimina de la BD
     * @param idAnalisisMedico 
     */
    async deleteAnalisisMedico(idAnalisisMedico: string ): Promise<AnalisisMedicoI> {
        return await this.analisisMedicoModel.findOneAndDelete({ _id: idAnalisisMedico });
    }

}
