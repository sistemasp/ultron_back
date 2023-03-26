import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EstudioService } from '../services/estudio.service';
import { EstudioI } from 'src/interfaces/estudio.interface';
import { EstudioDto } from 'src/dto/estudio-dto';

@Controller('estudio')
export class EstudioController {

    TAG = "EstudioController";

    constructor(private readonly estudioService: EstudioService) {}

    @Get()
    showAllEstudios() : Promise<EstudioI[]> {
        console.log(new Date(), this.TAG, "showAllEstudios");
        return this.estudioService.showAllEstudios();
    }

    @Get(':id')
    findEstudioById(@Param('id') idEstudio: string): Promise<EstudioI> {
        console.log(new Date(), this.TAG, "findEstudioById");
        return this.estudioService.findEstudioById(idEstudio);
    }

    @Get('consulta/:consultaId')
    findEstudioByConsultaId(@Param('consultaId') consultaId: string): Promise<EstudioI> {
        console.log(new Date(), this.TAG, "findEstudioByConsultaId");
        return this.estudioService.findEstudioByConsultaId(consultaId);
    }

    @Post()
    createEstudio(@Body() estudioDto: EstudioDto): Promise<EstudioI> {
        console.log(new Date(), this.TAG, "createEstudio");
        return this.estudioService.createEstudio(estudioDto);
    }

    @Put(':id') 
    updateEstudio(@Param('id') idEstudio: string, @Body() estudioDto: EstudioDto): Promise<EstudioI> {
        console.log(new Date(), this.TAG, "updateEstudio");
        return this.estudioService.updateEstudio(idEstudio, estudioDto);
    }

    @Delete(':id')
    deleteEstudio(@Param('id') idEstudio: string): Promise<EstudioI> {
        console.log(new Date(), this.TAG, "deleteEstudio");
        return this.estudioService.deleteEstudio(idEstudio);
    }

    @Get('fecha_inicio/:diai/:mesi/:anioi/fecha_fin/:diaf/:mesf/:aniof/sucursal/:sucursalId')
    findEstudioByRangeDateAndSucursal(@Param('diai') diai: string, @Param('mesi') mesi: string, @Param('anioi') anioi: string,
        @Param('diaf') diaf: string, @Param('mesf') mesf: string, @Param('aniof') aniof: string,
        @Param('sucursalId') sucursalId: string): Promise<EstudioI[]> {
        console.log(new Date(), this.TAG, "findEstudioByRangeDateAndSucursal");
        return this.estudioService.findEstudioByRangeDateAndSucursal(anioi, mesi, diai, aniof, mesf, diaf, sucursalId);
    }

}
