import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TipoEntradaService } from '../services/tipo-entrada.service';
import { TipoEntradaI } from 'src/interfaces/tipo-entrada.interface';
import { TipoEntradaDto } from 'src/dto/tipo-entrada-dto';

@Controller('tipoentrada')
export class TipoEntradaController {

    TAG = "TipoEntradaController";

    constructor(private readonly tipoEntradaService: TipoEntradaService) {}

    @Get()
    showAllTipoEntradas() : Promise<TipoEntradaI[]> {
        console.log(new Date(), this.TAG, "showAllTipoEntradas");
        return this.tipoEntradaService.showAllTipoEntradas();
    }

    @Get('actives')
    showActivesTipoEntradas() : Promise<TipoEntradaI[]> {
        console.log(new Date(), this.TAG, "showActivesTipoEntradas");
        return this.tipoEntradaService.showActivesTipoEntradas();
    }    

    @Get(':id')
    findTipoEntradaById(@Param('id') idTipoEntrada: string): Promise<TipoEntradaI> {
        console.log(new Date(), this.TAG, "findTipoEntradaById");
        return this.tipoEntradaService.findTipoEntradaById(idTipoEntrada);
    }

    @Post()
    createTipoEntrada(@Body() tipoEntradaDto: TipoEntradaDto): Promise<TipoEntradaI> {
        console.log(new Date(), this.TAG, "createTipoEntrada");
        return this.tipoEntradaService.createTipoEntrada(tipoEntradaDto);
    }

    @Put(':id') 
    updateTipoEntrada(@Param('id') idTipoEntrada: string, @Body() tipoEntradaDto: TipoEntradaDto): Promise<TipoEntradaI> {
        console.log(new Date(), this.TAG, "updateTipoEntrada");
        return this.tipoEntradaService.updateTipoEntrada(idTipoEntrada, tipoEntradaDto);
    }

    @Delete(':id')
    deleteTipoEntrada(@Param('id') idTipoEntrada: string): Promise<TipoEntradaI> {
        console.log(new Date(), this.TAG, "deleteTipoEntrada");
        return this.tipoEntradaService.deleteTipoEntrada(idTipoEntrada);
    }

}
