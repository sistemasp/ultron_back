import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { RecetaService } from '../services/receta.service';
import { RecetaI } from 'src/interfaces/receta.interface';
import { RecetaDto } from 'src/dto/receta-dto';

@Controller('receta')
export class RecetaController {

    TAG = "RecetaController";

    constructor(private readonly recetaService: RecetaService) {}

    @Get()
    showAllRecetas() : Promise<RecetaI[]> {
        console.log(new Date(), this.TAG, "showAllRecetas");
        return this.recetaService.showAllRecetas();
    }

    @Get(':id')
    findRecetaById(@Param('id') idReceta: string): Promise<RecetaI> {
        console.log(new Date(), this.TAG, "findRecetaById");
        return this.recetaService.findRecetaById(idReceta);
    }

    @Get('consulta/:consultaId')
    findRecetaByConsultaId(@Param('consultaId') consultaId: string): Promise<RecetaI> {
        console.log(new Date(), this.TAG, "findRecetaByConsultaId");
        return this.recetaService.findRecetaByConsultaId(consultaId);
    }

    @Post()
    createReceta(@Body() recetaDto: RecetaDto): Promise<RecetaI> {
        console.log(new Date(), this.TAG, "createReceta");
        return this.recetaService.createReceta(recetaDto);
    }

    @Put(':id') 
    updateReceta(@Param('id') idReceta: string, @Body() recetaDto: RecetaDto): Promise<RecetaI> {
        console.log(new Date(), this.TAG, "updateReceta");
        return this.recetaService.updateReceta(idReceta, recetaDto);
    }

    @Delete(':id')
    deleteReceta(@Param('id') idReceta: string): Promise<RecetaI> {
        console.log(new Date(), this.TAG, "deleteReceta");
        return this.recetaService.deleteReceta(idReceta);
    }

}
