import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { EmpleadoService } from 'src/services/empleado.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly empleadoService: EmpleadoService,
        private readonly jwtService: JwtService,
    ) { }

    async validateUser(numero_empleado: string, pass: string): Promise<any> {
        const user = await this.empleadoService.findEmployeeByEmployeeNumber(numero_empleado);
        if (user && user.password === pass) {
            const { 
                password,
                ...result
            } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { numero_empleado: user.numero_empleado, sub: user.userId };
        return {
            ...(user._doc),
            access_token: this.jwtService.sign(payload),
        };
    }
}