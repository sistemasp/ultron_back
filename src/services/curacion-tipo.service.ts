import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CuracionTipoI } from 'src/interfaces/curacion-tipo.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CuracionTipoService {

    constructor(@InjectModel('CuracionTipo') private readonly curacionTipoModel: Model<CuracionTipoI>) { }

    /**
     * Muestra todos los curacionTipos de la BD
     */
    async showAllCuracionTipos(): Promise<CuracionTipoI[]> {
        return await this.curacionTipoModel.find({ is_active: true }).sort('tipo');
    }

    /**
     * Busca solo un curacionTipo mediante su ID en la BD
     * @param idCuracionTipo 
     */
    async findCuracionTipoById(idCuracionTipo: string): Promise<CuracionTipoI> {
        return await this.curacionTipoModel.findOne({ _id: idCuracionTipo });
    }

    /**
     * Busca solo un curacionTipo mediante su numero de empleado en la BD
     * @param idCuracionTipo 
     */
    async findCuracionTipoByEmployeeNumber(employeeNumber: string): Promise<CuracionTipoI> {
        return await this.curacionTipoModel.findOne({ numero_empleado: employeeNumber });
    }

    /**
     * Genera un nuevo curacionTipo en la BD
     * @param curacionTipo 
     */
    async createCuracionTipo(curacionTipo: CuracionTipoI): Promise<CuracionTipoI> {
        const newCuracionTipo = new this.curacionTipoModel(curacionTipo);
        return await newCuracionTipo.save();
    }

    /**
     * Busca un curacionTipo por su Id para poder actualizarlo
     * @param idCuracionTipo 
     * @param curacionTipo 
     */
    async updateCuracionTipo(idCuracionTipo: string, curacionTipo: CuracionTipoI): Promise<any> {
        return await this.curacionTipoModel.updateOne({ _id: idCuracionTipo }, curacionTipo);
    }

    /**
     * Busca un curacionTipo por su ID y lo elimina de la BD
     * @param idCuracionTipo 
     */
    async deleteCuracionTipo(idCuracionTipo: string): Promise<CuracionTipoI> {
        return await this.curacionTipoModel.findOneAndDelete({ _id: idCuracionTipo });
    }

}
