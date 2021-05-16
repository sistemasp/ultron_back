import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { OcupacionI } from 'src/interfaces/ocupacion.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class OcupacionService {

    constructor(@InjectModel('Ocupacion') private readonly ocupacionModel: Model<OcupacionI>) { }

    /**
     * Muestra todos los ocupacions de la BD
     */
    async showAllOcupacions(): Promise<OcupacionI[]> {
        return await this.ocupacionModel.find({ is_active: true }).sort('nombre');
    }

    /**
     * Busca solo un ocupacion mediante su ID en la BD
     * @param idOcupacion 
     */
    async findOcupacionById(idOcupacion: string): Promise<OcupacionI> {
        return await this.ocupacionModel.findOne({ _id: idOcupacion });
    }

    /**
     * Busca solo un ocupacion mediante su numero de empleado en la BD
     * @param idOcupacion 
     */
    async findOcupacionByEmployeeNumber(employeeNumber: string): Promise<OcupacionI> {
        return await this.ocupacionModel.findOne({ numero_empleado: employeeNumber });
    }

    /**
     * Genera un nuevo ocupacion en la BD
     * @param ocupacion 
     */
    async createOcupacion(ocupacion: OcupacionI): Promise<OcupacionI> {
        const newOcupacion = new this.ocupacionModel(ocupacion);
        return await newOcupacion.save();
    }

    /**
     * Busca un ocupacion por su Id para poder actualizarlo
     * @param idOcupacion 
     * @param ocupacion 
     */
    async updateOcupacion(idOcupacion: string, ocupacion: OcupacionI): Promise<any> {
        return await this.ocupacionModel.updateOne({ _id: idOcupacion }, ocupacion);
    }

    /**
     * Busca un ocupacion por su ID y lo elimina de la BD
     * @param idOcupacion 
     */
    async deleteOcupacion(idOcupacion: string): Promise<OcupacionI> {
        return await this.ocupacionModel.findOneAndDelete({ _id: idOcupacion });
    }

}
