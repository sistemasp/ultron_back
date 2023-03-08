import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { TipoMedicamentoI } from 'src/interfaces/tipo-medicamento.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TipoMedicamentoService {

    constructor(@InjectModel('TipoMedicamento') private readonly tipoMedicamentoModel : Model<TipoMedicamentoI>) {}

    /**
     * Muestra todos los tipoMedicamentos de la BD
     */
    async showAllTipoMedicamentos(): Promise<TipoMedicamentoI[]> {
        return await this.tipoMedicamentoModel.find();
    }

    /**
     * Busca solo un tipoMedicamento mediante su ID en la BD
     * @param idTipoMedicamento 
     */
    async findTipoMedicamentoById(idTipoMedicamento: string): Promise<TipoMedicamentoI> {
        return await this.tipoMedicamentoModel.findOne( { _id: idTipoMedicamento } );
    }

    /**
     * Busca solo un tipoMedicamento mediante su numero de empleado en la BD
     * @param idTipoMedicamento 
     */
    async findTipoMedicamentoByEmployeeNumber(employeeNumber: string): Promise<TipoMedicamentoI> {
        return await this.tipoMedicamentoModel.findOne( { numero_empleado: employeeNumber } );
    }

    /**
     * Genera un nuevo tipoMedicamento en la BD
     * @param tipoMedicamento 
     */
    async createTipoMedicamento(tipoMedicamento: TipoMedicamentoI): Promise<TipoMedicamentoI> {
        const newTipoMedicamento = new this.tipoMedicamentoModel(tipoMedicamento);
        return await newTipoMedicamento.save();
    }

    /**
     * Busca un tipoMedicamento por su Id para poder actualizarlo
     * @param idTipoMedicamento 
     * @param tipoMedicamento 
     */
    async updateTipoMedicamento(idTipoMedicamento: string, tipoMedicamento: TipoMedicamentoI): Promise<any> {
        return await this.tipoMedicamentoModel.updateOne({ _id: idTipoMedicamento }, tipoMedicamento);
    }

    /**
     * Busca un tipoMedicamento por su ID y lo elimina de la BD
     * @param idTipoMedicamento 
     */
    async deleteTipoMedicamento(idTipoMedicamento: string ): Promise<TipoMedicamentoI> {
        return await this.tipoMedicamentoModel.findOneAndDelete({ _id: idTipoMedicamento });
    }

}
