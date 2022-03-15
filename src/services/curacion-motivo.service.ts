import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CuracionMotivoI } from 'src/interfaces/curacion-motivo.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CuracionMotivoService {

    constructor(@InjectModel('CuracionMotivo') private readonly curacionMotivoModel: Model<CuracionMotivoI>) { }

    /**
     * Muestra todos los curacionMotivos de la BD
     */
    async showAllCuracionMotivos(): Promise<CuracionMotivoI[]> {
        return await this.curacionMotivoModel.find({ is_active: true }).sort('motivo');
    }

    /**
     * Busca solo un curacionMotivo mediante su ID en la BD
     * @param idCuracionMotivo 
     */
    async findCuracionMotivoById(idCuracionMotivo: string): Promise<CuracionMotivoI> {
        return await this.curacionMotivoModel.findOne({ _id: idCuracionMotivo });
    }

    /**
     * Busca solo un curacionMotivo mediante su numero de empleado en la BD
     * @param idCuracionMotivo 
     */
    async findCuracionMotivoByEmployeeNumber(employeeNumber: string): Promise<CuracionMotivoI> {
        return await this.curacionMotivoModel.findOne({ numero_empleado: employeeNumber });
    }

    /**
     * Genera un nuevo curacionMotivo en la BD
     * @param curacionMotivo 
     */
    async createCuracionMotivo(curacionMotivo: CuracionMotivoI): Promise<CuracionMotivoI> {
        const newCuracionMotivo = new this.curacionMotivoModel(curacionMotivo);
        return await newCuracionMotivo.save();
    }

    /**
     * Busca un curacionMotivo por su Id para poder actualizarlo
     * @param idCuracionMotivo 
     * @param curacionMotivo 
     */
    async updateCuracionMotivo(idCuracionMotivo: string, curacionMotivo: CuracionMotivoI): Promise<any> {
        return await this.curacionMotivoModel.updateOne({ _id: idCuracionMotivo }, curacionMotivo);
    }

    /**
     * Busca un curacionMotivo por su ID y lo elimina de la BD
     * @param idCuracionMotivo 
     */
    async deleteCuracionMotivo(idCuracionMotivo: string): Promise<CuracionMotivoI> {
        return await this.curacionMotivoModel.findOneAndDelete({ _id: idCuracionMotivo });
    }

}
