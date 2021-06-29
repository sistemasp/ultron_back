import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { SalidaI } from 'src/interfaces/salida.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SalidaService {

    constructor(@InjectModel('Salida') private readonly salidaModel: Model<SalidaI>) { }

    /**
     * Muestra todos los salidas de la BD
     */
    async showAllSalidas(): Promise<SalidaI[]> {
        return await this.salidaModel.find().sort('nombre');
    }

    /**
     * Busca solo un salida mediante su ID en la BD
     * @param idSalida 
     */
    async findSalidaById(idSalida: string): Promise<SalidaI> {
        return await this.salidaModel.findOne({ _id: idSalida });
    }

    /**
     * Muestra todos los salidas del turno de la BD
     */
    async showSalidasTodayBySucursalAndTurno(sucursalId, turno): Promise<SalidaI[]> {
        let startDate = new Date();
        startDate.setHours(turno === 'm' ? 0 : (startDate.getDay() === 6 ? 13 : 14));
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date();
        endDate.setHours(turno === 'm' ? (endDate.getDay() === 6 ? 12 : 13) : 23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.salidaModel.find({
            create_date: { $gte: startDate, $lte: endDate },
            sucursal: sucursalId,
        })
            .sort('create_date')
            .populate('recepcionista')
            .populate('tipo_salida')
            .populate('sucursal')
            .populate('forma_pago');
    }

    /**
     * Muestra todos los salidas del turno de la BD
     */
    async showSalidasTodayBySucursalAndHoraAplicacion(sucursalId, hora_apertura, hora_cierre): Promise<SalidaI[]> {
        let startDate = new Date(hora_apertura);
        let endDate = new Date(hora_cierre);
        return await this.salidaModel.find({
            hora_aplicacion: { $gte: startDate, $lt: endDate },
            sucursal: sucursalId,
        })
            .sort('hora_aplicacion')
            .populate('recepcionista')
            .populate('tipo_salida')
            .populate('sucursal')
            .populate('forma_pago');
    }

    /**
     * Muestra todas las dermapens de la BD que correspondan a una fecha y una sucursal
     */
    async findSalidasByRangeDateAndSucursal(anioi, mesi, diai, aniof, mesf, diaf, sucursalId): Promise<SalidaI[]> {
        let startDate = new Date(anioi, mesi, diai);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(aniof, mesf, diaf);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.salidaModel.find({ hora_aplicacion: { $gte: startDate, $lte: endDate }, sucursal: sucursalId })
            .sort('hora_aplicacion')
            .populate('recepcionista')
            .populate('tipo_salida')
            .populate('sucursal')
            .populate('forma_pago');
    }


    /**
     * Busca solo un salida mediante su numero de empleado en la BD
     * @param idSalida 
     */
    async findSalidaByEmployeeNumber(employeeNumber: string): Promise<SalidaI> {
        return await this.salidaModel.findOne({ numero_empleado: employeeNumber });
    }

    /**
     * Genera un nuevo salida en la BD
     * @param salida 
     */
    async createSalida(salida: SalidaI): Promise<SalidaI> {
        const newSalida = new this.salidaModel(salida);
        return await newSalida.save();
    }

    /**
     * Busca un salida por su Id para poder actualizarlo
     * @param idSalida 
     * @param salida 
     */
    async updateSalida(idSalida: string, salida: SalidaI): Promise<any> {
        return await this.salidaModel.updateOne({ _id: idSalida }, salida);
    }

    /**
     * Busca un salida por su ID y lo elimina de la BD
     * @param idSalida 
     */
    async deleteSalida(idSalida: string): Promise<SalidaI> {
        return await this.salidaModel.findOneAndDelete({ _id: idSalida });
    }

}
