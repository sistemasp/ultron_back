import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EspecialidadService } from '../services/especialidad.service';
import { EspecialidadI } from 'src/interfaces/especialidad.interface';
import { EspecialidadDto } from 'src/dto/especialidad-dto';

@Controller('especialidad')
export class EspecialidadController {

    TAG = "EspecialidadController";

    constructor(private readonly especialidadService: EspecialidadService) {}

    @Get()
    showAllEspecialidades() : Promise<EspecialidadI[]> {
        console.log(new Date(), this.TAG, "showAllEspecialidades");
        return this.especialidadService.showAllEspecialidades();
    }

    @Get(':id')
    findEspecialidadById(@Param('id') idEspecialidad: string): Promise<EspecialidadI> {
        console.log(new Date(), this.TAG, "findEspecialidadById");
        return this.especialidadService.findEspecialidadById(idEspecialidad);
    }

    @Post()
    createEspecialidad(@Body() especialidadDto: EspecialidadDto): Promise<EspecialidadI> {
        console.log(new Date(), this.TAG, "createEspecialidad");
        return this.especialidadService.createEspecialidad(especialidadDto);
    }

    @Put(':id') 
    updateEspecialidad(@Param('id') idEspecialidad: string, @Body() especialidadDto: EspecialidadDto): Promise<EspecialidadI> {
        console.log(new Date(), this.TAG, "updateEspecialidad");
        return this.especialidadService.updateEspecialidad(idEspecialidad, especialidadDto);
    }

    @Delete(':id')
    deleteEspecialidad(@Param('id') idEspecialidad: string): Promise<EspecialidadI> {
        console.log(new Date(), this.TAG, "deleteEspecialidad");
        return this.especialidadService.deleteEspecialidad(idEspecialidad);
    }

}
