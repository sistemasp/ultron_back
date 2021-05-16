import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { EspecialidadI } from 'src/interfaces/especialidad.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class EspecialidadService {

    constructor(@InjectModel('Especialidad') private readonly especialidadModel: Model<EspecialidadI>) { }

    /**
     * Muestra todos los especialidads de la BD
     */
    async showAllEspecialidades(): Promise<EspecialidadI[]> {
        return await this.especialidadModel.find({ is_active: true }).sort('nombre');
    }

    /**
     * Busca solo un especialidad mediante su ID en la BD
     * @param idEspecialidad 
     */
    async findEspecialidadById(idEspecialidad: string): Promise<EspecialidadI> {
        return await this.especialidadModel.findOne({ _id: idEspecialidad });
    }

    /**
     * Busca solo un especialidad mediante su numero de empleado en la BD
     * @param idEspecialidad 
     */
    async findEspecialidadByEmployeeNumber(employeeNumber: string): Promise<EspecialidadI> {
        return await this.especialidadModel.findOne({ numero_empleado: employeeNumber });
    }

    /**
     * Genera un nuevo especialidad en la BD
     * @param especialidad 
     */
    async createEspecialidad(especialidad: EspecialidadI): Promise<EspecialidadI> {
        const newEspecialidad = new this.especialidadModel(especialidad);
        return await newEspecialidad.save();
    }

    /**
     * Busca un especialidad por su Id para poder actualizarlo
     * @param idEspecialidad 
     * @param especialidad 
     */
    async updateEspecialidad(idEspecialidad: string, especialidad: EspecialidadI): Promise<any> {
        return await this.especialidadModel.updateOne({ _id: idEspecialidad }, especialidad);
    }

    /**
     * Busca un especialidad por su ID y lo elimina de la BD
     * @param idEspecialidad 
     */
    async deleteEspecialidad(idEspecialidad: string): Promise<EspecialidadI> {
        return await this.especialidadModel.findOneAndDelete({ _id: idEspecialidad });
    }

}
