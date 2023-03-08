import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { AcidoController } from './controllers/acido.controller';
import { AparatologiaController } from './controllers/aparatolgia.controller';
import { AreaController } from './controllers/area.controller';
import { BancoController } from './controllers/banco.controller';
import { BiopsiaController } from './controllers/biopsia.controller';
import { CabinaController } from './controllers/cabina.controller';
import { CancelacionController } from './controllers/cancelacion.controller';
import { CatalogoController } from './controllers/catalogo.controller';
import { CirugiaController } from './controllers/cirugia.controller';
import { ClaveSupervisorController } from './controllers/clave-supervisor.controller';
import { ConsecutivoController } from './controllers/consecutivo.controller';
import { ConsultaController } from './controllers/consulta.controller';
import { ConsultorioController } from './controllers/consultorio.controller';
import { CorteController } from './controllers/corte.controller';
import { DermapenController } from './controllers/dermapen.controller';
import { SalidaController } from './controllers/salida.controller';
import { EspecialidadController } from './controllers/especialidad.controller';
import { EsquemaController } from './controllers/esquema.controller';
import { EsteticaController } from './controllers/estetica.controller';
import { FacialController } from './controllers/facial.controller';
import { FacturaController } from './controllers/factura.controller';
import { FormaPagoController } from './controllers/forma-pago.controller';
import { FrecuenciaController } from './controllers/frecuencia.controller';
import { HorarioController } from './controllers/horario.controller';
import { EntradaController } from './controllers/entrada.controller';
import { LaboratorioController } from './controllers/laboratorio.controller';
import { MaterialEsteticaController } from './controllers/material-estetica.controller';
import { MaterialController } from './controllers/material.controller';
import { MedioController } from './controllers/medio.controller';
import { OcupacionController } from './controllers/ocupacion.controller';
import { PacienteController } from './controllers/paciente.controller';
import { PagoDermatologoController } from './controllers/pago-dermatologo.controller';
import { PagoPatologoController } from './controllers/pago-patologo.controller';
import { PagoController } from './controllers/pago.controller';
import { ProductoComercialController } from './controllers/producto-comercial.controller';
import { ProductoController } from './controllers/producto.controller';
import { RazonSocialController } from './controllers/razon-social.controller';
import { RecetaController } from './controllers/receta.controller';
import { RolController } from './controllers/rol.controller';
import { SalaCirugiaController } from './controllers/sala-cirugia.controller';
import { ServicioController } from './controllers/servicio.controller';
import { SexoController } from './controllers/sexo.controller';
import { StatusController } from './controllers/status.controller';
import { SucursalController } from './controllers/sucursal.controller';
import { TipoCitaController } from './controllers/tipo-cita.controller';
import { TipoSalidaController } from './controllers/tipo-salida.controller';
import { TipoEsteticaController } from './controllers/tipo-estetica.controller';
import { TipoEntradaController } from './controllers/tipo-entrada.controller';
import { TipoTarjetaController } from './controllers/tipo-tarjeta.controller';
import { TratamientoController } from './controllers/tratamiento.controller';
import { UsoCfdiController } from './controllers/uso-cfdi.controller';
import { EventsModule } from './events/events.module';
import { AcidoSchema } from './schemas/acido.schema';
import { AparatologiaSchema } from './schemas/aparatologia.schema';
import { AreaSchema } from './schemas/area.schema';
import { BancoSchema } from './schemas/banco.schema';
import { BiopsiaSchema } from './schemas/biopsia.schema';
import { CabinaSchema } from './schemas/cabina.schema';
import { CancelacionSchema } from './schemas/cancelacion.schema';
import { CatalogoSchema } from './schemas/catalogo.schema';
import { CirugiaSchema } from './schemas/cirugia.schema';
import { ClaveSupervisorSchema } from './schemas/clave-supervisor.schema';
import { ConsecutivoSchema } from './schemas/consecutivo.schema';
import { ConsultaSchema } from './schemas/consulta.schema';
import { ConsultorioSchema } from './schemas/consultorio.schema';
import { CorteSchema } from './schemas/corte.schema';
import { DermapenSchema } from './schemas/dermapen.schema';
import { SalidaSchema } from './schemas/salida.schema';
import { EmpleadoSchema } from './schemas/empleado.schema';
import { EspecialidadSchema } from './schemas/especialidad.schema';
import { EsquemaSchema } from './schemas/esquema.schema';
import { EsteticaSchema } from './schemas/estetica.schema';
import { FacialSchema } from './schemas/facial.schema';
import { FacturaSchema } from './schemas/factura.schema';
import { FormaPagoSchema } from './schemas/forma-pago.schema';
import { FrecuenciaSchema } from './schemas/frecuencia.schema';
import { HorarioSchema } from './schemas/horario.schema';
import { EntradaSchema } from './schemas/entrada.schema';
import { LaboratorioSchema } from './schemas/laboratorio.schema';
import { MaterialEsteticaSchema } from './schemas/material-estetica.schema';
import { MaterialSchema } from './schemas/material.schema';
import { MedioSchema } from './schemas/medio.schema';
import { OcupacionSchema } from './schemas/ocupacion.schema';
import { PacienteSchema } from './schemas/paciente.schema';
import { PagoDermatologoSchema } from './schemas/pago-dermatologo.schema';
import { PagoPatologoSchema } from './schemas/pago-patologo.schema';
import { PagoSchema } from './schemas/pago.schema';
import { ProductoComercialSchema } from './schemas/producto-comercial.schema';
import { ProductoSchema } from './schemas/producto.schema';
import { RazonSocialSchema } from './schemas/razon-social.schema';
import { RecetaSchema } from './schemas/receta.schema';
import { RolSchema } from './schemas/rol.schema';
import { SalaCirugiaSchema } from './schemas/sala-cirugia.schema';
import { ServicioSchema } from './schemas/servicio.schema';
import { SexoSchema } from './schemas/sexo.schema';
import { StatusSchema } from './schemas/status.schema';
import { SucursalSchema } from './schemas/sucursal.schema';
import { TipoCitaSchema } from './schemas/tipo-cita.schema';
import { TipoSalidaSchema } from './schemas/tipo-salida.schema';
import { TipoEsteticaSchema } from './schemas/tipo-estetica.schema';
import { TipoEntradaSchema } from './schemas/tipo-entrada.schema';
import { TipoTarjetaSchema } from './schemas/tipo-tarjeta.schema';
import { TratamientoSchema } from './schemas/tratamiento.schema';
import { UsoCfdiSchema } from './schemas/uso-cfdi.schema';
import { AcidoService } from './services/acido.service';
import { AparatologiaService } from './services/aparatologia.service';
import { AreaService } from './services/area.service';
import { BancoService } from './services/banco.service';
import { BiopsiaService } from './services/biopsia.service';
import { CabinaService } from './services/cabina.service';
import { CancelacionService } from './services/cancelacion.service';
import { CatalogoService } from './services/catalogo.service';
import { CirugiaService } from './services/cirugia.service';
import { ClaveSupervisorService } from './services/clave-supervisor.service';
import { ConsecutivoService } from './services/consecutivo.service';
import { ConsultaService } from './services/consulta.service';
import { ConsultorioService } from './services/consultorio.service';
import { CorteService } from './services/corte.service';
import { DermapenService } from './services/dermapen.service';
import { SalidaService } from './services/salida.service';
import { EspecialidadService } from './services/especialidad.service';
import { EsquemaService } from './services/esquema.service';
import { EsteticaService } from './services/estetica.service';
import { FacialService } from './services/facial.service';
import { FacturaService } from './services/factura.service';
import { FormaPagoService } from './services/forma-pago.service';
import { FrecuenciaService } from './services/frecuencia.service';
import { HorarioService } from './services/horario.service';
import { EntradaService } from './services/entrada.service';
import { LaboratorioService } from './services/laboratorio.service';
import { MaterialEsteticaService } from './services/material-estetica.service';
import { MaterialService } from './services/material.service';
import { MedioService } from './services/medio.service';
import { OcupacionService } from './services/ocupacion.service';
import { PacienteService } from './services/paciente.service';
import { PagoDermatologoService } from './services/pago-dermatologo.service';
import { PagoPatologoService } from './services/pago-patologo.service';
import { PagoService } from './services/pago.service';
import { ProductoComercialService } from './services/producto-comercial.service';
import { ProductoService } from './services/producto.service';
import { RazonSocialService } from './services/razon-social.service';
import { RecetaService } from './services/receta.service';
import { RolService } from './services/rol.service';
import { SalaCirugiaService } from './services/sala-cirugia.service';
import { ServicioService } from './services/servicio.service';
import { SexoService } from './services/sexo.service';
import { StatusService } from './services/status.service';
import { SucursalService } from './services/sucursal.service';
import { TipoCitaService } from './services/tipo-cita.service';
import { TipoSalidaService } from './services/tipo-salida.service';
import { TipoEsteticaService } from './services/tipo-estetica.service';
import { TipoEntradaService } from './services/tipo-entrada.service';
import { TipoTarjetaService } from './services/tipo-tarjeta.service';
import { TratamientoService } from './services/tratamiento.service';
import { UsoCfdiService } from './services/uso-cfdi.service';
import { EmpleadoController } from './controllers/empleado.controller';
import { EmpleadoService } from './services/empleado.service';
import { jwtConstants } from './constants';
import { LocalStrategy } from './auth/strategies/local.strategy';
import { JwtStrategy } from './auth/strategies/jwt.strategy';
import { AuthService } from './auth/auth.service';
import { CitaSchema } from './schemas/cita.schema';
import { CitaController } from './controllers/cita.controller';
import { CitaService } from './services/cita.service';
import { SesionAnticipadaSchema } from './schemas/sesion-anticipada.schema';
import { SesionAnticipadaController } from './controllers/sesion-anticipada.controller';
import { SesionAnticipadaService } from './services/sesion-anticipada.service';
import { PagoAnticipadoSchema } from './schemas/pago-anticipado.schema';
import { PagoAnticipadoController } from './controllers/pago-anticipado.controller';
import { PagoAnticipadoService } from './services/pago-anticipado.service';
import { CuracionSchema } from './schemas/curacion.schema';
import { CuracionAreaSchema } from './schemas/curacion-area.schema';
import { CuracionNombreSchema } from './schemas/curacion-nombre.schema';
import { CuracionMotivoSchema } from './schemas/curacion-motivo.schema';
import { CuracionTipoSchema } from './schemas/curacion-tipo.schema';
import { CuracionController } from './controllers/curacion.controller';
import { CuracionAreaController } from './controllers/curacion-area.controller';
import { CuracionNombreController } from './controllers/curacion-nombre.controller';
import { CuracionMotivoController } from './controllers/curacion-motivo.controller';
import { CuracionTipoController } from './controllers/curacion-tipo.controller';
import { CuracionService } from './services/curacion.service';
import { CuracionAreaService } from './services/curacion-area.service';
import { CuracionNombreService } from './services/curacion-nombre.service';
import { CuracionMotivoService } from './services/curacion-motivo.service';
import { CuracionTipoService } from './services/curacion-tipo.service';
import { TipoMedicamentoSchema } from './schemas/tipo-medicamento.schema';
import { TipoMedicamentoController } from './controllers/tipo-medicamento.controller';
import { TipoMedicamentoService } from './services/tipo-medicamento.service';
import { AnalisisMedicoSchema } from './schemas/analisis-medico.schema';
import { AnalisisMedicoController } from './controllers/analisis-medico.controller';
import { AnalisisMedicoService } from './services/analisis-medico.service';
import { GrupoAnalisisMedicosSchema } from './schemas/grupo-analisis-medicos.schema';
import { GrupoAnalisisMedicosController } from './controllers/grupo-analisis-medico.controller';
import { GrupoAnalisisMedicosService } from './services/grupo-analisis-medicos.service';

@Module({
  imports: [
    EventsModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '34560s' },
    }),
    MongooseModule.forRoot('mongodb://localhost/ultron', { useNewUrlParser: true }),
    MongooseModule.forFeature([
      { name: 'Acido', schema: AcidoSchema },
      { name: 'AnalisisMedico', schema: AnalisisMedicoSchema },
      { name: 'Aparatologia', schema: AparatologiaSchema },
      { name: 'Area', schema: AreaSchema },
      { name: 'Banco', schema: BancoSchema },
      { name: 'Biopsia', schema: BiopsiaSchema },
      { name: 'Cabina', schema: CabinaSchema },
      { name: 'Cancelacion', schema: CancelacionSchema },
      { name: 'Catalogo', schema: CatalogoSchema },
      { name: 'Cirugia', schema: CirugiaSchema },
      { name: 'Cita', schema: CitaSchema },
      { name: 'ClaveSupervisor', schema: ClaveSupervisorSchema },
      { name: 'Consecutivo', schema: ConsecutivoSchema },
      { name: 'Consulta', schema: ConsultaSchema },
      { name: 'Consultorio', schema: ConsultorioSchema },
      { name: 'Corte', schema: CorteSchema },
      { name: 'Curacion', schema: CuracionSchema },
      { name: 'CuracionArea', schema: CuracionAreaSchema },
      { name: 'CuracionNombre', schema: CuracionNombreSchema },
      { name: 'CuracionMotivo', schema: CuracionMotivoSchema },
      { name: 'CuracionTipo', schema: CuracionTipoSchema },
      { name: 'Dermapen', schema: DermapenSchema },
      { name: 'Empleado', schema: EmpleadoSchema },
      { name: 'Entrada', schema: EntradaSchema },
      { name: 'Especialidad', schema: EspecialidadSchema },
      { name: 'Esquema', schema: EsquemaSchema },
      { name: 'Estetica', schema: EsteticaSchema },
      { name: 'Facial', schema: FacialSchema },
      { name: 'Factura', schema: FacturaSchema },
      { name: 'FormaPago', schema: FormaPagoSchema },
      { name: 'Frecuencia', schema: FrecuenciaSchema },
      { name: 'GrupoAnalisisMedicos', schema: GrupoAnalisisMedicosSchema },
      { name: 'Horario', schema: HorarioSchema },
      { name: 'Laboratorio', schema: LaboratorioSchema },
      { name: 'MaterialEstetica', schema: MaterialEsteticaSchema },
      { name: 'Material', schema: MaterialSchema },
      { name: 'Medio', schema: MedioSchema },
      { name: 'Ocupacion', schema: OcupacionSchema },
      { name: 'Paciente', schema: PacienteSchema },
      { name: 'Pago', schema: PagoSchema },
      { name: 'PagoAnticipado', schema: PagoAnticipadoSchema },
      { name: 'PagoDermatologo', schema: PagoDermatologoSchema },
      { name: 'PagoPatologo', schema: PagoPatologoSchema },
      { name: 'Producto', schema: ProductoSchema },
      { name: 'ProductoComercial', schema: ProductoComercialSchema },
      { name: 'RazonSocial', schema: RazonSocialSchema },
      { name: 'Receta', schema: RecetaSchema },
      { name: 'Rol', schema: RolSchema },
      { name: 'SalaCirugia', schema: SalaCirugiaSchema },
      { name: 'Salida', schema: SalidaSchema },
      { name: 'SesionAnticipada', schema: SesionAnticipadaSchema },
      { name: 'Servicio', schema: ServicioSchema },
      { name: 'Sexo', schema: SexoSchema },
      { name: 'Status', schema: StatusSchema },
      { name: 'Sucursal', schema: SucursalSchema },
      { name: 'TipoCita', schema: TipoCitaSchema },
      { name: 'TipoMedicamento', schema: TipoMedicamentoSchema },
      { name: 'TipoSalida', schema: TipoSalidaSchema },
      { name: 'TipoEstetica', schema: TipoEsteticaSchema },
      { name: 'TipoEntrada', schema: TipoEntradaSchema },
      { name: 'TipoTarjeta', schema: TipoTarjetaSchema },
      { name: 'Tratamiento', schema: TratamientoSchema },
      { name: 'UsoCfdi', schema: UsoCfdiSchema },
    ])
  ],
  controllers: [
    AcidoController,
    AnalisisMedicoController,
    AparatologiaController,
    AreaController,
    BancoController,
    BiopsiaController,
    CabinaController,
    CancelacionController,
    CatalogoController,
    CirugiaController,
    CitaController,
    ClaveSupervisorController,
    ConsecutivoController,
    ConsultaController,
    ConsultorioController,
    CorteController,
    CuracionController,
    CuracionAreaController,
    CuracionNombreController,
    CuracionMotivoController,
    CuracionTipoController,
    DermapenController,
    EmpleadoController,
    EntradaController,
    EspecialidadController,
    EsquemaController,
    EsteticaController,
    FacialController,
    FacturaController,
    FormaPagoController,
    FrecuenciaController,
    GrupoAnalisisMedicosController,
    HorarioController,
    LaboratorioController,
    MaterialEsteticaController,
    MaterialController,
    MedioController,
    OcupacionController,
    PacienteController,
    PagoController,
    PagoAnticipadoController,
    PagoDermatologoController,
    PagoPatologoController,
    ProductoController,
    ProductoComercialController,
    RazonSocialController,
    RecetaController,
    RolController,
    SalaCirugiaController,
    SalidaController,
    ServicioController,
    SesionAnticipadaController,
    SexoController,
    StatusController,
    SucursalController,
    TipoCitaController,
    TipoMedicamentoController,
    TipoSalidaController,
    TipoEsteticaController,
    TipoEntradaController,
    TipoTarjetaController,
    TratamientoController,
    UsoCfdiController,
  ],
  providers: [
    // SERVICIOS
    AcidoService,
    AnalisisMedicoService,
    AparatologiaService,
    AreaService,
    BancoService,
    BiopsiaService,
    CabinaService,
    CancelacionService,
    CatalogoService,
    CirugiaService,
    CitaService,
    ClaveSupervisorService,
    ConsecutivoService,
    ConsultaService,
    ConsultorioService,
    CorteService,
    CuracionService,
    CuracionAreaService,
    CuracionNombreService,
    CuracionMotivoService,
    CuracionTipoService,
    DermapenService,
    EmpleadoService,
    EntradaService,
    EspecialidadService,
    EsquemaService,
    EsteticaService,
    FacialService,
    FacturaService,
    FormaPagoService,
    FrecuenciaService,
    GrupoAnalisisMedicosService,
    HorarioService,
    LaboratorioService,
    MaterialEsteticaService,
    MaterialService,
    MedioService,
    OcupacionService,
    PacienteService,
    PagoService,
    PagoAnticipadoService,
    PagoDermatologoService,
    PagoPatologoService,
    ProductoService,
    ProductoComercialService,
    RazonSocialService,
    RolService,
    RecetaService,
    SalaCirugiaService,
    SalidaService,
    ServicioService,
    SesionAnticipadaService,
    SexoService,
    StatusService,
    SucursalService,
    TipoCitaService,
    TipoMedicamentoService,
    TipoSalidaService,
    TipoEsteticaService,
    TipoEntradaService,
    TipoTarjetaService,
    TratamientoService,
    UsoCfdiService,
    // WEB SOCKETS
    //AppGateway,
    //EventsGateway,
    // AUTH BY PASSPORT
    AuthService,
    LocalStrategy,
    JwtStrategy,
  ],
})
export class AppModule { }
