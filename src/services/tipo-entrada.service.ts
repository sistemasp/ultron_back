import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { TipoEntradaI } from 'src/interfaces/tipo-entrada.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TipoEntradaService {

    constructor(@InjectModel('TipoEntrada') private readonly tipoEntradaModel : Model<TipoEntradaI>) {}

    /**
     * Muestra todos los tipoEntradas de la BD
     */
    async showAllTipoEntradas(): Promise<TipoEntradaI[]> {
        return await this.tipoEntradaModel.find().sort('nombre');
    }

    /**
     * Busca solo un tipoEntrada mediante su ID en la BD
     * @param idTipoEntrada 
     */
    async findTipoEntradaById(idTipoEntrada: string): Promise<TipoEntradaI> {
        return await this.tipoEntradaModel.findOne( { _id: idTipoEntrada } );
    }

    /**
     * Busca solo un tipoEntrada mediante su numero de empleado en la BD
     * @param idTipoEntrada 
     */
    async findTipoEntradaByEmployeeNumber(employeeNumber: string): Promise<TipoEntradaI> {
        return await this.tipoEntradaModel.findOne( { numero_empleado: employeeNumber } );
    }

    /**
     * Genera un nuevo tipoEntrada en la BD
     * @param tipoEntrada 
     */
    async createTipoEntrada(tipoEntrada: TipoEntradaI): Promise<TipoEntradaI> {
        const newTipoEntrada = new this.tipoEntradaModel(tipoEntrada);
        return await newTipoEntrada.save();
    }

    /**
     * Busca un tipoEntrada por su Id para poder actualizarlo
     * @param idTipoEntrada 
     * @param tipoEntrada 
     */
    async updateTipoEntrada(idTipoEntrada: string, tipoEntrada: TipoEntradaI): Promise<any> {
        return await this.tipoEntradaModel.updateOne({ _id: idTipoEntrada }, tipoEntrada);
    }

    /**
     * Busca un tipoEntrada por su ID y lo elimina de la BD
     * @param idTipoEntrada 
     */
    async deleteTipoEntrada(idTipoEntrada: string ): Promise<TipoEntradaI> {
        return await this.tipoEntradaModel.findOneAndDelete({ _id: idTipoEntrada });
    }

}
