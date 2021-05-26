import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CitaService } from '../services/cita.service';
import { CitaI } from 'src/interfaces/cita.interface';
import { CitaDto } from 'src/dto/cita-dto';

@Controller('cita')
export class CitaController {

    TAG = "CitaController";

    constructor(private readonly citaService: CitaService) {}

    @Get()
    showAllCitas() : Promise<CitaI[]> {
        console.log(new Date(), this.TAG, "showAllCitas");
        return this.citaService.showAllCitas();
    }

    @Get(':id')
    findCitaById(@Param('id') idCita: string): Promise<CitaI> {
        console.log(new Date(), this.TAG, "findCitaById");
        return this.citaService.findCitaById(idCita);
    }

    @Get('fecha_inicio/:diai/:mesi/:anioi/fecha_fin/:diaf/:mesf/:aniof/sucursal/:sucursalId')
    findDatesByRangeDateAndSucursal(@Param('diai') diai: string, @Param('mesi') mesi: string, @Param('anioi') anioi: string,
        @Param('diaf') diaf: string, @Param('mesf') mesf: string, @Param('aniof') aniof: string,
        @Param('sucursalId') sucursalId: string): Promise<CitaI[]> {
        console.log(new Date(), this.TAG, "findDatesByRangeDateAndSucursal");
        return this.citaService.findDatesByRangeDateAndSucursal(anioi, mesi, diai, aniof, mesf, diaf, sucursalId);
    }
    
    @Get('servicio/:idSericio')
    findCitaByServicioId(@Param('idSericio') idSericio: string): Promise<CitaI[]> {
        console.log(new Date(), this.TAG, "findCitaByServicioId");
        return this.citaService.findCitaByServicioId(idSericio);
    }

    

    @Post()
    createCita(@Body() citaDto: CitaDto): Promise<CitaI> {
        console.log(new Date(), this.TAG, "createCita");
        return this.citaService.createCita(citaDto);
    }

    @Put(':id') 
    updateCita(@Param('id') idCita: string, @Body() citaDto: CitaDto): Promise<CitaI> {
        console.log(new Date(), this.TAG, "updateCita");
        return this.citaService.updateCita(idCita, citaDto);
    }

    @Delete(':id')
    deleteCita(@Param('id') idCita: string): Promise<CitaI> {
        console.log(new Date(), this.TAG, "deleteCita");
        return this.citaService.deleteCita(idCita);
    }

}
