import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { SesionAnticipadaService } from '../services/sesion-anticipada.service';
import { SesionAnticipadaI } from 'src/interfaces/sesion-anticipada.interface';
import { SesionAnticipadaDto } from 'src/dto/sesion-anticipada-dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('sesionanticipada')
export class SesionAnticipadaController {

    TAG = "SesionAnticipadaController";

    constructor(private readonly sesionAnticipadaService: SesionAnticipadaService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    showAllSesionAnticipadas() : Promise<SesionAnticipadaI[]> {
        console.log(new Date(), this.TAG, "showAllSesionAnticipadas");
        return this.sesionAnticipadaService.showAllSesionAnticipadas();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findSesionAnticipadaById(@Param('id') idSesionAnticipada: string): Promise<SesionAnticipadaI> {
        console.log(new Date(), this.TAG, "findSesionAnticipadaById");
        return this.sesionAnticipadaService.findSesionAnticipadaById(idSesionAnticipada);
    }

    @UseGuards(JwtAuthGuard)
    @Get('paciente/:pacienteId')
    showAllSesionesAnticipadasByPaciente(@Param('pacienteId') pacienteId: string) : Promise<SesionAnticipadaI[]> {
        console.log(new Date(), this.TAG, "showAllSesionesAnticipadasByPaciente");
        return this.sesionAnticipadaService.showAllSesionesAnticipadasByPaciente(pacienteId);
    }

    @UseGuards(JwtAuthGuard)
    @Get('paciente/:pacienteId/today')
    showAllSesionesAnticipadasByPacienteToday(@Param('pacienteId') pacienteId: string) : Promise<SesionAnticipadaI[]> {
        console.log(new Date(), this.TAG, "showAllSesionesAnticipadasByPacienteToday");
        return this.sesionAnticipadaService.showAllSesionesAnticipadasByPacienteToday(pacienteId);
    }

    @UseGuards(JwtAuthGuard)
    @Get('sucursal/:sucursalId/dermatologo/:dermatologoId/apertura/:hora_apertura/cierre/:hora_cierre')
    findSesionesAnticipadasByPayOfDoctorFechaPago(@Param('sucursalId') sucursalId: string, @Param('dermatologoId') dermatologoId: string,
        @Param('hora_apertura') hora_apertura: string, @Param('hora_cierre') hora_cierre: string): Promise<SesionAnticipadaI[]> {
        console.log(new Date(), this.TAG, "findSesionesAnticipadasByPayOfDoctorFechaPago");
        return this.sesionAnticipadaService.findSesionesAnticipadasByPayOfDoctorFechaPago(sucursalId, dermatologoId, hora_apertura, hora_cierre);
    }

    @UseGuards(JwtAuthGuard)
    @Get('fecha_inicio/:diai/:mesi/:anioi/fecha_fin/:diaf/:mesf/:aniof/sucursal/:sucursalId')
    findSesionAnticipadaByRangeDateAndSucursal(@Param('diai') diai: string, @Param('mesi') mesi: string, @Param('anioi') anioi: string,
        @Param('diaf') diaf: string, @Param('mesf') mesf: string, @Param('aniof') aniof: string,
        @Param('sucursalId') sucursalId: string): Promise<SesionAnticipadaI[]> {
        console.log(new Date(), this.TAG, "findSesionAnticipadaByRangeDateAndSucursal");
        return this.sesionAnticipadaService.findSesionAnticipadaByRangeDateAndSucursal(anioi, mesi, diai, aniof, mesf, diaf, sucursalId);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    createSesionAnticipada(@Body() sesionAnticipadaDto: SesionAnticipadaDto): Promise<SesionAnticipadaI> {
        console.log(new Date(), this.TAG, "createSesionAnticipada");
        return this.sesionAnticipadaService.createSesionAnticipada(sesionAnticipadaDto);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id') 
    updateSesionAnticipada(@Param('id') idSesionAnticipada: string, @Body() sesionAnticipadaDto: SesionAnticipadaDto): Promise<SesionAnticipadaI> {
        console.log(new Date(), this.TAG, "updateSesionAnticipada");
        return this.sesionAnticipadaService.updateSesionAnticipada(idSesionAnticipada, sesionAnticipadaDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    deleteSesionAnticipada(@Param('id') idSesionAnticipada: string): Promise<SesionAnticipadaI> {
        console.log(new Date(), this.TAG, "deleteSesionAnticipada");
        return this.sesionAnticipadaService.deleteSesionAnticipada(idSesionAnticipada);
    }

}
