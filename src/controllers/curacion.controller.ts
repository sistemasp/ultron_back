import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { CuracionService } from '../services/curacion.service';
import { CuracionI } from 'src/interfaces/curacion.interface';
import { CuracionDto } from 'src/dto/curacion-dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('curacion')
export class CuracionController {

    TAG = "CuracionController";

    constructor(private readonly curacionService: CuracionService) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    showAllCuracions(): Promise<CuracionI[]> {
        console.log(new Date(), this.TAG, "showAllCuracions");
        return this.curacionService.showAllCuracions();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findCuracionById(@Param('id') idCuracion: string): Promise<CuracionI> {
        console.log(new Date(), this.TAG, "findCuracionById");
        return this.curacionService.findCuracionById(idCuracion);
    }

    @UseGuards(JwtAuthGuard)
    @Get('consulta/:consultaId')
    findCuracionByConsultaId(@Param('consultaId') consultaId: string): Promise<CuracionI> {
        console.log(new Date(), this.TAG, "findCuracionByConsultaId");
        return this.curacionService.findCuracionByConsultaId(consultaId);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':dia/:mes/:anio/sucursal/:sucursalId/dermatologo/:dermatologoId')
    findCuracionsByPayOfDoctor(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string,
        @Param('sucursalId') sucursalId: string, @Param('dermatologoId') dermatologoId: string): Promise<CuracionI[]> {
        console.log(new Date(), this.TAG, "findCuracionsByPayOfDoctor");
        return this.curacionService.findCuracionsByPayOfDoctor(anio, mes, dia, sucursalId, dermatologoId);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':dia/:mes/:anio/sucursal/:sucursalId')
    findCuracionByDateAndSucursal(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string,
        @Param('sucursalId') sucursalId: string): Promise<CuracionI[]> {
        console.log(new Date(), this.TAG, "findCuracionByDateAndSucursal");
        return this.curacionService.findCuracionByDateAndSucursal(anio, mes, dia, sucursalId);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':dia/:mes/:anio/sucursal/:sucursalId/dermatologo/:dermatologoId/turno/:turno')
    findCuracionsByPayOfDoctorTurno(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string,
        @Param('sucursalId') sucursalId: string, @Param('dermatologoId') dermatologoId: string, @Param('turno') turno: string,): Promise<CuracionI[]> {
        console.log(new Date(), this.TAG, "findCuracionsByPayOfDoctorTurno");
        return this.curacionService.findCuracionsByPayOfDoctorTurno(anio, mes, dia, sucursalId, dermatologoId, turno);
    }

    @UseGuards(JwtAuthGuard)
    @Get('fecha_inicio/:diai/:mesi/:anioi/fecha_fin/:diaf/:mesf/:aniof/sucursal/:sucursalId')
    findCuracionsByRangeDateAndSucursal(@Param('diai') diai: string, @Param('mesi') mesi: string, @Param('anioi') anioi: string,
        @Param('diaf') diaf: string, @Param('mesf') mesf: string, @Param('aniof') aniof: string,
        @Param('sucursalId') sucursalId: string) : Promise<CuracionI[]> {
        console.log(new Date(), this.TAG, "findCuracionsByRangeDateAndSucursal");
        return this.curacionService.findCuracionsByRangeDateAndSucursal(anioi, mesi, diai, aniof, mesf, diaf, sucursalId);
    }

    @UseGuards(JwtAuthGuard)
    @Get('waitingList/sucursal/:sucursalId/asistio/:statusAsistioId')
    waitingList(@Param('sucursalId') sucursalId: string, @Param('statusAsistioId') statusAsistioId: string) : Promise<CuracionI[]> {
        console.log(new Date(), this.TAG, "waitingList");
        return this.curacionService.waitingList(sucursalId, statusAsistioId);
    }

    @UseGuards(JwtAuthGuard)
    @Get('/historic/:pacienteId')
    findCuracionsHistoricByPaciente(@Param('pacienteId') pacienteId: string): Promise<CuracionI[]> {
        console.log(new Date(), this.TAG, "findCuracionsHistoricByPaciente");
        return this.curacionService.findCuracionsHistoricByPaciente(pacienteId);
    }

    @UseGuards(JwtAuthGuard)
    @Get('sucursal/:sucursalId/dermatologo/:dermatologoId/atendido/:atendidoId/apertura/:hora_apertura/cierre/:hora_cierre')
    findCuracionsByPayOfDoctorHoraAplicacion(@Param('sucursalId') sucursalId: string, @Param('dermatologoId') dermatologoId: string,
        @Param('atendidoId') atendidoId: string, @Param('hora_apertura') hora_apertura: string,
        @Param('hora_cierre') hora_cierre: string): Promise<CuracionI[]> {
        console.log(new Date(), this.TAG, "findCuracionsByPayOfDoctorHoraAplicacion");
        return this.curacionService.findCuracionsByPayOfDoctorHoraAplicacion(sucursalId, dermatologoId, atendidoId, hora_apertura, hora_cierre);
    }

    @UseGuards(JwtAuthGuard)
    @Get('sucursal/:sucursalId/dermatologo/:dermatologoId/canceladocp/:canceladoCPId/apertura/:hora_apertura/cierre/:hora_cierre')
    findCuracionsByPayOfDoctorHoraAplicacionPA(@Param('sucursalId') sucursalId: string, @Param('dermatologoId') dermatologoId: string,
        @Param('canceladoCPId') canceladoCPId: string, @Param('hora_apertura') hora_apertura: string,
        @Param('hora_cierre') hora_cierre: string): Promise<CuracionI[]> {
        console.log(new Date(), this.TAG, "findCuracionsByPayOfDoctorHoraAplicacionPA");
        return this.curacionService.findCuracionsByPayOfDoctorHoraAplicacionPA(sucursalId, dermatologoId, canceladoCPId, hora_apertura, hora_cierre);
    }

    @UseGuards(JwtAuthGuard)
    @Get('sucursal/:sucursalId/patologo/:patologoId/apertura/:hora_apertura/cierre/:hora_cierre')
    findCuracionsByPayOfPatologoHoraAplicacion(@Param('sucursalId') sucursalId: string, @Param('patologoId') patologoId: string,
        @Param('hora_apertura') hora_apertura: string, @Param('hora_cierre') hora_cierre: string): Promise<CuracionI[]> {
        console.log(new Date(), this.TAG, "findCuracionsByPayOfPatologoHoraAplicacion");
        return this.curacionService.findCuracionsByPayOfPatologoHoraAplicacion(sucursalId, patologoId, hora_apertura, hora_cierre);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    createCuracion(@Body() curacionDto: CuracionDto): Promise<CuracionI> {
        console.log(new Date(), this.TAG, "createCuracion");
        return this.curacionService.createCuracion(curacionDto);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    updateCuracion(@Param('id') idCuracion: string, @Body() curacionDto: CuracionDto): Promise<CuracionI> {
        console.log(new Date(), this.TAG, "updateCuracion");
        return this.curacionService.updateCuracion(idCuracion, curacionDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    deleteCuracion(@Param('id') idCuracion: string): Promise<CuracionI> {
        console.log(new Date(), this.TAG, "deleteCuracion");
        return this.curacionService.deleteCuracion(idCuracion);
    }

}
