import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EntradaService } from './../services/entrada.service';
import { EntradaI } from 'src/interfaces/entrada.interface';
import { EntradaDto } from 'src/dto/entrada-dto';

@Controller('entrada')
export class EntradaController {

    TAG = "EntradaController";

    constructor(private readonly entradaService: EntradaService) { }

    @Get()
    showAllEntradas(): Promise<EntradaI[]> {
        console.log(new Date(), this.TAG, "showAllEntradas");
        return this.entradaService.showAllEntradas();
    }

    @Get(':id')
    findEntradaById(@Param('id') idEntrada: string): Promise<EntradaI> {
        console.log(new Date(), this.TAG, "findEntradaById");
        return this.entradaService.findEntradaById(idEntrada);
    }
    /*
        @Get('pago/:pagoId')
        findEntradaByPago(@Param('pagoId') pagoId: string): Promise<EntradaI> {
            console.log(new Date(), this.TAG, "findEntradaByPago");
            return this.entradaService.findEntradaByPago(pagoId);
        }
    */
    @Get('sucursal/:sucursalId/today/turno/:turno')
    showEntradasTodayBySucursalAndTurno(@Param('turno') turno: string, @Param('sucursalId') sucursalId: string): Promise<EntradaI[]> {
        console.log(new Date(), this.TAG, "showEntradasTodayBySucursalAndTurno");
        return this.entradaService.showEntradasTodayBySucursalAndTurno(sucursalId, turno);
    }

    @Get('sucursal/:sucursalId/apertura/:hora_apertura/cierre/:hora_cierre')
    showEntradasTodayBySucursalAndHoraAplicacion(@Param('sucursalId') sucursalId: string, @Param('hora_apertura') hora_apertura: string,
        @Param('hora_cierre') hora_cierre: string): Promise<EntradaI[]> {
        console.log(new Date(), this.TAG, "showEntradasTodayBySucursalAndHoraAplicacion");
        return this.entradaService.showEntradasTodayBySucursalAndHoraAplicacion(sucursalId, hora_apertura, hora_cierre);
    }

    @Get('sucursal/:sucursalId/apertura/:hora_apertura/cierre/:hora_cierre/pa')
    showEntradasTodayBySucursalAndHoraAplicacionPA(@Param('sucursalId') sucursalId: string, @Param('hora_apertura') hora_apertura: string,
        @Param('hora_cierre') hora_cierre: string): Promise<EntradaI[]> {
        console.log(new Date(), this.TAG, "showEntradasTodayBySucursalAndHoraAplicacionPA");
        return this.entradaService.showEntradasTodayBySucursalAndHoraAplicacionPA(sucursalId, hora_apertura, hora_cierre);
    }

    @Post()
    createEntrada(@Body() entradaDto: EntradaDto): Promise<EntradaI> {
        console.log(new Date(), this.TAG, "createEntrada");
        return this.entradaService.createEntrada(entradaDto);
    }

    @Put(':id')
    updateEntrada(@Param('id') idEntrada: string, @Body() entradaDto: EntradaDto): Promise<EntradaI> {
        console.log(new Date(), this.TAG, "updateEntrada");
        return this.entradaService.updateEntrada(idEntrada, entradaDto);
    }

    @Delete(':id')
    deleteEntrada(@Param('id') idEntrada: string): Promise<EntradaI> {
        console.log(new Date(), this.TAG, "deleteEntrada");
        return this.entradaService.deleteEntrada(idEntrada);
    }

}
