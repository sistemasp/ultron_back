import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { MaterialEsteticaService } from './../services/material-estetica.service';
import { MaterialEsteticaI } from 'src/interfaces/material-estetica.interface';
import { MaterialEsteticaDto } from 'src/dto/material-estetica-dto';

@Controller('materialestetica')
export class MaterialEsteticaController {

    TAG = "MaterialEsteticaController";

    constructor(private readonly materialEsteticaService: MaterialEsteticaService) {}

    @Get()
    showAllMaterialEsteticas() : Promise<MaterialEsteticaI[]> {
        console.log(new Date(), this.TAG, "showAllMaterialEsteticas");
        return this.materialEsteticaService.showAllMaterialEsteticas();
    }

    
    @Get('producto/:productosIds')
    showMaterialEsteticasByProducto(@Param('productosIds') productosIds: [String]) : Promise<MaterialEsteticaI[]> {
        console.log(productosIds);
        const query = productosIds.map(productosId => {
            return productosId;
        });
        console.log(query);

        console.log(new Date(), this.TAG, "showMaterialEsteticasByProducto");
        return this.materialEsteticaService.showMaterialEsteticasByProducto(productosIds);
    }

    @Get(':id')
    findMaterialEsteticaById(@Param('id') idMaterialEstetica: string): Promise<MaterialEsteticaI> {
        console.log(new Date(), this.TAG, "findMaterialEsteticaById");
        return this.materialEsteticaService.findMaterialEsteticaById(idMaterialEstetica);
    }

    @Post()
    createMaterialEstetica(@Body() materialEsteticaDto: MaterialEsteticaDto): Promise<MaterialEsteticaI> {
        console.log(new Date(), this.TAG, "createMaterialEstetica");
        return this.materialEsteticaService.createMaterialEstetica(materialEsteticaDto);
    }

    @Put(':id') 
    updateMaterialEstetica(@Param('id') idMaterialEstetica: string, @Body() materialEsteticaDto: MaterialEsteticaDto): Promise<MaterialEsteticaI> {
        console.log(new Date(), this.TAG, "updateMaterialEstetica");
        return this.materialEsteticaService.updateMaterialEstetica(idMaterialEstetica, materialEsteticaDto);
    }

    @Delete(':id')
    deleteMaterialEstetica(@Param('id') idMaterialEstetica: string): Promise<MaterialEsteticaI> {
        console.log(new Date(), this.TAG, "deleteMaterialEstetica");
        return this.materialEsteticaService.deleteMaterialEstetica(idMaterialEstetica);
    }

}
