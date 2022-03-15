import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { CuracionNombreService } from '../services/curacion-nombre.service';
import { CuracionNombreI } from 'src/interfaces/curacion-nombre.interface';
import { CuracionNombreDto } from 'src/dto/curacion-nombre-dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('curacionNombre')
export class CuracionNombreController {

    TAG = "CuracionNombreController";

    constructor(private readonly curacionNombreService: CuracionNombreService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    showAllCuracionNombres() : Promise<CuracionNombreI[]> {
        console.log(new Date(), this.TAG, "showAllCuracionNombres");
        return this.curacionNombreService.showAllCuracionNombres();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findCuracionNombreById(@Param('id') idCuracionNombre: string): Promise<CuracionNombreI> {
        console.log(new Date(), this.TAG, "findCuracionNombreById");
        return this.curacionNombreService.findCuracionNombreById(idCuracionNombre);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    createCuracionNombre(@Body() curacionNombreDto: CuracionNombreDto): Promise<CuracionNombreI> {
        console.log(new Date(), this.TAG, "createCuracionNombre");
        return this.curacionNombreService.createCuracionNombre(curacionNombreDto);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id') 
    updateCuracionNombre(@Param('id') idCuracionNombre: string, @Body() curacionNombreDto: CuracionNombreDto): Promise<CuracionNombreI> {
        console.log(new Date(), this.TAG, "updateCuracionNombre");
        return this.curacionNombreService.updateCuracionNombre(idCuracionNombre, curacionNombreDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    deleteCuracionNombre(@Param('id') idCuracionNombre: string): Promise<CuracionNombreI> {
        console.log(new Date(), this.TAG, "deleteCuracionNombre");
        return this.curacionNombreService.deleteCuracionNombre(idCuracionNombre);
    }

}
