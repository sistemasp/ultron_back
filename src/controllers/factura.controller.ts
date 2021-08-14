import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { FacturaService } from './../services/factura.service';
import { FacturaI } from 'src/interfaces/factura.interface';
import { FacturaDto } from 'src/dto/factura-dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('factura')
export class FacturaController {

    TAG = "FacturaController";

    constructor(private readonly facturaService: FacturaService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    showAllFacturas() : Promise<FacturaI[]> {
        console.log(new Date(), this.TAG, "showAllFacturas");
        return this.facturaService.showAllFacturas();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findFacturaById(@Param('id') idFactura: string): Promise<FacturaI> {
        console.log(new Date(), this.TAG, "findFacturaById");
        return this.facturaService.findFacturaById(idFactura);
    }

    @UseGuards(JwtAuthGuard)
    @Get('fecha_inicio/:diai/:mesi/:anioi/fecha_fin/:diaf/:mesf/:aniof/sucursal/:sucursalId')
    findFacturasByRangeDateAndSucursal(@Param('diai') diai: string, @Param('mesi') mesi: string, @Param('anioi') anioi: string,
        @Param('diaf') diaf: string, @Param('mesf') mesf: string, @Param('aniof') aniof: string,
        @Param('sucursalId') sucursalId: string) : Promise<FacturaI[]> {
        console.log(new Date(), this.TAG, "findFacturasByRangeDateAndSucursal");
        return this.facturaService.findFacturasByRangeDateAndSucursal(anioi, mesi, diai, aniof, mesf, diaf, sucursalId);
    }

    @UseGuards(JwtAuthGuard)
    @Get('razonsocial/:razonSocialId')
    findFacturaByRazonSocialId(@Param('razonSocialId') razonSocialId: string): Promise<FacturaI[]> {
        console.log(new Date(), this.TAG, "findFacturaByRazonSocialId");
        return this.facturaService.findFacturaByRazonSocialId(razonSocialId);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    createFactura(@Body() facturaDto: FacturaDto): Promise<FacturaI> {
        console.log(new Date(), this.TAG, "createFactura");
        return this.facturaService.createFactura(facturaDto);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id') 
    updateFactura(@Param('id') idFactura: string, @Body() facturaDto: FacturaDto): Promise<FacturaI> {
        console.log(new Date(), this.TAG, "updateFactura");
        return this.facturaService.updateFactura(idFactura, facturaDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    deleteFactura(@Param('id') idFactura: string): Promise<FacturaI> {
        console.log(new Date(), this.TAG, "deleteFactura");
        return this.facturaService.deleteFactura(idFactura);
    }

}
