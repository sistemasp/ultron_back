import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AnalisisMedicoService } from '../services/analisis-medico.service';
import { AnalisisMedicoI } from 'src/interfaces/analisis-medico.interface';
import { AnalisisMedicoDto } from 'src/dto/analisis-medico-dto';

@Controller('analisismedico')
export class AnalisisMedicoController {

    TAG = "AnalisisMedicoController";

    constructor(private readonly analisisMedicoService: AnalisisMedicoService) {}

    @Get()
    showAllAnalisisMedicos() : Promise<AnalisisMedicoI[]> {
        console.log(new Date(), this.TAG, "showAllAnalisisMedicos");
        return this.analisisMedicoService.showAllAnalisisMedicos();
    }

    @Get(':id')
    findAnalisisMedicoById(@Param('id') idAnalisisMedico: string): Promise<AnalisisMedicoI> {
        console.log(new Date(), this.TAG, "findAnalisisMedicoById");
        return this.analisisMedicoService.findAnalisisMedicoById(idAnalisisMedico);
    }

    @Post()
    createAnalisisMedico(@Body() rolDto: AnalisisMedicoDto): Promise<AnalisisMedicoI> {
        console.log(new Date(), this.TAG, "createAnalisisMedico");
        return this.analisisMedicoService.createAnalisisMedico(rolDto);
    }

    @Put(':id') 
    updateAnalisisMedico(@Param('id') idAnalisisMedico: string, @Body() rolDto: AnalisisMedicoDto): Promise<AnalisisMedicoI> {
        console.log(new Date(), this.TAG, "updateAnalisisMedico");
        return this.analisisMedicoService.updateAnalisisMedico(idAnalisisMedico, rolDto);
    }

    @Delete(':id')
    deleteAnalisisMedico(@Param('id') idAnalisisMedico: string): Promise<AnalisisMedicoI> {
        console.log(new Date(), this.TAG, "deleteAnalisisMedico");
        return this.analisisMedicoService.deleteAnalisisMedico(idAnalisisMedico);
    }

}
