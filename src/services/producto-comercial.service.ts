import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ProductoComercialI } from 'src/interfaces/producto-comercial.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductoComercialService {

    constructor(@InjectModel('ProductoComercial') private readonly productoComercialModel: Model<ProductoComercialI>) { }

    /**
     * Muestra todos los productoComercials de la BD
     */
    async showAllProductoComercials(): Promise<ProductoComercialI[]> {
        return await this.productoComercialModel.find({ is_active: true })
            .sort('nombre')
            .populate('laboratorio');
    }

    /**
     * Busca solo un productoComercial mediante su ID en la BD
     * @param idProductoComercial 
     */
    async findProductoComercialById(idProductoComercial: string): Promise<ProductoComercialI> {
        return await this.productoComercialModel.findOne({ _id: idProductoComercial });
    }

    /**
     * Busca solo un productoComercial mediante su numero de empleado en la BD
     * @param idProductoComercial 
     */
    async showProductoComercialByLaboratorioId(laboratorioId): Promise<ProductoComercialI[]> {
        return await this.productoComercialModel.find({ 
            laboratorio: laboratorioId,
            is_active: true,
        });
    }

    /**
     * Genera un nuevo productoComercial en la BD
     * @param productoComercial 
     */
    async createProductoComercial(productoComercial: ProductoComercialI): Promise<ProductoComercialI> {
        const newProductoComercial = new this.productoComercialModel(productoComercial);
        return await newProductoComercial.save();
    }

    /**
     * Busca un productoComercial por su Id para poder actualizarlo
     * @param idProductoComercial 
     * @param productoComercial 
     */
    async updateProductoComercial(idProductoComercial: string, productoComercial: ProductoComercialI): Promise<any> {
        return await this.productoComercialModel.updateOne({ _id: idProductoComercial }, productoComercial);
    }

    /**
     * Busca un productoComercial por su ID y lo elimina de la BD
     * @param idProductoComercial 
     */
    async deleteProductoComercial(idProductoComercial: string): Promise<ProductoComercialI> {
        return await this.productoComercialModel.findOneAndDelete({ _id: idProductoComercial });
    }

}
