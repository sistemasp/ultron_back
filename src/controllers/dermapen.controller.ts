import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { DermapenService } from './../services/dermapen.service';
import { DermapenI } from 'src/interfaces/dermapen.interface';
import { DermapenDto } from 'src/dto/dermapen-dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('dermapen')
export class DermapenController {

    TAG = "DermapenController";

    constructor(private readonly dermapenService: DermapenService) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    showAllDermapen(): Promise<DermapenI[]> {
        console.log(new Date(), this.TAG, "showAllDermapen");
        return this.dermapenService.showAllDermapen();
    }

    @UseGuards(JwtAuthGuard)
    @Get('sucursal/:sucursalId')
    showAllDermapenBySucursal(@Param('sucursalId') sucursalId: string): Promise<DermapenI[]> {
        console.log(new Date(), this.TAG, "showAllDermapenBySucursal");
        return this.dermapenService.showAllDermapenBySucursal(sucursalId);
    }

    /*
    @Get('sucursal/:sucursalId/asistio')
    showAllDermapenBySucursalAsistio(@Param('sucursalId') sucursalId: string) : Promise<DermapenI[]> {
        console.log(new Date(), this.TAG, "showAllDermapenBySucursalAsistio");
        return this.dermapenService.showAllDermapenBySucursalAsistio(sucursalId);
    }
    */

    @UseGuards(JwtAuthGuard)
    @Get(':dia/:mes/:anio')
    findDermapenByDate(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string): Promise<DermapenI[]> {
        console.log(new Date(), this.TAG, "findDermapenByDate");
        return this.dermapenService.findDermapenByDate(anio, mes, dia);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':dia/:mes/:anio/sucursal/:sucursalId')
    findDermapenByDateAndSucursal(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string, @Param('sucursalId') sucursalId: string): Promise<DermapenI[]> {
        console.log(new Date(), this.TAG, "findDermapenByDateAndSucursal");
        return this.dermapenService.findDermapenByDateAndSucursal(anio, mes, dia, sucursalId);
    }

    @UseGuards(JwtAuthGuard)
    @Get('fecha_inicio/:diai/:mesi/:anioi/fecha_fin/:diaf/:mesf/:aniof/sucursal/:sucursalId')
    findDermapenByRangeDateAndSucursal(@Param('diai') diai: string, @Param('mesi') mesi: string, @Param('anioi') anioi: string,
        @Param('diaf') diaf: string, @Param('mesf') mesf: string, @Param('aniof') aniof: string,
        @Param('sucursalId') sucursalId: string): Promise<DermapenI[]> {
        console.log(new Date(), this.TAG, "findDermapenByRangeDateAndSucursal");
        return this.dermapenService.findDermapenByRangeDateAndSucursal(anioi, mesi, diai, aniof, mesf, diaf, sucursalId);
    }

    @UseGuards(JwtAuthGuard)
    @Get('fecha_inicio/:diai/:mesi/:anioi/fecha_fin/:diaf/:mesf/:aniof/sucursal/:sucursalId/service/:serviceId')
    findDermapenByRangeDateAndSucursalAndService(@Param('diai') diai: string, @Param('mesi') mesi: string, @Param('anioi') anioi: string,
        @Param('diaf') diaf: string, @Param('mesf') mesf: string, @Param('aniof') aniof: string,
        @Param('sucursalId') sucursalId: string, @Param('serviceId') serviceId: string): Promise<DermapenI[]> {
        console.log(new Date(), this.TAG, "findDermapenByRangeDateAndSucursalAndService", sucursalId, serviceId);
        return this.dermapenService.findDermapenByRangeDateAndSucursalAndService(anioi, mesi, diai, aniof, mesf, diaf, sucursalId, serviceId);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':dia/:mes/:anio/sucursal/:sucursalId/:servicio')
    findDermapenByDateAndSucursalAndService(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string,
        @Param('sucursalId') sucursalId: string, @Param('servicio') servicio: string): Promise<DermapenI[]> {
        console.log(new Date(), this.TAG, "findDermapenByDateAndSucursalAndService");
        return this.dermapenService.findDermapenByDateAndSucursalAndService(anio, mes, dia, sucursalId, servicio);
    }

    @UseGuards(JwtAuthGuard)
    @Get('/historic/:pacienteId')
    findHistoricDermapenByPaciente(@Param('pacienteId') pacienteId: string): Promise<DermapenI[]> {
        console.log(new Date(), this.TAG, "findHistoricDermapenByPaciente");
        return this.dermapenService.findHistoricDermapenByPaciente(pacienteId);
    }

    @UseGuards(JwtAuthGuard)
    @Get('/historic/:pacienteId/servicio/:serviceId')
    findHistoricDermapenByPacienteAndService(@Param('pacienteId') pacienteId: string, @Param('serviceId') serviceId: string): Promise<DermapenI[]> {
        console.log(new Date(), this.TAG, "findHistoricDermapenByPacienteAndService");
        return this.dermapenService.findHistoricDermapenByPacienteAndService(pacienteId, serviceId);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findDermapenById(@Param('id') idDermapen: string): Promise<DermapenI> {
        console.log(new Date(), this.TAG, "findDermapenById");
        return this.dermapenService.findDermapenById(idDermapen);
    }

    @UseGuards(JwtAuthGuard)
    @Get('sucursal/:sucursalId/asistio/:statusAsistioId')
    waitingDermapenList(@Param('sucursalId') sucursalId: string, @Param('statusAsistioId') statusAsistioId: string): Promise<DermapenI[]> {
        console.log(new Date(), this.TAG, "waitingDermapenList");
        return this.dermapenService.waitingDermapenList(sucursalId, statusAsistioId);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':dia/:mes/:anio/sucursal/:sucursalId/dermatologo/:dermatologoId/atendido/:atendidoId')
    findDermapenByPayOfDoctor(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string,
        @Param('sucursalId') sucursalId: string, @Param('dermatologoId') dermatologoId: string, @Param('atendidoId') atendidoId: string,): Promise<DermapenI[]> {
        console.log(new Date(), this.TAG, "findDermapenByPayOfDoctor");
        return this.dermapenService.findDermapenByPayOfDoctor(anio, mes, dia, sucursalId, dermatologoId, atendidoId);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':dia/:mes/:anio/sucursal/:sucursalId/dermatologo/:dermatologoId/atendido/:atendidoId/turno/:turno')
    findDermapenByPayOfDoctorTurno(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string,
        @Param('sucursalId') sucursalId: string, @Param('dermatologoId') dermatologoId: string, @Param('atendidoId') atendidoId: string,
        @Param('turno') turno: string): Promise<DermapenI[]> {
        console.log(new Date(), this.TAG, "findDermapenByPayOfDoctorTurno");
        return this.dermapenService.findDermapenByPayOfDoctorTurno(anio, mes, dia, sucursalId, dermatologoId, atendidoId, turno);
    }

    @UseGuards(JwtAuthGuard)
    @Get('sucursal/:sucursalId/dermatologo/:dermatologoId/atendido/:atendidoId/apertura/:hora_apertura/cierre/:hora_cierre')
    findDermapenesByPayOfDoctorHoraAplicacion(@Param('sucursalId') sucursalId: string, @Param('dermatologoId') dermatologoId: string,
        @Param('atendidoId') atendidoId: string, @Param('hora_apertura') hora_apertura: string,
        @Param('hora_cierre') hora_cierre: string): Promise<DermapenI[]> {
        console.log(new Date(), this.TAG, "findDermapenesByPayOfDoctorHoraAplicacion");
        return this.dermapenService.findDermapenesByPayOfDoctorHoraAplicacion(sucursalId, dermatologoId, atendidoId, hora_apertura, hora_cierre);
    }

    @UseGuards(JwtAuthGuard)
    @Get('sucursal/:sucursalId/dermatologo/:dermatologoId/canceladocp/:canceladoCPId/apertura/:hora_apertura/cierre/:hora_cierre')
    findDermapenesByPayOfDoctorHoraAplicacionPA(@Param('sucursalId') sucursalId: string, @Param('dermatologoId') dermatologoId: string,
        @Param('canceladoCPId') canceladoCPId: string, @Param('hora_apertura') hora_apertura: string,
        @Param('hora_cierre') hora_cierre: string): Promise<DermapenI[]> {
        console.log(new Date(), this.TAG, "findDermapenesByPayOfDoctorHoraAplicacionPA");
        return this.dermapenService.findDermapenesByPayOfDoctorHoraAplicacionPA(sucursalId, dermatologoId, canceladoCPId, hora_apertura, hora_cierre);
    }

    @UseGuards(JwtAuthGuard)
    @Get('sucursal/:sucursalId/pendiente/:pendienteId')
    showAllDermapenBySucursalPendiente(@Param('sucursalId') sucursalId: string,
        @Param('pendienteId') pendienteId: string): Promise<DermapenI[]> {
        console.log(new Date(), this.TAG, "showAllDermapenBySucursalPendiente");
        return this.dermapenService.showAllDermapenBySucursalPendiente(sucursalId, pendienteId);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    createDermapen(@Body() dermapenDto: DermapenDto): Promise<DermapenI> {
        console.log(new Date(), this.TAG, "createDermapen");
        return this.dermapenService.createDermapen(dermapenDto);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    updateDermapen(@Param('id') idDermapen: string, @Body() dermapenDto: DermapenDto): Promise<DermapenI> {
        console.log(new Date(), this.TAG, "updateDermapen");
        return this.dermapenService.updateDermapen(idDermapen, dermapenDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    deleteDate(@Param('id') idDermapen: string): Promise<DermapenI> {
        console.log(new Date(), this.TAG, "deleteDate");
        return this.dermapenService.deleteDate(idDermapen);
    }

}
