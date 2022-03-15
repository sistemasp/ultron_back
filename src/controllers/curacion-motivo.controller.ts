import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { CuracionMotivoService } from '../services/curacion-motivo.service';
import { CuracionMotivoI } from 'src/interfaces/curacion-motivo.interface';
import { CuracionMotivoDto } from 'src/dto/curacion-motivo-dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('curacionmotivo')
export class CuracionMotivoController {

    TAG = "CuracionMotivoController";

    constructor(private readonly curacionMotivoService: CuracionMotivoService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    showAllCuracionMotivos() : Promise<CuracionMotivoI[]> {
        console.log(new Date(), this.TAG, "showAllCuracionMotivos");
        return this.curacionMotivoService.showAllCuracionMotivos();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findCuracionMotivoById(@Param('id') idCuracionMotivo: string): Promise<CuracionMotivoI> {
        console.log(new Date(), this.TAG, "findCuracionMotivoById");
        return this.curacionMotivoService.findCuracionMotivoById(idCuracionMotivo);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    createCuracionMotivo(@Body() curacionMotivoDto: CuracionMotivoDto): Promise<CuracionMotivoI> {
        console.log(new Date(), this.TAG, "createCuracionMotivo");
        return this.curacionMotivoService.createCuracionMotivo(curacionMotivoDto);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id') 
    updateCuracionMotivo(@Param('id') idCuracionMotivo: string, @Body() curacionMotivoDto: CuracionMotivoDto): Promise<CuracionMotivoI> {
        console.log(new Date(), this.TAG, "updateCuracionMotivo");
        return this.curacionMotivoService.updateCuracionMotivo(idCuracionMotivo, curacionMotivoDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    deleteCuracionMotivo(@Param('id') idCuracionMotivo: string): Promise<CuracionMotivoI> {
        console.log(new Date(), this.TAG, "deleteCuracionMotivo");
        return this.curacionMotivoService.deleteCuracionMotivo(idCuracionMotivo);
    }

}
