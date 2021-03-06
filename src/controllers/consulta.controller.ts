import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ConsultaService } from './../services/consulta.service';
import { ConsultaI } from 'src/interfaces/consulta.interface';
import { ConsultaDto } from 'src/dto/consulta-dto';

@Controller('consulta')
export class ConsultaController {

    TAG = "ConsultaController";

    constructor(private readonly consultaService: ConsultaService) { }

    @Get()
    showAllConsults(): Promise<ConsultaI[]> {
        console.log(new Date(), this.TAG, "showAllConsults");
        return this.consultaService.showAllConsults();
    }

    @Get('sucursal/:sucursalId')
    showAllConsultsBySucursal(@Param('sucursalId') sucursalId: string): Promise<ConsultaI[]> {
        console.log(new Date(), this.TAG, "showAllConsultsBySucursal");
        return this.consultaService.showAllConsultsBySucursal(sucursalId);
    }
    /*
        @Get('sucursal/:sucursalId/asistio')
        showAllConsultsBySucursalAsistio(@Param('sucursalId') sucursalId: string): Promise<ConsultaI[]> {
            console.log(new Date(), this.TAG, "showAllConsultsBySucursalAsistio");
            return this.consultaService.showAllConsultsBySucursalAsistio(sucursalId);
        }
    */

    @Get('sucursal/:sucursalId/pendiente/:pendienteId')
    showAllConsultsBySucursalPendiente(@Param('sucursalId') sucursalId: string,
        @Param('pendienteId') pendienteId: string): Promise<ConsultaI[]> {
        console.log(new Date(), this.TAG, "showAllConsultsBySucursalPendiente");
        return this.consultaService.showAllConsultsBySucursalPendiente(sucursalId, pendienteId);
    }

    @Get('historico/dermatologos/:dermatologoId')
    findHistoricByMedicId(@Param('dermatologoId') dermatologoId: string): Promise<ConsultaI[]> {
        console.log(new Date(), this.TAG, "findHistoricByMedicId");
        return this.consultaService.findHistoricByMedicId(dermatologoId);
    }

    @Get(':dia/:mes/:anio')
    findConsultsByDate(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string): Promise<ConsultaI[]> {
        console.log(new Date(), this.TAG, "findConsultsByDate");
        return this.consultaService.findConsultsByDate(anio, mes, dia);
    }

    @Get(':dia/:mes/:anio/sucursal/:sucursalId')
    findConsultsByDateAndSucursal(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string,
        @Param('sucursalId') sucursalId: string): Promise<ConsultaI[]> {
        console.log(new Date(), this.TAG, "findConsultsByDateAndSucursal");
        return this.consultaService.findConsultsByDateAndSucursal(anio, mes, dia, sucursalId);
    }

    @Get(':dia/:mes/:anio/sucursal/:sucursalId/dermatologo/:dermatologoId/atendido/:atendidoId')
    findConsultsByPayOfDoctor(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string,
        @Param('sucursalId') sucursalId: string, @Param('dermatologoId') dermatologoId: string,
        @Param('atendidoId') atendidoId: string,): Promise<ConsultaI[]> {
        console.log(new Date(), this.TAG, "findConsultsByPayOfDoctor");
        return this.consultaService.findConsultsByPayOfDoctor(anio, mes, dia, sucursalId, dermatologoId, atendidoId);
    }

    @Get(':dia/:mes/:anio/sucursal/:sucursalId/dermatologo/:dermatologoId/atendido/:atendidoId/turno/:turno')
    findConsultsByPayOfDoctorTurno(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string,
        @Param('sucursalId') sucursalId: string, @Param('dermatologoId') dermatologoId: string, @Param('atendidoId') atendidoId: string,
        @Param('turno') turno: string): Promise<ConsultaI[]> {
        console.log(new Date(), this.TAG, "findConsultsByPayOfDoctorTurno");
        return this.consultaService.findConsultsByPayOfDoctorTurno(anio, mes, dia, sucursalId, dermatologoId, atendidoId, turno);
    }

    @Get('sucursal/:sucursalId/dermatologo/:dermatologoId/atendido/:atendidoId/apertura/:hora_apertura/cierre/:hora_cierre')
    findConsultsByPayOfDoctorHoraAplicacion(@Param('sucursalId') sucursalId: string, @Param('dermatologoId') dermatologoId: string,
        @Param('atendidoId') atendidoId: string, @Param('hora_apertura') hora_apertura: string,
        @Param('hora_cierre') hora_cierre: string): Promise<ConsultaI[]> {
        console.log(new Date(), this.TAG, "findConsultsByPayOfDoctorHoraAplicacion");
        return this.consultaService.findConsultsByPayOfDoctorHoraAplicacion(sucursalId, dermatologoId, atendidoId, hora_apertura, hora_cierre);
    }

    @Get(':dia/:mes/:anio/sucursal/:sucursalId/dermatologo/:dermatologoId/atendido/:atendidoId/turno/:turno/frecuencia/:frecuenciaId')
    findConsultsByPayOfDoctorTurnoFrecuencia(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string,
        @Param('sucursalId') sucursalId: string, @Param('dermatologoId') dermatologoId: string, @Param('atendidoId') atendidoId: string,
        @Param('turno') turno: string, @Param('frecuenciaId') frecuenciaId: string): Promise<ConsultaI[]> {
        console.log(new Date(), this.TAG, "findConsultsByPayOfDoctorTurnoFrecuencia");
        return this.consultaService.findConsultsByPayOfDoctorTurnoFrecuencia(anio, mes, dia, sucursalId, dermatologoId, atendidoId, turno, frecuenciaId);
    }

    @Get('sucursal/:sucursalId/dermatologo/:dermatologoId/atendido/:atendidoId/apertura/:hora_apertura/cierre/:hora_cierre/frecuencia/:frecuenciaId')
    findConsultsByPayOfDoctorHoraAplicacionFrecuencia(@Param('sucursalId') sucursalId: string, @Param('dermatologoId') dermatologoId: string,
        @Param('atendidoId') atendidoId: string, @Param('hora_apertura') hora_apertura: string, @Param('hora_cierre') hora_cierre: string,
        @Param('frecuenciaId') frecuenciaId: string): Promise<ConsultaI[]> {
        console.log(new Date(), this.TAG, "findConsultsByPayOfDoctorHoraAplicacionFrecuencia");
        return this.consultaService.findConsultsByPayOfDoctorHoraAplicacionFrecuencia(sucursalId, dermatologoId, atendidoId, hora_apertura, hora_cierre, frecuenciaId);
    }

    @Get('sucursal/:sucursalId/dermatologo/:dermatologoId/canceladocp/:canceladoCPId/apertura/:hora_apertura/cierre/:hora_cierre/frecuencia/:frecuenciaId')
    findConsultsByPayOfDoctorHoraAplicacionFrecuenciaPA(@Param('sucursalId') sucursalId: string, @Param('dermatologoId') dermatologoId: string,
        @Param('canceladoCPId') canceladoCPId: string, @Param('hora_apertura') hora_apertura: string, @Param('hora_cierre') hora_cierre: string,
        @Param('frecuenciaId') frecuenciaId: string): Promise<ConsultaI[]> {
        console.log(new Date(), this.TAG, "findConsultsByPayOfDoctorHoraAplicacionFrecuenciaPA");
        return this.consultaService.findConsultsByPayOfDoctorHoraAplicacionFrecuenciaPA(sucursalId, dermatologoId, canceladoCPId, hora_apertura, hora_cierre, frecuenciaId);
    }

    @Get('fecha_inicio/:diai/:mesi/:anioi/fecha_fin/:diaf/:mesf/:aniof/sucursal/:sucursalId')
    findConsultsByRangeDateAndSucursal(@Param('diai') diai: string, @Param('mesi') mesi: string, @Param('anioi') anioi: string,
        @Param('diaf') diaf: string, @Param('mesf') mesf: string, @Param('aniof') aniof: string,
        @Param('sucursalId') sucursalId: string): Promise<ConsultaI[]> {
        console.log(new Date(), this.TAG, "findConsultsByRangeDateAndSucursal");
        return this.consultaService.findConsultsByRangeDateAndSucursal(anioi, mesi, diai, aniof, mesf, diaf, sucursalId);
    }

    @Get('/historic/:pacienteId')
    findHistoricByPaciente(@Param('pacienteId') pacienteId: string): Promise<ConsultaI[]> {
        console.log(new Date(), this.TAG, "findHistoricByPaciente");
        return this.consultaService.findHistoricByPaciente(pacienteId);
    }

    @Get('sucursal/:sucursalId/asistio/:statusAsistioId')
    waitingList(@Param('sucursalId') sucursalId: string, @Param('statusAsistioId') statusAsistioId: string): Promise<ConsultaI[]> {
        console.log(new Date(), this.TAG, "waitingList");
        return this.consultaService.waitingList(sucursalId, statusAsistioId);
    }

    @Get(':id')
    findConsultById(@Param('id') idConsulta: string): Promise<ConsultaI> {
        console.log(new Date(), this.TAG, "findConsultById");
        return this.consultaService.findConsultById(idConsulta);
    }

    @Post()
    createConsult(@Body() consultaDto: ConsultaDto): Promise<ConsultaI> {
        console.log(new Date(), this.TAG, "createConsult");
        return this.consultaService.createConsult(consultaDto);
    }

    @Put(':id')
    updateConsult(@Param('id') idConsulta: string, @Body() consultaDto: ConsultaDto): Promise<ConsultaI> {
        console.log(new Date(), this.TAG, "updateConsult");
        return this.consultaService.updateConsult(idConsulta, consultaDto);
    }

    @Delete(':id')
    deleteConsult(@Param('id') idConsulta: string): Promise<ConsultaI> {
        console.log(new Date(), this.TAG, "deleteConsult");
        return this.consultaService.deleteConsult(idConsulta);
    }

}
