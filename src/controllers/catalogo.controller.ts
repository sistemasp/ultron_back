import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CatalogoService } from '../services/catalogo.service';
import { CatalogoI } from 'src/interfaces/catalogo.interface';
import { CatalogoDto } from 'src/dto/catalogo-dto';

@Controller('catalogo')
export class CatalogoController {

    TAG = "CatalogoController";

    constructor(private readonly catalogoService: CatalogoService) {}

    @Get()
    showAllCatalogos() : Promise<CatalogoI[]> {
        console.log(new Date(), this.TAG, "showAllCatalogos");
        return this.catalogoService.showAllCatalogos();
    }

    @Get(':id')
    findCatalogoById(@Param('id') idCatalogo: string): Promise<CatalogoI> {
        console.log(new Date(), this.TAG, "findCatalogoById");
        return this.catalogoService.findCatalogoById(idCatalogo);
    }

    @Post()
    createCatalogo(@Body() catalogoDto: CatalogoDto): Promise<CatalogoI> {
        console.log(new Date(), this.TAG, "createCatalogo");
        return this.catalogoService.createCatalogo(catalogoDto);
    }

    @Put(':id') 
    updateCatalogo(@Param('id') idCatalogo: string, @Body() catalogoDto: CatalogoDto): Promise<CatalogoI> {
        console.log(new Date(), this.TAG, "updateCatalogo");
        return this.catalogoService.updateCatalogo(idCatalogo, catalogoDto);
    }

    @Delete(':id')
    deleteCatalogo(@Param('id') idCatalogo: string): Promise<CatalogoI> {
        console.log(new Date(), this.TAG, "deleteCatalogo");
        return this.catalogoService.deleteCatalogo(idCatalogo);
    }

}
