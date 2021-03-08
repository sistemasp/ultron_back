import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { LaboratorioService } from '../services/laboratorio.service';
import { LaboratorioI } from 'src/interfaces/laboratorio.interface';
import { LaboratorioDto } from 'src/dto/laboratorio-dto';

@Controller('laboratorio')
export class LaboratorioController {

    TAG = "LaboratorioController";

    constructor(private readonly laboratorioService: LaboratorioService) {}

    @Get()
    showAllLaboratorios() : Promise<LaboratorioI[]> {
        console.log(new Date(), this.TAG, "showAllLaboratorios");
        return this.laboratorioService.showAllLaboratorios();
    }

    @Get(':id')
    findLaboratorioById(@Param('id') idLaboratorio: string): Promise<LaboratorioI> {
        console.log(new Date(), this.TAG, "findLaboratorioById");
        return this.laboratorioService.findLaboratorioById(idLaboratorio);
    }

    @Post()
    createLaboratorio(@Body() laboratorioDto: LaboratorioDto): Promise<LaboratorioI> {
        console.log(new Date(), this.TAG, "createLaboratorio");
        return this.laboratorioService.createLaboratorio(laboratorioDto);
    }

    @Put(':id') 
    updateLaboratorio(@Param('id') idLaboratorio: string, @Body() laboratorioDto: LaboratorioDto): Promise<LaboratorioI> {
        console.log(new Date(), this.TAG, "updateLaboratorio");
        return this.laboratorioService.updateLaboratorio(idLaboratorio, laboratorioDto);
    }

    @Delete(':id')
    deleteLaboratorio(@Param('id') idLaboratorio: string): Promise<LaboratorioI> {
        console.log(new Date(), this.TAG, "deleteLaboratorio");
        return this.laboratorioService.deleteLaboratorio(idLaboratorio);
    }

}
