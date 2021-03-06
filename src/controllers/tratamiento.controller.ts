import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TratamientoService } from './../services/tratamiento.service';
import { TratamientoI } from 'src/interfaces/tratamiento.interface';
import { TratamientoDto } from 'src/dto/tratamiento-dto';

@Controller('tratamiento')
export class TratamientoController {

    TAG = "TratamientoController";

    constructor(private readonly tratamientoService: TratamientoService) {}

    @Get()
    showAllTreatments() : Promise<TratamientoI[]> {
        console.log(new Date(), this.TAG, "showAllTreatments");
        return this.tratamientoService.showAllTreatments();
    }

    @Get(':id')
    findTreatmentById(@Param('id') idTratamiento: string): Promise<TratamientoI> {
        console.log(new Date(), this.TAG, "findTreatmentById");
        return this.tratamientoService.findTreatmentById(idTratamiento);
    }

    @Get('servicio/:servicioId')
    findTreatmentByServicio(@Param('servicioId') servicioId: string): Promise<TratamientoI[]> {
        console.log(new Date(), this.TAG, "findTreatmentByServicio");
        return this.tratamientoService.findTreatmentByServicio(servicioId);
    }

    @Post()
    createTreatment(@Body() tratamientoDto: TratamientoDto): Promise<TratamientoI> {
        console.log(new Date(), this.TAG, "createTreatment");
        return this.tratamientoService.createTreatment(tratamientoDto);
    }

    @Put(':id') 
    updateTreatment(@Param('id') idTratamiento: string, @Body() tratamientoDto: TratamientoDto): Promise<TratamientoI> {
        console.log(new Date(), this.TAG, "updateTreatment");
        return this.tratamientoService.updateTreatment(idTratamiento, tratamientoDto);
    }

    @Delete(':id')
    deleteTreatment(@Param('id') idTratamiento: string): Promise<TratamientoI> {
        console.log(new Date(), this.TAG, "deleteTreatment");
        return this.tratamientoService.deleteTreatment(idTratamiento);
    }
    
}
