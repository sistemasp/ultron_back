import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { LaboratorioI } from 'src/interfaces/laboratorio.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class LaboratorioService {

    constructor(@InjectModel('Laboratorio') private readonly laboratorioModel: Model<LaboratorioI>) { }

    /**
     * Muestra todos los laboratorios de la BD
     */
    async showAllLaboratorios(): Promise<LaboratorioI[]> {
        return await this.laboratorioModel.find({ is_active: true }).sort('nombre');
    }

    /**
     * Busca solo un laboratorio mediante su ID en la BD
     * @param idLaboratorio 
     */
    async findLaboratorioById(idLaboratorio: string): Promise<LaboratorioI> {
        return await this.laboratorioModel.findOne({ _id: idLaboratorio });
    }

    /**
     * Busca solo un laboratorio mediante su numero de empleado en la BD
     * @param idLaboratorio 
     */
    async findLaboratorioByEmployeeNumber(employeeNumber: string): Promise<LaboratorioI> {
        return await this.laboratorioModel.findOne({ numero_empleado: employeeNumber });
    }

    /**
     * Genera un nuevo laboratorio en la BD
     * @param laboratorio 
     */
    async createLaboratorio(laboratorio: LaboratorioI): Promise<LaboratorioI> {
        const newLaboratorio = new this.laboratorioModel(laboratorio);
        return await newLaboratorio.save();
    }

    /**
     * Busca un laboratorio por su Id para poder actualizarlo
     * @param idLaboratorio 
     * @param laboratorio 
     */
    async updateLaboratorio(idLaboratorio: string, laboratorio: LaboratorioI): Promise<any> {
        return await this.laboratorioModel.updateOne({ _id: idLaboratorio }, laboratorio);
    }

    /**
     * Busca un laboratorio por su ID y lo elimina de la BD
     * @param idLaboratorio 
     */
    async deleteLaboratorio(idLaboratorio: string): Promise<LaboratorioI> {
        return await this.laboratorioModel.findOneAndDelete({ _id: idLaboratorio });
    }

}
