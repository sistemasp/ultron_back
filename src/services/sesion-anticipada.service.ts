import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { SesionAnticipadaI } from 'src/interfaces/sesion-anticipada.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SesionAnticipadaService {

    constructor(@InjectModel('SesionAnticipada') private readonly sesionAnticipadaModel: Model<SesionAnticipadaI>) { }

    /**
     * Muestra todos los sesionAnticipadas de la BD
     */
    async showAllSesionAnticipadas(): Promise<SesionAnticipadaI[]> {
        return await this.sesionAnticipadaModel.find().sort('nombre');
    }

    /**
     * Busca solo un sesionAnticipada mediante su ID en la BD
     * @param idSesionAnticipada 
     */
    async findSesionAnticipadaById(idSesionAnticipada: string): Promise<SesionAnticipadaI> {
        return await this.sesionAnticipadaModel.findOne({ _id: idSesionAnticipada });
    }

    /**
     * Busca solo un sesionAnticipada mediante su numero de empleado en la BD
     * @param idSesionAnticipada 
     */
    async findSesionAnticipadaByEmployeeNumber(employeeNumber: string): Promise<SesionAnticipadaI> {
        return await this.sesionAnticipadaModel.findOne({ numero_empleado: employeeNumber });
    }

    /**
     * Muestra todas las Sesiones anticipadas por pacienteId de la BD
     */
    async showAllSesionesAnticipadasByPaciente(pacienteId): Promise<SesionAnticipadaI[]> {
        let startDate = new Date();
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date();
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.sesionAnticipadaModel.find({
            paciente: pacienteId,
            fecha_pago: { $gte: startDate, $lte: endDate },
            pagado: false,
        }).sort('fecha_pago')
            .populate(
                {
                    path: "paciente",
                })
            .populate(
                {
                    path: "servicio",
                })
            .populate(
                {
                    path: "sucursal",
                });
    }

    /**
     * Genera un nuevo sesionAnticipada en la BD
     * @param sesionAnticipada 
     */
    async createSesionAnticipada(sesionAnticipada: SesionAnticipadaI): Promise<SesionAnticipadaI> {
        const newSesionAnticipada = new this.sesionAnticipadaModel(sesionAnticipada);
        return await newSesionAnticipada.save();
    }

    /**
     * Busca un sesionAnticipada por su Id para poder actualizarlo
     * @param idSesionAnticipada 
     * @param sesionAnticipada 
     */
    async updateSesionAnticipada(idSesionAnticipada: string, sesionAnticipada: SesionAnticipadaI): Promise<any> {
        return await this.sesionAnticipadaModel.updateOne({ _id: idSesionAnticipada }, sesionAnticipada);
    }

    /**
     * Busca un sesionAnticipada por su ID y lo elimina de la BD
     * @param idSesionAnticipada 
     */
    async deleteSesionAnticipada(idSesionAnticipada: string): Promise<SesionAnticipadaI> {
        return await this.sesionAnticipadaModel.findOneAndDelete({ _id: idSesionAnticipada });
    }

}
