import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CuracionAreaI } from 'src/interfaces/curacion-area.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CuracionAreaService {

    constructor(@InjectModel('CuracionArea') private readonly curacionAreaModel: Model<CuracionAreaI>) { }

    /**
     * Muestra todos los curacionAreas de la BD
     */
    async showAllCuracionAreas(): Promise<CuracionAreaI[]> {
        return await this.curacionAreaModel.find({ is_active: true }).sort('area');
    }

    /**
     * Busca solo un curacionArea mediante su ID en la BD
     * @param idCuracionArea 
     */
    async findCuracionAreaById(idCuracionArea: string): Promise<CuracionAreaI> {
        return await this.curacionAreaModel.findOne({ _id: idCuracionArea });
    }

    /**
     * Busca solo un curacionArea mediante su numero de empleado en la BD
     * @param idCuracionArea 
     */
    async findCuracionAreaByEmployeeNumber(employeeNumber: string): Promise<CuracionAreaI> {
        return await this.curacionAreaModel.findOne({ numero_empleado: employeeNumber });
    }

    /**
     * Genera un nuevo curacionArea en la BD
     * @param curacionArea 
     */
    async createCuracionArea(curacionArea: CuracionAreaI): Promise<CuracionAreaI> {
        const newCuracionArea = new this.curacionAreaModel(curacionArea);
        return await newCuracionArea.save();
    }

    /**
     * Busca un curacionArea por su Id para poder actualizarlo
     * @param idCuracionArea 
     * @param curacionArea 
     */
    async updateCuracionArea(idCuracionArea: string, curacionArea: CuracionAreaI): Promise<any> {
        return await this.curacionAreaModel.updateOne({ _id: idCuracionArea }, curacionArea);
    }

    /**
     * Busca un curacionArea por su ID y lo elimina de la BD
     * @param idCuracionArea 
     */
    async deleteCuracionArea(idCuracionArea: string): Promise<CuracionAreaI> {
        return await this.curacionAreaModel.findOneAndDelete({ _id: idCuracionArea });
    }

}
