import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { SalidaService } from './../services/salida.service';
import { SalidaI } from 'src/interfaces/salida.interface';
import { SalidaDto } from 'src/dto/salida-dto';

@Controller('salida')
export class SalidaController {

    TAG = "SalidaController";

    constructor(private readonly salidaService: SalidaService) {}

    @Get()
    showAllSalidas() : Promise<SalidaI[]> {
        console.log(new Date(), this.TAG, "showAllSalidas");
        return this.salidaService.showAllSalidas();
    }

    @Get(':id')
    findSalidaById(@Param('id') idSalida: string): Promise<SalidaI> {
        console.log(new Date(), this.TAG, "findSalidaById");
        return this.salidaService.findSalidaById(idSalida);
    }

    @Get('pagodermatologo/:pagoDermatologoId')
    findSalidaByPagoDermatologoId(@Param('pagoDermatologoId') pagoDermatologoId: string): Promise<SalidaI> {
        console.log(new Date(), this.TAG, "findSalidaByPagoDermatologoId");
        return this.salidaService.findSalidaByPagoDermatologoId(pagoDermatologoId);
    }

    @Get('sucursal/:sucursalId/today/turno/:turno')
    showSalidasTodayBySucursalAndTurno(@Param('turno') turno: string, @Param('sucursalId') sucursalId: string) : Promise<SalidaI[]> {
        console.log(new Date(), this.TAG, "showSalidasTodayBySucursalAndTurno");
        return this.salidaService.showSalidasTodayBySucursalAndTurno(sucursalId, turno);
    }

    @Get('sucursal/:sucursalId/apertura/:hora_apertura/cierre/:hora_cierre')
    showSalidasTodayBySucursalAndHoraAplicacion(@Param('sucursalId') sucursalId: string, @Param('hora_apertura') hora_apertura: string,
    @Param('hora_cierre') hora_cierre: string) : Promise<SalidaI[]> {
        console.log(new Date(), this.TAG, "showSalidasTodayBySucursalAndHoraAplicacion");
        return this.salidaService.showSalidasTodayBySucursalAndHoraAplicacion(sucursalId, hora_apertura, hora_cierre);
    }

    @Get('fecha_inicio/:diai/:mesi/:anioi/fecha_fin/:diaf/:mesf/:aniof/sucursal/:sucursalId')
    findSalidasByRangeDateAndSucursal(@Param('diai') diai: string, @Param('mesi') mesi: string, @Param('anioi') anioi: string,
        @Param('diaf') diaf: string, @Param('mesf') mesf: string, @Param('aniof') aniof: string,
        @Param('sucursalId') sucursalId: string) : Promise<SalidaI[]> {
        console.log(new Date(), this.TAG, "findSalidasByRangeDateAndSucursal");
        return this.salidaService.findSalidasByRangeDateAndSucursal(anioi, mesi, diai, aniof, mesf, diaf, sucursalId);
    }

    @Post()
    createSalida(@Body() salidaDto: SalidaDto): Promise<SalidaI> {
        console.log(new Date(), this.TAG, "createSalida");
        return this.salidaService.createSalida(salidaDto);
    }

    @Put(':id') 
    updateSalida(@Param('id') idSalida: string, @Body() salidaDto: SalidaDto): Promise<SalidaI> {
        console.log(new Date(), this.TAG, "updateSalida");
        return this.salidaService.updateSalida(idSalida, salidaDto);
    }

    @Delete(':id')
    deleteSalida(@Param('id') idSalida: string): Promise<SalidaI> {
        console.log(new Date(), this.TAG, "deleteSalida");
        return this.salidaService.deleteSalida(idSalida);
    }

}
