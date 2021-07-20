import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { PagoAnticipadoService } from '../services/pago-anticipado.service';
import { PagoAnticipadoI } from 'src/interfaces/pago-anticipado.interface';
import { PagoAnticipadoDto } from 'src/dto/pago-anticipado-dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('pagoanticipado')
export class PagoAnticipadoController {

    TAG = "PagoAnticipadoController";

    constructor(private readonly pagoAnticipadoService: PagoAnticipadoService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    showAllPagoAnticipados() : Promise<PagoAnticipadoI[]> {
        console.log(new Date(), this.TAG, "showAllPagoAnticipados");
        return this.pagoAnticipadoService.showAllPagoAnticipados();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findPagoAnticipadoById(@Param('id') idPagoAnticipado: string): Promise<PagoAnticipadoI> {
        console.log(new Date(), this.TAG, "findPagoAnticipadoById");
        return this.pagoAnticipadoService.findPagoAnticipadoById(idPagoAnticipado);
    }

    @UseGuards(JwtAuthGuard)
    @Get('paciente/:pacienteId')
    showAllPagoAnticipadosByPaciente(@Param('pacienteId') pacienteId: string) : Promise<PagoAnticipadoI[]> {
        console.log(new Date(), this.TAG, "showAllPagoAnticipadosByPaciente");
        return this.pagoAnticipadoService.showAllPagoAnticipadosByPaciente(pacienteId);
    }
    
    @UseGuards(JwtAuthGuard)
    @Post()
    createPagoAnticipado(@Body() pagoAnticipadoDto: PagoAnticipadoDto): Promise<PagoAnticipadoI> {
        console.log(new Date(), this.TAG, "createPagoAnticipado");
        return this.pagoAnticipadoService.createPagoAnticipado(pagoAnticipadoDto);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id') 
    updatePagoAnticipado(@Param('id') idPagoAnticipado: string, @Body() pagoAnticipadoDto: PagoAnticipadoDto): Promise<PagoAnticipadoI> {
        console.log(new Date(), this.TAG, "updatePagoAnticipado");
        return this.pagoAnticipadoService.updatePagoAnticipado(idPagoAnticipado, pagoAnticipadoDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    deletePagoAnticipado(@Param('id') idPagoAnticipado: string): Promise<PagoAnticipadoI> {
        console.log(new Date(), this.TAG, "deletePagoAnticipado");
        return this.pagoAnticipadoService.deletePagoAnticipado(idPagoAnticipado);
    }

}
