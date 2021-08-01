import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { TipoSalidaI } from 'src/interfaces/tipo-salida.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TipoSalidaService {

    constructor(@InjectModel('TipoSalida') private readonly tipoSalidaModel: Model<TipoSalidaI>) { }

    /**
     * Muestra todos los tipoSalidas de la BD
     */
    async showAllTipoSalidas(): Promise<TipoSalidaI[]> {
        return await this.tipoSalidaModel.find({
            is_active: true,
            is_visible: true,
        }).sort('nombre');
    }

    /**
     * Busca solo un tipoSalida mediante su ID en la BD
     * @param idTipoSalida 
     */
    async findTipoSalidaById(idTipoSalida: string): Promise<TipoSalidaI> {
        return await this.tipoSalidaModel.findOne({ _id: idTipoSalida });
    }

    /**
     * Busca solo un tipoSalida mediante su numero de empleado en la BD
     * @param idTipoSalida 
     */
    async findTipoSalidaByEmployeeNumber(employeeNumber: string): Promise<TipoSalidaI> {
        return await this.tipoSalidaModel.findOne({ numero_empleado: employeeNumber });
    }

    /**
     * Genera un nuevo tipoSalida en la BD
     * @param tipoSalida 
     */
    async createTipoSalida(tipoSalida: TipoSalidaI): Promise<TipoSalidaI> {
        const newTipoSalida = new this.tipoSalidaModel(tipoSalida);
        return await newTipoSalida.save();
    }

    /**
     * Busca un tipoSalida por su Id para poder actualizarlo
     * @param idTipoSalida 
     * @param tipoSalida 
     */
    async updateTipoSalida(idTipoSalida: string, tipoSalida: TipoSalidaI): Promise<any> {
        return await this.tipoSalidaModel.updateOne({ _id: idTipoSalida }, tipoSalida);
    }

    /**
     * Busca un tipoSalida por su ID y lo elimina de la BD
     * @param idTipoSalida 
     */
    async deleteTipoSalida(idTipoSalida: string): Promise<TipoSalidaI> {
        return await this.tipoSalidaModel.findOneAndDelete({ _id: idTipoSalida });
    }

}
