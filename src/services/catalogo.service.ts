import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CatalogoI } from 'src/interfaces/catalogo.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CatalogoService {

    constructor(@InjectModel('Catalogo') private readonly catalogoModel: Model<CatalogoI>) { }

    /**
     * Muestra todos los catalogos de la BD
     */
    async showAllCatalogos(): Promise<CatalogoI[]> {
        return await this.catalogoModel.find({ is_active: true }).sort('nombre');
    }

    /**
     * Busca solo un catalogo mediante su ID en la BD
     * @param idCatalogo 
     */
    async findCatalogoById(idCatalogo: string): Promise<CatalogoI> {
        return await this.catalogoModel.findOne({ _id: idCatalogo });
    }

    /**
     * Busca solo un catalogo mediante su numero de empleado en la BD
     * @param idCatalogo 
     */
    async findCatalogoByEmployeeNumber(employeeNumber: string): Promise<CatalogoI> {
        return await this.catalogoModel.findOne({ numero_empleado: employeeNumber });
    }

    /**
     * Genera un nuevo catalogo en la BD
     * @param catalogo 
     */
    async createCatalogo(catalogo: CatalogoI): Promise<CatalogoI> {
        const newCatalogo = new this.catalogoModel(catalogo);
        return await newCatalogo.save();
    }

    /**
     * Busca un catalogo por su Id para poder actualizarlo
     * @param idCatalogo 
     * @param catalogo 
     */
    async updateCatalogo(idCatalogo: string, catalogo: CatalogoI): Promise<any> {
        return await this.catalogoModel.updateOne({ _id: idCatalogo }, catalogo);
    }

    /**
     * Busca un catalogo por su ID y lo elimina de la BD
     * @param idCatalogo 
     */
    async deleteCatalogo(idCatalogo: string): Promise<CatalogoI> {
        return await this.catalogoModel.findOneAndDelete({ _id: idCatalogo });
    }

}
