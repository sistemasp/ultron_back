import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { GrupoAnalisisMedicosService } from '../services/grupo-analisis-medicos.service';
import { GrupoAnalisisMedicosI } from 'src/interfaces/grupo-analisis-medicos.interface';
import { GrupoAnalisisMedicosDto } from 'src/dto/grupo-analisis-medicos.dto';

@Controller('grupoanalisismedicos')
export class GrupoAnalisisMedicosController {

    TAG = "GrupoAnalisisMedicosController";

    constructor(private readonly grupoAnalisisMedicosService: GrupoAnalisisMedicosService) {}

    @Get()
    showAllGrupoAnalisisMedicoss() : Promise<GrupoAnalisisMedicosI[]> {
        console.log(new Date(), this.TAG, "showAllGrupoAnalisisMedicoss");
        return this.grupoAnalisisMedicosService.showAllGrupoAnalisisMedicoss();
    }

    @Get(':id')
    findGrupoAnalisisMedicosById(@Param('id') idGrupoAnalisisMedicos: string): Promise<GrupoAnalisisMedicosI> {
        console.log(new Date(), this.TAG, "findGrupoAnalisisMedicosById");
        return this.grupoAnalisisMedicosService.findGrupoAnalisisMedicosById(idGrupoAnalisisMedicos);
    }

    @Post()
    createGrupoAnalisisMedicos(@Body() rolDto: GrupoAnalisisMedicosDto): Promise<GrupoAnalisisMedicosI> {
        console.log(new Date(), this.TAG, "createGrupoAnalisisMedicos");
        return this.grupoAnalisisMedicosService.createGrupoAnalisisMedicos(rolDto);
    }

    @Put(':id') 
    updateGrupoAnalisisMedicos(@Param('id') idGrupoAnalisisMedicos: string, @Body() rolDto: GrupoAnalisisMedicosDto): Promise<GrupoAnalisisMedicosI> {
        console.log(new Date(), this.TAG, "updateGrupoAnalisisMedicos");
        return this.grupoAnalisisMedicosService.updateGrupoAnalisisMedicos(idGrupoAnalisisMedicos, rolDto);
    }

    @Delete(':id')
    deleteGrupoAnalisisMedicos(@Param('id') idGrupoAnalisisMedicos: string): Promise<GrupoAnalisisMedicosI> {
        console.log(new Date(), this.TAG, "deleteGrupoAnalisisMedicos");
        return this.grupoAnalisisMedicosService.deleteGrupoAnalisisMedicos(idGrupoAnalisisMedicos);
    }

}
