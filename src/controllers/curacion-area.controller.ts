import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { CuracionAreaService } from '../services/curacion-area.service';
import { CuracionAreaI } from 'src/interfaces/curacion-area.interface';
import { CuracionAreaDto } from 'src/dto/curacion-area-dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('curacionarea')
export class CuracionAreaController {

    TAG = "CuracionAreaController";

    constructor(private readonly curacionAreaService: CuracionAreaService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    showAllCuracionAreas() : Promise<CuracionAreaI[]> {
        console.log(new Date(), this.TAG, "showAllCuracionAreas");
        return this.curacionAreaService.showAllCuracionAreas();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findCuracionAreaById(@Param('id') idCuracionArea: string): Promise<CuracionAreaI> {
        console.log(new Date(), this.TAG, "findCuracionAreaById");
        return this.curacionAreaService.findCuracionAreaById(idCuracionArea);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    createCuracionArea(@Body() curacionAreaDto: CuracionAreaDto): Promise<CuracionAreaI> {
        console.log(new Date(), this.TAG, "createCuracionArea");
        return this.curacionAreaService.createCuracionArea(curacionAreaDto);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id') 
    updateCuracionArea(@Param('id') idCuracionArea: string, @Body() curacionAreaDto: CuracionAreaDto): Promise<CuracionAreaI> {
        console.log(new Date(), this.TAG, "updateCuracionArea");
        return this.curacionAreaService.updateCuracionArea(idCuracionArea, curacionAreaDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    deleteCuracionArea(@Param('id') idCuracionArea: string): Promise<CuracionAreaI> {
        console.log(new Date(), this.TAG, "deleteCuracionArea");
        return this.curacionAreaService.deleteCuracionArea(idCuracionArea);
    }

}
