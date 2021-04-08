import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { RecetaI } from 'src/interfaces/receta.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class RecetaService {

    constructor(@InjectModel('Receta') private readonly recetaModel : Model<RecetaI>) {}

    /**
     * Muestra todos los recetas de la BD
     */
    async showAllRecetas(): Promise<RecetaI[]> {
        return await this.recetaModel.find().sort('nombre');
    }

    /**
     * Busca solo un receta mediante su ID en la BD
     * @param idReceta 
     */
    async findRecetaById(idReceta: string): Promise<RecetaI> {
        return await this.recetaModel.findOne( { _id: idReceta } );
    }

    /**
     * Busca solo una receta mediante su consulta en la BD
     * @param idReceta 
     */
     async findRecetaByConsultaId(consultaId: string, ): Promise<RecetaI> {
        return await this.recetaModel.findOne( { 
            consultaId: consultaId,
        } );
    }

    /**
     * Busca solo un receta mediante su numero de empleado en la BD
     * @param idReceta 
     */
    async findRecetaByEmployeeNumber(employeeNumber: string): Promise<RecetaI> {
        return await this.recetaModel.findOne( { numero_empleado: employeeNumber } );
    }

    /**
     * Genera un nuevo receta en la BD
     * @param receta 
     */
    async createReceta(receta: RecetaI): Promise<RecetaI> {
        const newReceta = new this.recetaModel(receta);
        return await newReceta.save();
    }

    /**
     * Busca un receta por su Id para poder actualizarlo
     * @param idReceta 
     * @param receta 
     */
    async updateReceta(idReceta: string, receta: RecetaI): Promise<RecetaI> {
        return await this.recetaModel.updateOne({ _id: idReceta }, receta);
    }

    /**
     * Busca un receta por su ID y lo elimina de la BD
     * @param idReceta 
     */
    async deleteReceta(idReceta: string ): Promise<RecetaI> {
        return await this.recetaModel.findOneAndDelete({ _id: idReceta });
    }

}
