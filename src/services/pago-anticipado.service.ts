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
        })
            .populate('sucursal')
            .populate('pagos')
            .populate(
                {
                    path: "sesiones_anticipadas",
                })
            .populate(
                {
                    path: "sesiones_anticipadas",
                    populate: {
                        path: "sucursal"
                    }
                })
            .populate(
                {
                    path: "sesiones_anticipadas",
                    populate: {
                        path: "servicio"
                    }
                })
            .populate(
                {
                    path: "sesiones_anticipadas",
                    populate: {
                        path: "pagos"
                    }
                })
            .sort('fecha_pago');
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
                    path: "sesiones_anticipadas",
                    populate: {
                        path: "recepcionista"
                    }
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
     * Muestra todos los faciales de la BD que correspondan a un pagos de un dermatologo por horas
     */
    async findPagosAnticipadssByPayOfDoctorFechaPago(sucursalId, dermatologoId, hora_apertura, hora_cierre): Promise<PagoAnticipadoI[]> {
        let startDate = new Date(hora_apertura);
        let endDate = new Date(hora_cierre);

        return await this.pagoAnticipadoModel.find(
            {
                fecha_pago: { $gte: startDate, $lte: endDate },
                sucursal: sucursalId,
                dermatologo: dermatologoId,
            }).sort({
                fecha_pago: -1
            })
            .populate(
                {
                    path: "dermatologo",
                })
            .populate(
                {
                    path: "paciente",
                })
            .populate(
                {
                    path: "pagos",
                    populate: {
                        path: "forma_pago"
                    }
                })
            .populate(
                {
                    path: "servicio",
                })
            .populate(
                {
                    path: "sesiones_anticipadas",
                    populate: {
                        path: "paciente"
                    }
                })
            .populate(
                {
                    path: "sesiones_anticipadas",
                    populate: {
                        path: "servicio"
                    }
                })
            .populate(
                {
                    path: "sesiones_anticipadas",
                    populate: {
                        path: "tipo_cita"
                    }
                })
            .populate(
                {
                    path: "sesiones_anticipadas",
                    populate: {
                        path: "recepcionista"
                    }
                })
            .populate(
                {
                    path: "sucursal",
                })
            .populate(
                {
                    path: "tipo_cita",
                });
    }

    /**
     * Muestra todas las aparatologias de la BD que correspondan a una fecha y una sucursal
     * 
     * @param anioi 
     * @param mesi 
     * @param diai 
     * @param aniof 
     * @param mesf 
     * @param diaf 
     * @param sucursalId 
     * @returns 
     */
    async findPagoAnticipadoByRangeDateAndSucursal(anioi, mesi, diai, aniof, mesf, diaf, sucursalId): Promise<PagoAnticipadoI[]> {
        let startDate = new Date(anioi, mesi, diai);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(aniof, mesf, diaf);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.pagoAnticipadoModel.find(
            {
                fecha_pago: { $gte: startDate, $lte: endDate },
                sucursal: sucursalId,
            })
            .sort({
                fecha_pago: 1
            })
            .populate(
                {
                    path: "dermatologo",
                })
            .populate(
                {
                    path: "factura",
                    populate: {
                        path: "paciente"
                    }
                })
            .populate(
                {
                    path: "factura",
                    populate: {
                        path: "razon_social"
                    }
                })
            .populate(
                {
                    path: "factura",
                    populate: {
                        path: "sucursal"
                    }
                })
            .populate(
                {
                    path: "factura",
                    populate: {
                        path: "tipo_servicio"
                    }
                })
            .populate(
                {
                    path: "factura",
                    populate: {
                        path: "uso_cfdi"
                    }
                })
            .populate(
                {
                    path: "paciente",
                })
            .populate(
                {
                    path: "pagos",
                    populate: {
                        path: "forma_pago"
                    }
                })
            .populate(
                {
                    path: "servicio",
                })
            .populate(
                {
                    path: "sesiones_anticipadas",
                    populate: {
                        path: "dermatologo"
                    }
                })
            .populate(
                {
                    path: "sesiones_anticipadas",
                    populate: {
                        path: "frecuencia"
                    }
                })
            .populate(
                {
                    path: "sesiones_anticipadas",
                    populate: {
                        path: "paciente"
                    }
                })
            .populate(
                {
                    path: "sesiones_anticipadas",
                    populate: {
                        path: "pagos"
                    }
                })
            .populate(
                {
                    path: "sesiones_anticipadas",
                    populate: {
                        path: "recepcionista"
                    }
                })
            .populate(
                {
                    path: "sesiones_anticipadas",
                    populate: {
                        path: "servicio"
                    }
                })
            .populate(
                {
                    path: "sesiones_anticipadas",
                    populate: {
                        path: "sucursal"
                    }
                })
            .populate(
                {
                    path: "sesiones_anticipadas",
                    populate: {
                        path: "tipo_cita"
                    }
                })
            .populate(
                {
                    path: "sucursal",
                })
            .populate(
                {
                    path: "tipo_cita",
                });
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
