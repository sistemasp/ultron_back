import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { PagoAnticipadoI } from 'src/interfaces/pago-anticipado.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PagoAnticipadoService {

    constructor(@InjectModel('PagoAnticipado') private readonly pagoAnticipadoModel: Model<PagoAnticipadoI>) { }

    /**
     * Muestra todos los pagoAnticipados de la BD
     */
    async showAllPagoAnticipados(): Promise<PagoAnticipadoI[]> {
        return await this.pagoAnticipadoModel.find().sort('fecha_pago');
    }

    /**
     * Busca solo un pagoAnticipado mediante su ID en la BD
     * @param idPagoAnticipado 
     */
    async findPagoAnticipadoById(idPagoAnticipado: string): Promise<PagoAnticipadoI> {
        return await this.pagoAnticipadoModel.findOne({ _id: idPagoAnticipado });
    }

    /**
     * Busca solo un pagoAnticipado mediante su numero de empleado en la BD
     * @param idPagoAnticipado 
     */
    async findPagoAnticipadoByEmployeeNumber(employeeNumber: string): Promise<PagoAnticipadoI> {
        return await this.pagoAnticipadoModel.findOne({ numero_empleado: employeeNumber });
    }

    /**
     * Muestra todos los pagoAnticipados de la BD
     */
    async showAllPagoAnticipadosByPaciente(pacienteId): Promise<PagoAnticipadoI[]> {
        return await this.pagoAnticipadoModel.find({
            paciente: pacienteId
        }).sort('fecha_pago');
    }

    /**
     * Genera un nuevo pagoAnticipado en la BD
     * @param pagoAnticipado 
     */
    async createPagoAnticipado(pagoAnticipado: PagoAnticipadoI): Promise<PagoAnticipadoI> {
        const newPagoAnticipado = new this.pagoAnticipadoModel(pagoAnticipado);
        newPagoAnticipado.populate(
            {
                path: "dermatologo",
            })
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
                    path: "sesiones_anticipadas",
                })
            .populate(
                {
                    path: "sucursal",
                })
            .populate(
                {
                    path: "tipo_cita",
                }).execPopulate();
        return await newPagoAnticipado.save();
    }

    /**
     * Busca un pagoAnticipado por su Id para poder actualizarlo
     * @param idPagoAnticipado 
     * @param pagoAnticipado 
     */
    async updatePagoAnticipado(idPagoAnticipado: string, pagoAnticipado: PagoAnticipadoI): Promise<any> {
        return await this.pagoAnticipadoModel.updateOne({ _id: idPagoAnticipado }, pagoAnticipado);
    }

    /**
     * Busca un pagoAnticipado por su ID y lo elimina de la BD
     * @param idPagoAnticipado 
     */
    async deletePagoAnticipado(idPagoAnticipado: string): Promise<PagoAnticipadoI> {
        return await this.pagoAnticipadoModel.findOneAndDelete({ _id: idPagoAnticipado });
    }

}
