import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProductoComercialService } from '../services/producto-comercial.service';
import { ProductoComercialI } from 'src/interfaces/producto-comercial.interface';
import { ProductoComercialDto } from 'src/dto/producto-comercial-dto';

@Controller('productocomercial')
export class ProductoComercialController {

    TAG = "ProductoComercialController";

    constructor(private readonly productoComercialService: ProductoComercialService) {}

    @Get()
    showAllProductoComercials() : Promise<ProductoComercialI[]> {
        console.log(new Date(), this.TAG, "showAllProductoComercials");
        return this.productoComercialService.showAllProductoComercials();
    }

    @Get(':id')
    findProductoComercialById(@Param('id') idProductoComercial: string): Promise<ProductoComercialI> {
        console.log(new Date(), this.TAG, "findProductoComercialById");
        return this.productoComercialService.findProductoComercialById(idProductoComercial);
    }

    @Get('laboratorio/:idLaboratorio')
    showProductoComercialByLaboratorioId(@Param('idLaboratorio') idLaboratorio: string): Promise<ProductoComercialI[]> {
        console.log(new Date(), this.TAG, "showProductoComercialByLaboratorioId");
        return this.productoComercialService.showProductoComercialByLaboratorioId(idLaboratorio);
    }

    @Post()
    createProductoComercial(@Body() productoComercialDto: ProductoComercialDto): Promise<ProductoComercialI> {
        console.log(new Date(), this.TAG, "createProductoComercial");
        return this.productoComercialService.createProductoComercial(productoComercialDto);
    }

    @Put(':id') 
    updateProductoComercial(@Param('id') idProductoComercial: string, @Body() productoComercialDto: ProductoComercialDto): Promise<ProductoComercialI> {
        console.log(new Date(), this.TAG, "updateProductoComercial");
        return this.productoComercialService.updateProductoComercial(idProductoComercial, productoComercialDto);
    }

    @Delete(':id')
    deleteProductoComercial(@Param('id') idProductoComercial: string): Promise<ProductoComercialI> {
        console.log(new Date(), this.TAG, "deleteProductoComercial");
        return this.productoComercialService.deleteProductoComercial(idProductoComercial);
    }

}
