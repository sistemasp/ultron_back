import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { CuracionTipoService } from '../services/curacion-tipo.service';
import { CuracionTipoI } from 'src/interfaces/curacion-tipo.interface';
import { CuracionTipoDto } from 'src/dto/curacion-tipo-dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('curacionTipo')
export class CuracionTipoController {

    TAG = "CuracionTipoController";

    constructor(private readonly curacionTipoService: CuracionTipoService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    showAllCuracionTipos() : Promise<CuracionTipoI[]> {
        console.log(new Date(), this.TAG, "showAllCuracionTipos");
        return this.curacionTipoService.showAllCuracionTipos();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findCuracionTipoById(@Param('id') idCuracionTipo: string): Promise<CuracionTipoI> {
        console.log(new Date(), this.TAG, "findCuracionTipoById");
        return this.curacionTipoService.findCuracionTipoById(idCuracionTipo);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    createCuracionTipo(@Body() curacionTipoDto: CuracionTipoDto): Promise<CuracionTipoI> {
        console.log(new Date(), this.TAG, "createCuracionTipo");
        return this.curacionTipoService.createCuracionTipo(curacionTipoDto);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id') 
    updateCuracionTipo(@Param('id') idCuracionTipo: string, @Body() curacionTipoDto: CuracionTipoDto): Promise<CuracionTipoI> {
        console.log(new Date(), this.TAG, "updateCuracionTipo");
        return this.curacionTipoService.updateCuracionTipo(idCuracionTipo, curacionTipoDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    deleteCuracionTipo(@Param('id') idCuracionTipo: string): Promise<CuracionTipoI> {
        console.log(new Date(), this.TAG, "deleteCuracionTipo");
        return this.curacionTipoService.deleteCuracionTipo(idCuracionTipo);
    }

}
