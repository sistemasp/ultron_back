import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CuracionI } from 'src/interfaces/curacion.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CuracionService {

    constructor(
        @InjectModel('Curacion') private readonly curacionModel: Model<CuracionI>) { }

    /**
     * Muestra todos los curacions de la BD
     */
    async showAllCuracions(): Promise<CuracionI[]> {
        return await this.curacionModel.find().sort('nombre')
            .populate('consulta');
    }

    /**
     * Busca solo un curacion mediante su ID en la BD
     * @param idCuracion 
     */
    async findCuracionById(idCuracion: string): Promise<CuracionI> {
        return await this.curacionModel.findOne({ _id: idCuracion })
            .populate('curacion_nombre')
            .populate('curacion_tipo')
            .populate('curacion_area');
    }

    /**
     * Busca solo un curacion mediante su ID en la BD
     * @param consultaId 
     */
    async findCuracionByConsultaId(consultaId): Promise<CuracionI> {
        return await this.curacionModel.findOne({ consulta: consultaId })
            .populate('patologo');
    }

    /**
     * Muestra todas las curacions de la BD que correspondan a una fecha_hora y una sucursal
     */
    async findCuracionByDateAndSucursal(anio, mes, dia, sucursalId): Promise<CuracionI[]> {
        let startDate = new Date(anio, mes, dia);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes, dia);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.curacionModel.find(
            {
                fecha_hora: { $gte: startDate, $lte: endDate },
                sucursal: sucursalId
            }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('curacion_nombre')
            .populate('curacion_tipo')
            .populate('curacion_area')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('forma_pago')
            .populate('servicio')
            .populate('dermatologo')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_cita')
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
            .populate('medio')
            .populate('biopsias')
            .populate('pagos')
            .populate('frecuencia')
            .populate('producto')
            .populate('status');
    }

    /**
     * Busca solo un curacion mediante su numero de empleado en la BD
     * @param idCuracion 
     */
    async findCuracionByEmployeeNumber(employeeNumber: string): Promise<CuracionI> {
        return await this.curacionModel.findOne({ numero_empleado: employeeNumber });
    }

    /**
     * Muestra todas las consultas de la BD que correspondan a un pagos de un dermatologo de algun dia 
     */
    async findCuracionsByPayOfDoctor(anio, mes, dia, sucursalId, dermatologoId): Promise<CuracionI[]> {
        let startDate = new Date(anio, mes, dia);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes, dia);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);

        return await this.curacionModel.find(
            {
                fecha_hora: { $gte: startDate, $lte: endDate },
                sucursal: sucursalId,
                dermatologo: dermatologoId,
                pagado: true,
            }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('pagos');
    }

    /**
     * Muestra todas las curacions de la BD que correspondan a un pagos de un dermatologo de algun dia y turno
     * turno:
     *  1 = MATUTINO
     *  2 = VESPERTINO
     */
    async findCuracionsByPayOfDoctorTurno(anio, mes, dia, sucursalId, dermatologoId, turno): Promise<CuracionI[]> {
        let startDate = new Date(anio, mes, dia);
        startDate.setHours(turno === 'm' ? 0 : (startDate.getDay() === 6 ? 13 : 14));
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes, dia);
        endDate.setHours(turno === 'm' ? (endDate.getDay() === 6 ? 12 : 13) : 23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);

        return await this.curacionModel.find(
            {
                fecha_hora: { $gte: startDate, $lte: endDate },
                sucursal: sucursalId,
                dermatologo: dermatologoId,
                pagado: true,
            }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('pagos');
    }

    /**
     * Muestra todas las curacions de la BD que correspondan a una fecha_hora y una sucursal
     */
    async findCuracionsByRangeDateAndSucursal(anioi, mesi, diai, aniof, mesf, diaf, sucursalId): Promise<CuracionI[]> {
        let startDate = new Date(anioi, mesi, diai);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(aniof, mesf, diaf);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.curacionModel.find({ fecha_hora: { $gte: startDate, $lte: endDate }, sucursal: sucursalId }).sort('consecutivo')
            .populate(
            {
                path: "paciente",
                populate: {
                    path: "sexo"
                }
            })            .populate('sucursal')
            .populate('curacion_motivo')
            .populate('curacion_nombre')
            .populate('curacion_tipo')
            .populate('curacion_area')
            .populate('dermatologo')
            .populate('frecuencia')
            .populate('quien_agenda')
            .populate('tipo_cita')
            .populate(
                {
                    path: "biopsias",
                    populate: {
                        path: "patologo"
                    }
                })
            .populate(
                {
                    path: "factura",
                    populate: {
                        path: "razon_social"
                    }
                })
            .populate('servicio')
            .populate('status')
            .populate('producto')
            .populate('medio')
            .populate('pagos');
    }

    /**
     * Muestra todas las consultas de la BD de una sucursal
     */
    async waitingList(sucursalId, statusAsistioId): Promise<CuracionI[]> {
        let startDate = new Date();
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date();
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.curacionModel.find(
            {
                fecha_hora: { $gte: startDate, $lte: endDate },
                sucursal: sucursalId,
                status: statusAsistioId,
                // pagado: true
            }).sort('hora_llegada')
            .populate('paciente')
            .populate('sucursal')
            .populate('producto')
            .populate('servicio')
            .populate('dermatologo');
    }

    /**
     * Muestra todo el historico de curacions de una persona buscando por su numero de telefono
     */
    async findCuracionsHistoricByPaciente(pacienteId): Promise<CuracionI[]> {
        return await this.curacionModel.find({ paciente: pacienteId }).sort({ 'fecha_hora': -1 })
            .populate('paciente')
            .populate('patologo')
            .populate('sucursal')
            .populate('quien_entrega')
            .populate('quien_recibe')
            .populate('a_quien_se_entrega')
            .populate('quien_lo_entrega')
            .populate('dermatologo')
            .populate('curacion_motivo')
            .populate('curacion_nombre')
            .populate('curacion_tipo')
            .populate('curacion_area')
            .populate('pagos')
            .populate('status');
    }

    /**
     * Muestra todas las curacions de la BD que correspondan a un pagos de un dermatologo por horas
     */
    async findCuracionsByPayOfDoctorHoraAplicacion(sucursalId, dermatologoId, atendidoId, hora_apertura, hora_cierre): Promise<CuracionI[]> {
        let startDate = new Date(hora_apertura);
        let endDate = new Date(hora_cierre);

        return await this.curacionModel.find(
            {
                hora_aplicacion: { $gte: startDate, $lte: endDate },
                sucursal: sucursalId,
                dermatologo: dermatologoId,
                status: atendidoId,
            }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('tipo_cita')
            .populate('forma_pago')
            .populate('curacion_motivo')
            .populate('curacion_nombre')
            .populate('curacion_tipo')
            .populate('curacion_area')
            .populate('producto')
            .populate(
                {
                    path: "pagos",
                    populate: {
                        path: "forma_pago"
                    }
                });
    }

    /**
     * Muestra todas las curacions de la BD que correspondan a un pagos de un dermatologo por horas
     */
    async findCuracionsByPayOfDoctorHoraAplicacionPA(sucursalId, dermatologoId, canceladoCPId, hora_apertura, hora_cierre): Promise<CuracionI[]> {
        let startDate = new Date(hora_apertura);
        let endDate = new Date(hora_cierre);

        return await this.curacionModel.find(
            {
                hora_aplicacion: { $gte: startDate, $lte: endDate },
                sucursal: sucursalId,
                dermatologo: dermatologoId,
                status: canceladoCPId,
            }).sort('consecutivo')
            .populate('paciente')
            .populate('curacion_motivo')
            .populate('curacion_nombre')
            .populate('curacion_tipo')
            .populate('curacion_area')
            .populate('sucursal')
            .populate('tipo_cita')
            .populate('forma_pago')
            .populate('producto')
            .populate('pagos');
    }

    /**
     * Muestra todas las curacions de la BD que correspondan a un pagos de un dermatologo por horas
     */
    async findCuracionsByPayOfPatologoHoraAplicacion(sucursalId, patologoId, hora_apertura, hora_cierre): Promise<CuracionI[]> {
        let startDate = new Date(hora_apertura);
        let endDate = new Date(hora_cierre);

        return await this.curacionModel.find(
            {
                hora_aplicacion: { $gte: startDate, $lte: endDate },
                sucursal: sucursalId,
                patologo: patologoId,
                hasBiopsia: true,
            }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('curacion_motivo')
            .populate('curacion_nombre')
            .populate('curacion_tipo')
            .populate('curacion_area')
            .populate('tipo_cita')
            .populate('dermatologo')
            .populate('pagos');
    }

    /**
     * Genera un nuevo curacion en la BD
     * @param curacion 
     */
    async createCuracion(curacion: CuracionI): Promise<CuracionI> {
        const currentDate = new Date();
        curacion.create_date = new Date(Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(),
            currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds()));
        const newCuracion = new this.curacionModel(curacion);
        return await newCuracion.save();
    }

    /**
     * Busca un curacion por su Id para poder actualizarlo
     * @param idCuracion 
     * @param curacion 
     */
    async updateCuracion(idCuracion: string, curacion: CuracionI): Promise<any> {
        return await this.curacionModel.updateOne({ _id: idCuracion }, curacion);
    }

    /**
     * Busca un curacion por su ID y lo elimina de la BD
     * @param idCuracion 
     */
    async deleteCuracion(idCuracion: string): Promise<CuracionI> {
        return await this.curacionModel.findOneAndDelete({ _id: idCuracion });
    }

}
