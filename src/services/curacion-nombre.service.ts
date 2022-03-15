import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CuracionNombreI } from 'src/interfaces/curacion-nombre.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CuracionNombreService {

    constructor(@InjectModel('CuracionNombre') private readonly curacionNombreModel: Model<CuracionNombreI>) { }

    /**
     * Muestra todos los curacionNombres de la BD
     */
    async showAllCuracionNombres(): Promise<CuracionNombreI[]> {
        return await this.curacionNombreModel.find({ is_active: true }).sort('nombre');
    }

    /**
     * Busca solo un curacionNombre mediante su ID en la BD
     * @param idCuracionNombre 
     */
    async findCuracionNombreById(idCuracionNombre: string): Promise<CuracionNombreI> {
        return await this.curacionNombreModel.findOne({ _id: idCuracionNombre });
    }

    /**
     * Busca solo un curacionNombre mediante su numero de empleado en la BD
     * @param idCuracionNombre 
     */
    async findCuracionNombreByEmployeeNumber(employeeNumber: string): Promise<CuracionNombreI> {
        return await this.curacionNombreModel.findOne({ numero_empleado: employeeNumber });
    }

    /**
     * Genera un nuevo curacionNombre en la BD
     * @param curacionNombre 
     */
    async createCuracionNombre(curacionNombre: CuracionNombreI): Promise<CuracionNombreI> {
        const newCuracionNombre = new this.curacionNombreModel(curacionNombre);
        return await newCuracionNombre.save();
    }

    /**
     * Busca un curacionNombre por su Id para poder actualizarlo
     * @param idCuracionNombre 
     * @param curacionNombre 
     */
    async updateCuracionNombre(idCuracionNombre: string, curacionNombre: CuracionNombreI): Promise<any> {
        return await this.curacionNombreModel.updateOne({ _id: idCuracionNombre }, curacionNombre);
    }

    /**
     * Busca un curacionNombre por su ID y lo elimina de la BD
     * @param idCuracionNombre 
     */
    async deleteCuracionNombre(idCuracionNombre: string): Promise<CuracionNombreI> {
        return await this.curacionNombreModel.findOneAndDelete({ _id: idCuracionNombre });
    }

}
