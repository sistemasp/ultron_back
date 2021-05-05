import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { CirugiaService } from './../services/cirugia.service';
import { CirugiaI } from 'src/interfaces/cirugia.interface';
import { CirugiaDto } from 'src/dto/cirugia-dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('cirugia')
export class CirugiaController {

    TAG = "CirugiaController";

    constructor(private readonly cirugiaService: CirugiaService) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    showAllCirugias(): Promise<CirugiaI[]> {
        console.log(new Date(), this.TAG, "showAllCirugias");
        return this.cirugiaService.showAllCirugias();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findCirugiaById(@Param('id') idCirugia: string): Promise<CirugiaI> {
        console.log(new Date(), this.TAG, "findCirugiaById");
        return this.cirugiaService.findCirugiaById(idCirugia);
    }

    @UseGuards(JwtAuthGuard)
    @Get('consulta/:consultaId')
    findCirugiaByConsultaId(@Param('consultaId') consultaId: string): Promise<CirugiaI> {
        console.log(new Date(), this.TAG, "findCirugiaByConsultaId");
        return this.cirugiaService.findCirugiaByConsultaId(consultaId);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':dia/:mes/:anio/sucursal/:sucursalId/dermatologo/:dermatologoId')
    findCirugiasByPayOfDoctor(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string,
        @Param('sucursalId') sucursalId: string, @Param('dermatologoId') dermatologoId: string): Promise<CirugiaI[]> {
        console.log(new Date(), this.TAG, "findCirugiasByPayOfDoctor");
        return this.cirugiaService.findCirugiasByPayOfDoctor(anio, mes, dia, sucursalId, dermatologoId);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':dia/:mes/:anio/sucursal/:sucursalId')
    findCirugiaByDateAndSucursal(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string,
        @Param('sucursalId') sucursalId: string): Promise<CirugiaI[]> {
        console.log(new Date(), this.TAG, "findCirugiaByDateAndSucursal");
        return this.cirugiaService.findCirugiaByDateAndSucursal(anio, mes, dia, sucursalId);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':dia/:mes/:anio/sucursal/:sucursalId/dermatologo/:dermatologoId/turno/:turno')
    findCirugiasByPayOfDoctorTurno(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string,
        @Param('sucursalId') sucursalId: string, @Param('dermatologoId') dermatologoId: string, @Param('turno') turno: string,): Promise<CirugiaI[]> {
        console.log(new Date(), this.TAG, "findCirugiasByPayOfDoctorTurno");
        return this.cirugiaService.findCirugiasByPayOfDoctorTurno(anio, mes, dia, sucursalId, dermatologoId, turno);
    }

    @UseGuards(JwtAuthGuard)
    @Get('fecha_inicio/:diai/:mesi/:anioi/fecha_fin/:diaf/:mesf/:aniof/sucursal/:sucursalId')
    findCirugiasByRangeDateAndSucursal(@Param('diai') diai: string, @Param('mesi') mesi: string, @Param('anioi') anioi: string,
        @Param('diaf') diaf: string, @Param('mesf') mesf: string, @Param('aniof') aniof: string,
        @Param('sucursalId') sucursalId: string) : Promise<CirugiaI[]> {
        console.log(new Date(), this.TAG, "findCirugiasByRangeDateAndSucursal");
        return this.cirugiaService.findCirugiasByRangeDateAndSucursal(anioi, mesi, diai, aniof, mesf, diaf, sucursalId);
    }

    @UseGuards(JwtAuthGuard)
    @Get('waitingList/sucursal/:sucursalId/asistio/:statusAsistioId')
    waitingList(@Param('sucursalId') sucursalId: string, @Param('statusAsistioId') statusAsistioId: string) : Promise<CirugiaI[]> {
        console.log(new Date(), this.TAG, "waitingList");
        return this.cirugiaService.waitingList(sucursalId, statusAsistioId);
    }

    @UseGuards(JwtAuthGuard)
    @Get('/historic/:pacienteId')
    findCirugiasHistoricByPaciente(@Param('pacienteId') pacienteId: string): Promise<CirugiaI[]> {
        console.log(new Date(), this.TAG, "findCirugiasHistoricByPaciente");
        return this.cirugiaService.findCirugiasHistoricByPaciente(pacienteId);
    }

    @UseGuards(JwtAuthGuard)
    @Get('sucursal/:sucursalId/dermatologo/:dermatologoId/atendido/:atendidoId/apertura/:hora_apertura/cierre/:hora_cierre')
    findCirugiasByPayOfDoctorHoraAplicacion(@Param('sucursalId') sucursalId: string, @Param('dermatologoId') dermatologoId: string,
        @Param('atendidoId') atendidoId: string, @Param('hora_apertura') hora_apertura: string,
        @Param('hora_cierre') hora_cierre: string): Promise<CirugiaI[]> {
        console.log(new Date(), this.TAG, "findCirugiasByPayOfDoctorHoraAplicacion");
        return this.cirugiaService.findCirugiasByPayOfDoctorHoraAplicacion(sucursalId, dermatologoId, atendidoId, hora_apertura, hora_cierre);
    }

    @UseGuards(JwtAuthGuard)
    @Get('sucursal/:sucursalId/dermatologo/:dermatologoId/canceladocp/:canceladoCPId/apertura/:hora_apertura/cierre/:hora_cierre')
    findCirugiasByPayOfDoctorHoraAplicacionPA(@Param('sucursalId') sucursalId: string, @Param('dermatologoId') dermatologoId: string,
        @Param('canceladoCPId') canceladoCPId: string, @Param('hora_apertura') hora_apertura: string,
        @Param('hora_cierre') hora_cierre: string): Promise<CirugiaI[]> {
        console.log(new Date(), this.TAG, "findCirugiasByPayOfDoctorHoraAplicacionPA");
        return this.cirugiaService.findCirugiasByPayOfDoctorHoraAplicacionPA(sucursalId, dermatologoId, canceladoCPId, hora_apertura, hora_cierre);
    }

    @UseGuards(JwtAuthGuard)
    @Get('sucursal/:sucursalId/patologo/:patologoId/apertura/:hora_apertura/cierre/:hora_cierre')
    findCirugiasByPayOfPatologoHoraAplicacion(@Param('sucursalId') sucursalId: string, @Param('patologoId') patologoId: string,
        @Param('hora_apertura') hora_apertura: string, @Param('hora_cierre') hora_cierre: string): Promise<CirugiaI[]> {
        console.log(new Date(), this.TAG, "findCirugiasByPayOfPatologoHoraAplicacion");
        return this.cirugiaService.findCirugiasByPayOfPatologoHoraAplicacion(sucursalId, patologoId, hora_apertura, hora_cierre);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    createCirugia(@Body() cirugiaDto: CirugiaDto): Promise<CirugiaI> {
        console.log(new Date(), this.TAG, "createCirugia");
        return this.cirugiaService.createCirugia(cirugiaDto);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    updateCirugia(@Param('id') idCirugia: string, @Body() cirugiaDto: CirugiaDto): Promise<CirugiaI> {
        console.log(new Date(), this.TAG, "updateCirugia");
        return this.cirugiaService.updateCirugia(idCirugia, cirugiaDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    deleteCirugia(@Param('id') idCirugia: string): Promise<CirugiaI> {
        console.log(new Date(), this.TAG, "deleteCirugia");
        return this.cirugiaService.deleteCirugia(idCirugia);
    }

}
