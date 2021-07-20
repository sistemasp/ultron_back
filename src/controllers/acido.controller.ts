import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { AcidoService } from './../services/acido.service';
import { AcidoI } from 'src/interfaces/acido.interface';
import { AcidoDto } from 'src/dto/acido-dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('acido')
export class AcidoController {

    TAG = "AcidoController";

    constructor(private readonly acidoService: AcidoService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    showAllAcidos() : Promise<AcidoI[]> {
        console.log(new Date(), this.TAG, "showAllAcidos");
        return this.acidoService.showAllAcidos();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findAcidoById(@Param('id') idAcido: string): Promise<AcidoI> {
        console.log(new Date(), this.TAG, "findAcidoById");
        return this.acidoService.findAcidoById(idAcido);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    createAcido(@Body() acidoDto: AcidoDto): Promise<AcidoI> {
        console.log(new Date(), this.TAG, "createAcido");
        return this.acidoService.createAcido(acidoDto);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id') 
    updateAcido(@Param('id') idAcido: string, @Body() acidoDto: AcidoDto): Promise<AcidoI> {
        console.log(new Date(), this.TAG, "updateAcido");
        return this.acidoService.updateAcido(idAcido, acidoDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    deleteAcido(@Param('id') idAcido: string): Promise<AcidoI> {
        console.log(new Date(), this.TAG, "deleteAcido");
        return this.acidoService.deleteAcido(idAcido);
    }

}
