import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { OcupacionService } from '../services/ocupacion.service';
import { OcupacionI } from 'src/interfaces/ocupacion.interface';
import { OcupacionDto } from 'src/dto/ocupacion-dto';

@Controller('ocupacion')
export class OcupacionController {

    TAG = "OcupacionController";

    constructor(private readonly ocupacionService: OcupacionService) { }

    @Get()
    showAllOcupacions(): Promise<OcupacionI[]> {
        console.log(new Date(), this.TAG, "showAllOcupacions");
        return this.ocupacionService.showAllOcupacions();
    }

    @Get(':id')
    findOcupacionById(@Param('id') idOcupacion: string): Promise<OcupacionI> {
        console.log(new Date(), this.TAG, "findOcupacionById");
        return this.ocupacionService.findOcupacionById(idOcupacion);
    }

    @Post()
    createOcupacion(@Body() ocupacionDto: OcupacionDto): Promise<OcupacionI> {
        console.log(new Date(), this.TAG, "createOcupacion");
        return this.ocupacionService.createOcupacion(ocupacionDto);
    }

    @Put(':id')
    updateOcupacion(@Param('id') idOcupacion: string, @Body() ocupacionDto: OcupacionDto): Promise<OcupacionI> {
        console.log(new Date(), this.TAG, "updateOcupacion");
        return this.ocupacionService.updateOcupacion(idOcupacion, ocupacionDto);
    }

    @Delete(':id')
    deleteOcupacion(@Param('id') idOcupacion: string): Promise<OcupacionI> {
        console.log(new Date(), this.TAG, "deleteOcupacion");
        return this.ocupacionService.deleteOcupacion(idOcupacion);
    }

}
