import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TipoMedicamentoService } from '../services/tipo-medicamento.service';
import { TipoMedicamentoI } from 'src/interfaces/tipo-medicamento.interface';
import { TipoMedicamentoDto } from 'src/dto/tipo-medicamento-dto';

@Controller('tipomedicamento')
export class TipoMedicamentoController {

    TAG = "TipoMedicamentoController";

    constructor(private readonly tipoMedicamentoService: TipoMedicamentoService) {}

    @Get()
    showAllTipoMedicamentos() : Promise<TipoMedicamentoI[]> {
        console.log(new Date(), this.TAG, "showAllTipoMedicamentos");
        return this.tipoMedicamentoService.showAllTipoMedicamentos();
    }

    @Get(':id')
    findTipoMedicamentoById(@Param('id') idTipoMedicamento: string): Promise<TipoMedicamentoI> {
        console.log(new Date(), this.TAG, "findTipoMedicamentoById");
        return this.tipoMedicamentoService.findTipoMedicamentoById(idTipoMedicamento);
    }

    @Post()
    createTipoMedicamento(@Body() rolDto: TipoMedicamentoDto): Promise<TipoMedicamentoI> {
        console.log(new Date(), this.TAG, "createTipoMedicamento");
        return this.tipoMedicamentoService.createTipoMedicamento(rolDto);
    }

    @Put(':id') 
    updateTipoMedicamento(@Param('id') idTipoMedicamento: string, @Body() rolDto: TipoMedicamentoDto): Promise<TipoMedicamentoI> {
        console.log(new Date(), this.TAG, "updateTipoMedicamento");
        return this.tipoMedicamentoService.updateTipoMedicamento(idTipoMedicamento, rolDto);
    }

    @Delete(':id')
    deleteTipoMedicamento(@Param('id') idTipoMedicamento: string): Promise<TipoMedicamentoI> {
        console.log(new Date(), this.TAG, "deleteTipoMedicamento");
        return this.tipoMedicamentoService.deleteTipoMedicamento(idTipoMedicamento);
    }

}
