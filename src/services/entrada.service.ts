import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { EntradaI } from 'src/interfaces/entrada.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class EntradaService {

    constructor(@InjectModel('Entrada') private readonly entradaModel : Model<EntradaI>) {}

    /**
     * Muestra todos los entradas de la BD
     */
    async showAllEntradas(): Promise<EntradaI[]> {
        return await this.entradaModel.find()
        .sort('create_date')
        .populate('recepcionista')
        .populate('tipo_entrada')
        .populate('pago')
        .populate('sucursal')
        .populate('forma_pago')
        ;
    }

    /**
     * Busca solo un entrada mediante su ID en la BD
     * @param idEntrada 
     */
    async findEntradaById(idEntrada: string): Promise<EntradaI> {
        return await this.entradaModel.findOne( { _id: idEntrada } );
    }

    /**
     * Busca solo un entrada mediante su ID en la BD
     * @param idPago 
     */
    /*async findEntradaByPago(idPago: string): Promise<EntradaI> {
        const response = idPago !== 'undefined' ? await this.entradaModel.findOne( { pago: idPago } ) : '';
        return response;
    }*/

    /**
     * Muestra todos los entradas de la BD
     */
    async showEntradasTodayBySucursalAndTurno(sucursalId, turno): Promise<EntradaI[]> {
        let startDate = new Date();
        startDate.setHours(turno === 'm' ? 0 : (startDate.getDay() === 6 ? 13 : 14));
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date();
        endDate.setHours(turno === 'm' ? (endDate.getDay() === 6 ? 12 : 13) : 23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.entradaModel.find({
            create_date: { $gte: startDate, $lte: endDate },
            sucursal: sucursalId,
        })
        .sort('create_date')
        .populate('recepcionista')
        .populate('tipo_entrada')
        .populate('sucursal')
        .populate('pago')
        .populate('forma_pago');
    }

    /**
     * Muestra todos los entradas de la BD
     */
    async showEntradasTodayBySucursalAndHoraAplicacion(sucursalId, hora_apertura, hora_cierre): Promise<EntradaI[]> {
        let startDate = new Date(hora_apertura);
        let endDate = new Date(hora_cierre);        
        return await this.entradaModel.find({
            hora_aplicacion: { $gte: startDate, $lt: endDate },
            sucursal: sucursalId,
        })
        .sort('hora_aplicacion')
        .populate('recepcionista')
        .populate('tipo_entrada')
        .populate('sucursal')
        .populate('pago')
        .populate('forma_pago');
    }

    /**
     * Muestra todos los entradas de la BD
     */
    async showEntradasTodayBySucursalAndHoraAplicacionPA(sucursalId, hora_apertura, hora_cierre): Promise<EntradaI[]> {
        let startDate = new Date(hora_apertura);
        let endDate = new Date(hora_cierre);
        return await this.entradaModel.find({
            hora_aplicacion: { $gte: startDate, $lt: endDate },
            sucursal: sucursalId,
            pago_anticipado: true,
        })
        .sort('hora_aplicacion')
        .populate('recepcionista')
        .populate('tipo_entrada')
        .populate('sucursal')
        .populate('pago')
        .populate('forma_pago');
    }

    /**
     * Busca solo un entrada mediante su numero de empleado en la BD
     * @param idEntrada 
     */
    async findEntradaByEmployeeNumber(employeeNumber: string): Promise<EntradaI> {
        return await this.entradaModel.findOne( { numero_empleado: employeeNumber } );
    }

    /**
     * Genera un nuevo entrada en la BD
     * @param entrada 
     */
    async createEntrada(entrada: EntradaI): Promise<EntradaI> {
        const newEntrada = new this.entradaModel(entrada);
        return await newEntrada.save();
    }

    /**
     * Busca un entrada por su Id para poder actualizarlo
     * @param idEntrada 
     * @param entrada 
     */
    async updateEntrada(idEntrada: string, entrada: EntradaI): Promise<any> {
        return await this.entradaModel.updateOne({ _id: idEntrada }, entrada);
    }

    /**
     * Busca un entrada por su ID y lo elimina de la BD
     * @param idEntrada 
     */
    async deleteEntrada(idEntrada: string ): Promise<EntradaI> {
        return await this.entradaModel.findOneAndDelete({ _id: idEntrada });
    }

}
