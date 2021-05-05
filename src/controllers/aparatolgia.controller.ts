import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { AparatologiaService } from './../services/aparatologia.service';
import { AparatologiaI } from 'src/interfaces/aparatologia.interface';
import { AparatologiaDto } from 'src/dto/aparatologia-dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('aparatologia')
export class AparatologiaController {

    TAG = "AparatologiaController";

    constructor(private readonly aparatologiaService: AparatologiaService) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    showAllAparatologia(): Promise<AparatologiaI[]> {
        console.log(new Date(), this.TAG, "showAllAparatologia");
        return this.aparatologiaService.showAllAparatologia();
    }

    @UseGuards(JwtAuthGuard)
    @Get('sucursal/:sucursalId')
    showAllAparatologiaBySucursal(@Param('sucursalId') sucursalId: string): Promise<AparatologiaI[]> {
        console.log(new Date(), this.TAG, "showAllAparatologiaBySucursal");
        return this.aparatologiaService.showAllAparatologiaBySucursal(sucursalId);
    }

    /*
    @Get('sucursal/:sucursalId/asistio')
    showAllAparatologiaBySucursalAsistio(@Param('sucursalId') sucursalId: string): Promise<AparatologiaI[]> {
        console.log(new Date(), this.TAG, "showAllAparatologiaBySucursalAsistio");
        return this.aparatologiaService.showAllAparatologiaBySucursalAsistio(sucursalId);
    }
    */

    @UseGuards(JwtAuthGuard)
    @Get(':dia/:mes/:anio')
    findAparatologiaByDate(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string): Promise<AparatologiaI[]> {
        console.log(new Date(), this.TAG, "findAparatologiaByDate");
        return this.aparatologiaService.findAparatologiaByDate(anio, mes, dia);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':dia/:mes/:anio/sucursal/:sucursalId')
    findAparatologiaByDateAndSucursal(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string, @Param('sucursalId') sucursalId: string): Promise<AparatologiaI[]> {
        console.log(new Date(), this.TAG, "findAparatologiaByDateAndSucursal");
        return this.aparatologiaService.findAparatologiaByDateAndSucursal(anio, mes, dia, sucursalId);
    }

    @UseGuards(JwtAuthGuard)
    @Get('fecha_inicio/:diai/:mesi/:anioi/fecha_fin/:diaf/:mesf/:aniof/sucursal/:sucursalId')
    findAparatologiaByRangeDateAndSucursal(@Param('diai') diai: string, @Param('mesi') mesi: string, @Param('anioi') anioi: string,
        @Param('diaf') diaf: string, @Param('mesf') mesf: string, @Param('aniof') aniof: string,
        @Param('sucursalId') sucursalId: string): Promise<AparatologiaI[]> {
        console.log(new Date(), this.TAG, "findAparatologiaByRangeDateAndSucursal");
        return this.aparatologiaService.findAparatologiaByRangeDateAndSucursal(anioi, mesi, diai, aniof, mesf, diaf, sucursalId);
    }

    @UseGuards(JwtAuthGuard)
    @Get('fecha_inicio/:diai/:mesi/:anioi/fecha_fin/:diaf/:mesf/:aniof/sucursal/:sucursalId/service/:serviceId')
    findAparatologiaByRangeDateAndSucursalAndService(@Param('diai') diai: string, @Param('mesi') mesi: string, @Param('anioi') anioi: string,
        @Param('diaf') diaf: string, @Param('mesf') mesf: string, @Param('aniof') aniof: string,
        @Param('sucursalId') sucursalId: string, @Param('serviceId') serviceId: string): Promise<AparatologiaI[]> {
        console.log(new Date(), this.TAG, "findAparatologiaByRangeDateAndSucursalAndService", sucursalId, serviceId);
        return this.aparatologiaService.findAparatologiaByRangeDateAndSucursalAndService(anioi, mesi, diai, aniof, mesf, diaf, sucursalId, serviceId);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':dia/:mes/:anio/sucursal/:sucursalId/:servicio')
    findAparatologiaByDateAndSucursalAndService(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string,
        @Param('sucursalId') sucursalId: string, @Param('servicio') servicio: string): Promise<AparatologiaI[]> {
        console.log(new Date(), this.TAG, "findAparatologiaByDateAndSucursalAndService");
        return this.aparatologiaService.findAparatologiaByDateAndSucursalAndService(anio, mes, dia, sucursalId, servicio);
    }

    @UseGuards(JwtAuthGuard)
    @Get('/historic/:pacienteId')
    findHistoricByPaciente(@Param('pacienteId') pacienteId: string): Promise<AparatologiaI[]> {
        console.log(new Date(), this.TAG, "findHistoricByPaciente");
        return this.aparatologiaService.findHistoricByPaciente(pacienteId);
    }

    @UseGuards(JwtAuthGuard)
    @Get('/historic/:pacienteId/servicio/:serviceId')
    findHistoricByPacienteAndService(@Param('pacienteId') pacienteId: string, @Param('serviceId') serviceId: string): Promise<AparatologiaI[]> {
        console.log(new Date(), this.TAG, "findHistoricByPacienteAndService");
        return this.aparatologiaService.findHistoricByPacienteAndService(pacienteId, serviceId);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findDateById(@Param('id') idAparatologia: string): Promise<AparatologiaI> {
        console.log(new Date(), this.TAG, "findDateById");
        return this.aparatologiaService.findDateById(idAparatologia);
    }

    @UseGuards(JwtAuthGuard)
    @Get('sucursal/:sucursalId/asistio/:statusAsistioId')
    waitingList(@Param('sucursalId') sucursalId: string, @Param('statusAsistioId') statusAsistioId: string): Promise<AparatologiaI[]> {
        console.log(new Date(), this.TAG, "waitingList");
        return this.aparatologiaService.waitingList(sucursalId, statusAsistioId);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':dia/:mes/:anio/sucursal/:sucursalId/dermatologo/:dermatologoId/atendido/:atendidoId')
    findAparatologiaByPayOfDoctor(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string,
        @Param('sucursalId') sucursalId: string, @Param('dermatologoId') dermatologoId: string, @Param('atendidoId') atendidoId: string,): Promise<AparatologiaI[]> {
        console.log(new Date(), this.TAG, "findAparatologiaByPayOfDoctor");
        return this.aparatologiaService.findAparatologiaByPayOfDoctor(anio, mes, dia, sucursalId, dermatologoId, atendidoId);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':dia/:mes/:anio/sucursal/:sucursalId/dermatologo/:dermatologoId/atendido/:atendidoId/turno/:turno')
    findAparatologiaByPayOfDoctorTurno(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string,
        @Param('sucursalId') sucursalId: string, @Param('dermatologoId') dermatologoId: string, @Param('atendidoId') atendidoId: string,
        @Param('turno') turno: string): Promise<AparatologiaI[]> {
        console.log(new Date(), this.TAG, "findAparatologiaByPayOfDoctorTurno");
        return this.aparatologiaService.findAparatologiaByPayOfDoctorTurno(anio, mes, dia, sucursalId, dermatologoId, atendidoId, turno);
    }

    @UseGuards(JwtAuthGuard)
    @Get('sucursal/:sucursalId/dermatologo/:dermatologoId/atendido/:atendidoId/apertura/:hora_apertura/cierre/:hora_cierre')
    findAparatologiasByPayOfDoctorHoraAplicacion(@Param('sucursalId') sucursalId: string, @Param('dermatologoId') dermatologoId: string,
        @Param('atendidoId') atendidoId: string, @Param('hora_apertura') hora_apertura: string,
        @Param('hora_cierre') hora_cierre: string): Promise<AparatologiaI[]> {
        console.log(new Date(), this.TAG, "findAparatologiasByPayOfDoctorHoraAplicacion");
        return this.aparatologiaService.findAparatologiasByPayOfDoctorHoraAplicacion(sucursalId, dermatologoId, atendidoId, hora_apertura, hora_cierre);
    }

    @UseGuards(JwtAuthGuard)
    @Get('sucursal/:sucursalId/dermatologo/:dermatologoId/canceladocp/:canceladoCPId/apertura/:hora_apertura/cierre/:hora_cierre')
    findAparatologiasByPayOfDoctorHoraAplicacionPA(@Param('sucursalId') sucursalId: string, @Param('dermatologoId') dermatologoId: string,
        @Param('canceladoCPId') canceladoCPId: string, @Param('hora_apertura') hora_apertura: string,
        @Param('hora_cierre') hora_cierre: string): Promise<AparatologiaI[]> {
        console.log(new Date(), this.TAG, "findAparatologiasByPayOfDoctorHoraAplicacionPA");
        return this.aparatologiaService.findAparatologiasByPayOfDoctorHoraAplicacionPA(sucursalId, dermatologoId, canceladoCPId, hora_apertura, hora_cierre);
    }

    @UseGuards(JwtAuthGuard)
    @Get('sucursal/:sucursalId/pendiente/:pendienteId')
    showAllAparatologiasBySucursalPendiente(@Param('sucursalId') sucursalId: string,
        @Param('pendienteId') pendienteId: string): Promise<AparatologiaI[]> {
        console.log(new Date(), this.TAG, "showAllAparatologiasBySucursalPendiente");
        return this.aparatologiaService.showAllAparatologiasBySucursalPendiente(sucursalId, pendienteId);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    createDate(@Body() aparatologiaDto: AparatologiaDto): Promise<AparatologiaI> {
        console.log(new Date(), this.TAG, "createDate");
        return this.aparatologiaService.createDate(aparatologiaDto);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    updateDate(@Param('id') idAparatologia: string, @Body() aparatologiaDto: AparatologiaDto): Promise<AparatologiaI> {
        console.log(new Date(), this.TAG, "updateDate");
        return this.aparatologiaService.updateDate(idAparatologia, aparatologiaDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    deleteDate(@Param('id') idAparatologia: string): Promise<AparatologiaI> {
        console.log(new Date(), this.TAG, "deleteDate");
        return this.aparatologiaService.deleteDate(idAparatologia);
    }

}
