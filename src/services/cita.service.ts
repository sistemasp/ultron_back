import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CitaI } from 'src/interfaces/cita.interface';

@Injectable()
export class CitaService {

    constructor(@InjectModel('Cita') private readonly citaModel: Model<CitaI>) { }

    /**
     * Muestra todos los citas de la BD
     */
    async showAllCitas(): Promise<CitaI[]> {
        const response = await this.citaModel.find({}).sort('nombre');
        console.log(response[0].fecha_hora);
        response.forEach(res => {
            console.log(res);
            
            res.fecha_hora.setHours(res.fecha_hora.getHours() + 5);
            //await this.citaModel.updateOne({ _id: res._id }, res);
        });
        console.log(response[0].fecha_hora);
        
        
        return response;

    }

    /**
     * Busca solo un cita mediante su ID en la BD
     * @param idCita 
     */
    async findCitaById(idCita: string): Promise<CitaI> {
        return await this.citaModel.findOne({ _id: idCita });
    }


    /**
     * Busca solo un cita mediante su ID en la BD
     * @param idCita 
     */
     async findCitaByServicioId(idServicio): Promise<CitaI[]> {
        return await this.citaModel.find({ servicio: idServicio });
    }


    /**
     * Busca solo un cita mediante su numero de empleado en la BD
     * @param idCita 
     */
    async findCitaByEmployeeNumber(employeeNumber: string): Promise<CitaI> {
        return await this.citaModel.findOne({ numero_empleado: employeeNumber });
    }

    /**
     * Muestra todas las consultas de la BD que correspondan a una fecha_hora y una sucursal
     */
     async findDatesByRangeDateAndSucursal(anioi, mesi, diai, aniof, mesf, diaf, sucursalId): Promise<CitaI[]> {
        let startDate = new Date(anioi, mesi, diai);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(aniof, mesf, diaf);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        const consultas = await this.citaModel.find({ fecha_hora: { $gte: startDate, $lte: endDate }, sucursal: sucursalId }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('dermatologo')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_cita')
            .populate(
                {
                    path: "factura",
                    populate: {
                        path: "razon_social"
                    }
                })
            .populate('medio')
            .populate('pagos')
            .populate('servicio')
            .populate('frecuencia')
            .populate('producto')
            .populate('status');

        return consultas;
    }

    /**
     * Genera un nuevo cita en la BD
     * @param cita 
     */
    async createCita(cita: CitaI): Promise<CitaI> {
        const newCita = new this.citaModel(cita);
        return await newCita.save();
    }

    /**
     * Busca un cita por su Id para poder actualizarlo
     * @param idCita 
     * @param cita 
     */
    async updateCita(idCita: string, cita: CitaI): Promise<any> {
        return await this.citaModel.updateOne({ _id: idCita }, cita);
    }

    /**
     * Busca un cita por su ID y lo elimina de la BD
     * @param idCita 
     */
    async deleteCita(idCita: string): Promise<CitaI> {
        return await this.citaModel.findOneAndDelete({ _id: idCita });
    }

}
