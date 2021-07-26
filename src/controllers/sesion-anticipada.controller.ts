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
