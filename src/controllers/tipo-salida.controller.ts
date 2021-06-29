import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TipoSalidaService } from './../services/tipo-salida.service';
import { TipoSalidaI } from 'src/interfaces/tipo-salida.interface';
import { TipoSalidaDto } from 'src/dto/tipo-salida-dto';

@Controller('tiposalida')
export class TipoSalidaController {

    TAG = "TipoSalidaController";

    constructor(private readonly tipoSalidaService: TipoSalidaService) {}

    @Get()
    showAllTipoSalidas() : Promise<TipoSalidaI[]> {
        console.log(new Date(), this.TAG, "showAllTipoSalidas");
        return this.tipoSalidaService.showAllTipoSalidas();
    }

    @Get(':id')
    findTipoSalidaById(@Param('id') idTipoSalida: string): Promise<TipoSalidaI> {
        console.log(new Date(), this.TAG, "findTipoSalidaById");
        return this.tipoSalidaService.findTipoSalidaById(idTipoSalida);
    }

    @Post()
    createTipoSalida(@Body() tipoSalidaDto: TipoSalidaDto): Promise<TipoSalidaI> {
        console.log(new Date(), this.TAG, "createTipoSalida");
        return this.tipoSalidaService.createTipoSalida(tipoSalidaDto);
    }

    @Put(':id') 
    updateTipoSalida(@Param('id') idTipoSalida: string, @Body() tipoSalidaDto: TipoSalidaDto): Promise<TipoSalidaI> {
        console.log(new Date(), this.TAG, "updateTipoSalida");
        return this.tipoSalidaService.updateTipoSalida(idTipoSalida, tipoSalidaDto);
    }

    @Delete(':id')
    deleteTipoSalida(@Param('id') idTipoSalida: string): Promise<TipoSalidaI> {
        console.log(new Date(), this.TAG, "deleteTipoSalida");
        return this.tipoSalidaService.deleteTipoSalida(idTipoSalida);
    }

}
