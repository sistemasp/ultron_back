import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ConsultaI } from 'src/interfaces/consulta.interface';
import { HorarioI } from 'src/interfaces/horario.interface';
import { AparatologiaService } from './aparatologia.service';
import { BiopsiaService } from './biosia.service';
import { CirugiaService } from './cirugia.service';
import { CitaService } from './cita.service';
import { ConsultaService } from './consulta.service';
import { DermapenService } from './dermapen.service';
import { EsteticaService } from './estetica.service';
import { FacialService } from './facial.service';
import { SucursalService } from './sucursal.service';

@Injectable()
export class HorarioService {

    constructor(@InjectModel('Horario') private readonly horarioModel: Model<HorarioI>,
        private readonly sucursalService: SucursalService,
        private readonly consultaService: ConsultaService,
        private readonly biopsiaService: BiopsiaService,
        private readonly cirugiaService: CirugiaService,
        private readonly esteticaService: EsteticaService,
        private readonly dermapenService: DermapenService,
        private readonly facialService: FacialService,
        private readonly aparatologiaService: AparatologiaService,

    ) { }

    /**
     * Muestra todos los horarios de la BD
     */
    async showAllSchedules(): Promise<HorarioI[]> {
        return await this.horarioModel.find().sort('hora')
            .populate('servicio');
    }

    /**
     * Busca solo un horario mediante su ID en la BD
     * @param idHorario 
     */
    async findScheduleById(idHorario: string): Promise<HorarioI> {
        return await this.horarioModel.findOne({ _id: idHorario })
            .populate('servicio');
    }

    /**
     * Muestra todos los horarios de la BD
     */
    async findSchedulesByService(idService): Promise<HorarioI[]> {
        return await this.horarioModel.find({ servicio: idService }).sort('hora')
            .populate('servicio');
    }

    /**
     * Muestra todos los horarios de la BD por sucursal y servicio
     */
    async findSchedulesBySucursalAndServicio(idSucursal, idService): Promise<HorarioI[]> {
        return await this.horarioModel.find(
            {
                servicio: idService,
                sucursal: idSucursal
            }).sort('hora');
    }

    /**
     * Muestra todos los horarios de la BD por sucursal y servicio
     */
    async findSchedulesBySucursalServicioAndDate(idSucursal, idService, anio, mes, dia): Promise<HorarioI[]> {
        return await this.horarioModel.find(
            {
                servicio: idService,
                sucursal: idSucursal
            }).sort('hora');
    }

    compararHorario(horaCita: String, duracionCita: String, horario: String): Boolean {
        const splitHoraCita = horaCita.split(':');
        const minCita = Number(splitHoraCita[0]) * 60 + Number(splitHoraCita[1]);
        const splitHorario = horario.split(':');
        const minHorario = Number(splitHorario[0]) * 60 + Number(splitHorario[1]);
        return minHorario >= minCita && minHorario < (minCita + Number(duracionCita));
    }

    /**
     * Filtrar los horarios segun la disponibilidad de servicios.
     * @param horarios 
     * @param citas 
     * @param servicioId
     */
    async filterSchedulesAndService(horarios: HorarioI[], citas, servicioId: string, sucursal): Promise<HorarioI[]> {
        const newHorarios = [];
        await horarios.forEach((horario) => {
            const numCitas = citas.filter(c => {
                const hora = `${c.fecha_hora.getHours() + 5}:${c.fecha_hora.getMinutes()}`;
                return this.compararHorario(hora, c.tiempo, horario.hora) && (c.status.nombre === 'PENDIENTE' || c.status.nombre === 'ASISTIO');
            }).length;
            if (numCitas <= (servicioId !== '5e7399124ba91f33306f77a6' ? 0 : 3)) { // '5e7399124ba91f33306f77a6' --> FACIAL
                newHorarios.push(horario);
            }
        });

        return newHorarios;
    }

    schedulesToday(horarios: HorarioI[], hora: string): HorarioI[] {
        return horarios.filter(horario => {
            return Number(hora) <= Number(horario.hora.substring(0, 2));
        });
    }

    /**
     * Filtrar los horarios segun la disponibilidad de consulñtas.
     * @param horarios 
     * @param citas 
     * @param service
     */
    async filterSchedulesInConsult(horarios: HorarioI[], consulta: ConsultaI[]): Promise<HorarioI[]> {
        const newHorarios = [];
        await horarios.forEach((horario) => {
            const numConsultas = consulta.filter(c => {
                const hora = `${c.fecha_hora.getHours()}:${c.fecha_hora.getMinutes()}`;
                return this.compararHorario(hora, c.tiempo, horario.hora) && (c.status.nombre === 'PENDIENTE' || c.status.nombre === 'ASISTIO');
            }).length;
            if (numConsultas <= 3) {
                newHorarios.push(horario);
            }
        });

        return newHorarios;
    }

    /**
     * Busca horarios en consultas mediante su disponibilidad de cierto dia en la BD y sucursal
     * @param date 
     * @param sucursalId
     * @param service
     */
    async findScheduleInConsultByDateAndSucursal(consultaId, anio, mes, dia, sucursalId): Promise<HorarioI[]> {
        const consultas = await this.consultaService.findConsultsByDateAndSucursal(anio, mes, dia, sucursalId);
        let horarios = await this.horarioModel.find({
            servicio: consultaId,
            sucursal: sucursalId
        }).sort('hora');
        const today = new Date();
        const todayString = `${today.getDate()}/${Number(today.getMonth()) + 1}/${today.getFullYear()}`;
        if (todayString === `${anio}-${mes}-${dia}`) {
            horarios = await this.schedulesToday(horarios, today.getHours().toString());
        }
        const response = await this.filterSchedulesInConsult(horarios, consultas);
        return response;
    }

    /**
     * Busca horarios de un servicio y sucursal  mediante su disponibilidad de cierto dia en la BD y sucursal
     * @param date 
     * @param sucursalId
     * @param service
     */
    async findScheduleByDateAndSucursalAndService(anio, mes, dia, sucursalId, servicioId): Promise<HorarioI[]> {
        let citas = [];
        const sucursal = await this.sucursalService.findOfficeById(sucursalId);
        //console.log(sucursal);        
        switch (servicioId) {
            case '5eeb9aa63be25804b8386508': // CONSULTA
                citas = await this.consultaService.findConsultsByDateAndSucursal(anio, mes, dia, sucursalId);
                // citas = await this.consultaService.findConsultsByDateAndSucursal(anio, mes, dia, sucursalId)
                break;
            case '5f3eae5c2ec2c95308213013': // BIOPSIA
                //citas = await this.biopsiaService.(anio, mes, dia, sucursalId);
                // citas = await this.consultaService.findConsultsByDateAndSucursal(anio, mes, dia, sucursalId)
                break;
            case '5f3eae652ec2c95308213014': // CIRUGIA
                citas = await this.cirugiaService.findCirugiaByDateAndSucursal(anio, mes, dia, sucursalId);
                break;
            case '5f7c81d921189441bce8a8c5': // ESTETICA
                citas = await this.esteticaService.findEsteticaByDateAndSucursal(anio, mes, dia, sucursalId);
                break;
            case '5faec30b3d7e36018871e12b': // DERMAPEN
                citas = await this.dermapenService.findDermapenByDateAndSucursal(anio, mes, dia, sucursalId);
                break;
            case '5ea7006312e35836e33147dc': // FACIAL
                citas = await this.facialService.findFacialByDateAndSucursal(anio, mes, dia, sucursalId);
                break;
            case '5faec30b3d7e36018871e12b': // APARATOLOGÍA
                citas = await this.aparatologiaService.findAparatologiaByDateAndSucursal(anio, mes, dia, sucursalId);
                break;
        }
        let horarios = await this.horarioModel.find({
            servicio: servicioId,
            sucursal: sucursalId
        }).sort('hora');
        const today = new Date();
        const todayString = `${today.getFullYear()}-${Number(today.getMonth()) + 1}-${today.getDate()}`;
        if (todayString === `${anio}-${mes}-${dia}`) {
            //horarios = await this.schedulesToday(horarios, today.getHours().toString());
        }
        const response = await this.filterSchedulesAndService(horarios, citas, servicioId, sucursal);
        return horarios;
    }

    /**
     * Genera un nuevo horario en la BD
     * @param horario 
     */
    async createSchedule(horario: HorarioI): Promise<HorarioI> {
        const newSchedule = new this.horarioModel(horario)
            .populate('servicio');
        return await newSchedule.save();
    }

    /**
     * Busca un horario por su Id para poder actualizarlo
     * @param idHorario 
     * @param horario 
     */
    async updateSchedule(idHorario: string, horario: HorarioI): Promise<any> {
        return await this.horarioModel.updateOne({ _id: idHorario }, horario);
    }

    /**
     * Busca un horario por su ID y lo elimina de la BD
     * @param idHorario 
     */
    async deleteSchedule(idHorario: string): Promise<HorarioI> {
        return await this.horarioModel.findOneAndDelete({ _id: idHorario });
    }

}
