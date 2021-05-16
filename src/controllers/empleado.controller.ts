import { Controller, Get, Post, Put, Delete, Param, Body, Request, UseGuards } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';
import { EmpleadoDto } from 'src/dto/empleado-dto';
import { EmpleadoI } from 'src/interfaces/empleado.interface';
import { EmpleadoService } from 'src/services/empleado.service';

@Controller('empleado')
export class EmpleadoController {

    TAG = "EmpleadoController";

    constructor(
        private readonly empleadoService: EmpleadoService,
        private readonly authService: AuthService
    ) { }

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req) {
        console.log(new Date(), this.TAG, "login");
        return this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    showAllEmployees(): Promise<EmpleadoI[]> {
        console.log(new Date(), this.TAG, "showAllEmployees");
        return this.empleadoService.showAllEmployees();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findEmployeeById(@Param('id') idEmpleado: string): Promise<EmpleadoI> {
        console.log(new Date(), this.TAG, "findEmployeeById");
        return this.empleadoService.findEmployeeById(idEmpleado);
    }

    @UseGuards(JwtAuthGuard)
    @Get('number/:employeeNumber')
    findEmployeeByEmployeeNumber(@Param('employeeNumber') employeeNumber: string): Promise<EmpleadoI> {
        console.log(new Date(), this.TAG, "findEmployeeByEmployeeNumber");
        return this.empleadoService.findEmployeeByEmployeeNumber(employeeNumber);
    }

    @UseGuards(JwtAuthGuard)
    @Get('rol/:id_rol')
    findEmployeesByRolId(@Param('id_rol') idRol: string): Promise<EmpleadoI[]> {
        console.log(new Date(), this.TAG, "findEmployeesByRolId");
        return this.empleadoService.findEmployeesByRolId(idRol);
    }

    @UseGuards(JwtAuthGuard)
    @Get('rol/:id_rol/available')
    findEmployeesByRolIdAvailable(@Param('id_rol') idRol: string): Promise<EmpleadoI[]> {
        console.log(new Date(), this.TAG, "findEmployeesByRolIdAvailable");
        return this.empleadoService.findEmployeesByRolIdAvailable(idRol);
    }

    //@UseGuards(JwtAuthGuard)
    @Post()
    createEmployee(@Body() empleadoDto: EmpleadoDto): Promise<EmpleadoI> {
        console.log(new Date(), this.TAG, "createEmployee");
        return this.empleadoService.createEmployee(empleadoDto);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    updateEmployee(@Param('id') idEmpleado: string, @Body() empleadoDto: EmpleadoDto): Promise<EmpleadoI> {
        console.log(new Date(), this.TAG, "updateEmployee");
        return this.empleadoService.updateEmployee(idEmpleado, empleadoDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    deleteEmployee(@Param('id') idEmpleado: string): Promise<EmpleadoI> {
        console.log(new Date(), this.TAG, "deleteEmployee");
        return this.empleadoService.deleteEmployee(idEmpleado);
    }

    @Get('login/:employeeNumber/:password')
    loginEmployee(@Param('employeeNumber') employeeNumber: string, @Param('password') password: string): Promise<EmpleadoI> {
        console.log(new Date(), this.TAG, "loginEmployee");
        return this.empleadoService.loginEmployee(employeeNumber, password);
    }

}
