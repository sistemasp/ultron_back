import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AcidoController } from './controllers/acido.controller';
import { AparatologiaController } from './controllers/aparatolgia.controller';
import { AreaController } from './controllers/area.controller';
import { BancoController } from './controllers/banco.controller';
import { BiopsiaController } from './controllers/biopsia.controller';
import { CabinaController } from './controllers/cabina.controller';
import { CancelacionController } from './controllers/cancelacion.controller';
import { CirugiaController } from './controllers/cirugia.controller';
import { ClaveSupervisorController } from './controllers/clave-supervisor.controller';
import { ConsecutivoController } from './controllers/consecutivo.controller';
import { ConsultaController } from './controllers/consulta.controller';
import { ConsultorioController } from './controllers/consultorio.controller';
import { CorteController } from './controllers/corte.controller';
import { DermapenController } from './controllers/dermapen.controller';
import { EgresoController } from './controllers/egreso.controller';
import { EmpleadoController } from './controllers/empleado.controller';
import { EsquemaController } from './controllers/esquema.controller';
import { EsteticaController } from './controllers/estetica.controller';
import { FacialController } from './controllers/facial.controller';
import { FacturaController } from './controllers/factura.controller';
import { FormaPagoController } from './controllers/forma-pago.controller';
import { FrecuenciaController } from './controllers/frecuencia.controller';
import { HorarioController } from './controllers/horario.controller';
import { IngresoController } from './controllers/ingreso.controller';
import { MaterialEsteticaController } from './controllers/material-estetica.controller';
import { MaterialController } from './controllers/material.controller';
import { MedioController } from './controllers/medio.controller';
import { PacienteController } from './controllers/paciente.controller';
import { PagoDermatologoController } from './controllers/pago-dermatologo.controller';
import { PagoPatologoController } from './controllers/pago-patologo.controller';
import { PagoController } from './controllers/pago.controller';
import { ProductoController } from './controllers/producto.controller';
import { RazonSocialController } from './controllers/razon-social.controller';
import { RolController } from './controllers/rol.controller';
import { SalaCirugiaController } from './controllers/sala-cirugia.controller';
import { ServicioController } from './controllers/servicio.controller';
import { SexoController } from './controllers/sexo.controller';
import { StatusController } from './controllers/status.controller';
import { SucursalController } from './controllers/sucursal.controller';
import { TipoCitaController } from './controllers/tipo-cita.controller';
import { TipoEgresoController } from './controllers/tipo-egreso.controller';
import { TipoEsteticaController } from './controllers/tipo-estetica.controller';
import { TipoIngresoController } from './controllers/tipo-ingreso.controller';
import { TipoTarjetaController } from './controllers/tipo-tarjeta.controller';
import { TratamientoPrecioController } from './controllers/tratamiento-precio.controller';
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
import { CirugiaSchema } from './schemas/cirugia.schema';
import { ClaveSupervisorSchema } from './schemas/clave-supervisor.schema';
import { ConsecutivoSchema } from './schemas/consecutivo.schema';
import { ConsultaSchema } from './schemas/consulta.schema';
import { ConsultorioSchema } from './schemas/consultorio.schema';
import { CorteSchema } from './schemas/corte.schema';
import { DermapenSchema } from './schemas/dermapen.schema';
import { EgresoSchema } from './schemas/egreso.schema';
import { EmpleadoSchema } from './schemas/empleado.schema';
import { EsquemaSchema } from './schemas/esquema.schema';
import { EsteticaSchema } from './schemas/estetica.schema';
import { FacialSchema } from './schemas/facial.schema';
import { FacturaSchema } from './schemas/factura.schema';
import { FormaPagoSchema } from './schemas/forma-pago.schema';
import { FrecuenciaSchema } from './schemas/frecuencia.schema';
import { HorarioSchema } from './schemas/horario.schema';
import { IngresoSchema } from './schemas/ingreso.schema';
import { MaterialEsteticaSchema } from './schemas/material-estetica.schema';
import { MaterialSchema } from './schemas/material.schema';
import { MedioSchema } from './schemas/medio.schema';
import { PacienteSchema } from './schemas/paciente.schema';
import { PagoDermatologoSchema } from './schemas/pago-dermatologo.schema';
import { PagoPatologoSchema } from './schemas/pago-patologo.schema';
import { PagoSchema } from './schemas/pago.schema';
import { ProductoSchema } from './schemas/producto.schema';
import { RazonSocialSchema } from './schemas/razon-social.schema';
import { RolSchema } from './schemas/rol.schema';
import { SalaCirugiaSchema } from './schemas/sala-cirugia.schema';
import { ServicioSchema } from './schemas/servicio.schema';
import { SexoSchema } from './schemas/sexo.schema';
import { StatusSchema } from './schemas/status.schema';
import { SucursalSchema } from './schemas/sucursal.schema';
import { TipoCitaSchema } from './schemas/tipo-cita.schema';
import { TipoEgresoSchema } from './schemas/tipo-egreso.schema';
import { TipoEsteticaSchema } from './schemas/tipo-estetica.schema';
import { TipoIngresoSchema } from './schemas/tipo-ingreso.schema';
import { TipoTarjetaSchema } from './schemas/tipo-tarjeta.schema';
import { TratamientoPrecioSchema } from './schemas/tratamiento-precio.schema';
import { TratamientoSchema } from './schemas/tratamiento.schema';
import { UsoCfdiSchema } from './schemas/uso-cfdi.schema';
import { AcidoService } from './services/acido.service';
import { AparatologiaService } from './services/aparatologia.service';
import { AreaService } from './services/area.service';
import { BancoService } from './services/banco.service';
import { BiopsiaService } from './services/biosia.service';
import { CabinaService } from './services/cabina.service';
import { CancelacionService } from './services/cancelacion.service';
import { CirugiaService } from './services/cirugia.service';
import { ClaveSupervisorService } from './services/clave-supervisor.service';
import { ConsecutivoService } from './services/consecutivo.service';
import { ConsultaService } from './services/consulta.service';
import { ConsultorioService } from './services/consultorio.service';
import { CorteService } from './services/corte.service';
import { DermapenService } from './services/dermapen.service';
import { EgresoService } from './services/egreso.service';
import { EmpleadoService } from './services/empleado.service';
import { EsquemaService } from './services/esquema.service';
import { EsteticaService } from './services/estetica.service';
import { FacialService } from './services/facial.service';
import { FacturaService } from './services/factura.service';
import { FormaPagoService } from './services/forma-pago.service';
import { FrecuenciaService } from './services/frecuencia.service';
import { HorarioService } from './services/horario.service';
import { IngresoService } from './services/ingreso.service';
import { MaterialEsteticaService } from './services/material-estetica.service';
import { MaterialService } from './services/material.service';
import { MedioService } from './services/medio.service';
import { PacienteService } from './services/paciente.service';
import { PagoDermatologoService } from './services/pago-dermatologo.service';
import { PagoPatologoService } from './services/pago-patologo.service';
import { PagoService } from './services/pago.service';
import { ProductoService } from './services/producto.service';
import { RazonSocialService } from './services/razon-social.service';
import { RolService } from './services/rol.service';
import { SalaCirugiaService } from './services/sala-cirugia.service';
import { ServicioService } from './services/servicio.service';
import { SexoService } from './services/sexo.service';
import { StatusService } from './services/status.service';
import { SucursalService } from './services/sucursal.service';
import { TipoCitaService } from './services/tipo-cita.service';
import { TipoEgresoService } from './services/tipo-egreso.service';
import { TipoEsteticaService } from './services/tipo-estetica.service';
import { TipoIngresoService } from './services/tipo-ingreso.service';
import { TipoTarjetaService } from './services/tipo-tarjeta.service';
import { TratamientoPrecioService } from './services/tratamiento-precio.service';
import { TratamientoService } from './services/tratamiento.service';
import { UsoCfdiService } from './services/uso-cfdi.service';
import { AppGateway } from './web_sockets/app.gateway';

@Module({
  imports: [
    EventsModule,
    MongooseModule.forRoot('mongodb://localhost/ultron', { useNewUrlParser: true }),
    MongooseModule.forFeature([
      { name: 'Acido', schema: AcidoSchema },
      { name: 'Aparatologia', schema: AparatologiaSchema },
      { name: 'Area', schema: AreaSchema },
      { name: 'Banco', schema: BancoSchema },
      { name: 'Biopsia', schema: BiopsiaSchema },
      { name: 'Cabina', schema: CabinaSchema },
      { name: 'Cancelacion', schema: CancelacionSchema },
      { name: 'Cirugia', schema: CirugiaSchema },
      { name: 'ClaveSupervisor', schema: ClaveSupervisorSchema },
      { name: 'Consecutivo', schema: ConsecutivoSchema },
      { name: 'Consulta', schema: ConsultaSchema },
      { name: 'Consultorio', schema: ConsultorioSchema },
      { name: 'Corte', schema: CorteSchema },
      { name: 'Dermapen', schema: DermapenSchema },
      { name: 'Egreso', schema: EgresoSchema },
      { name: 'Empleado', schema: EmpleadoSchema },
      { name: 'Esquema', schema: EsquemaSchema },
      { name: 'Estetica', schema: EsteticaSchema },
      { name: 'Facial', schema: FacialSchema },
      { name: 'Factura', schema: FacturaSchema },
      { name: 'FormaPago', schema: FormaPagoSchema },
      { name: 'Frecuencia', schema: FrecuenciaSchema },
      { name: 'Horario', schema: HorarioSchema },
      { name: 'Ingreso', schema: IngresoSchema },
      { name: 'MaterialEstetica', schema: MaterialEsteticaSchema },
      { name: 'Material', schema: MaterialSchema },
      { name: 'Medio', schema: MedioSchema },
      { name: 'Paciente', schema: PacienteSchema },
      { name: 'Pago', schema: PagoSchema },
      { name: 'PagoDermatologo', schema: PagoDermatologoSchema },
      { name: 'PagoPatologo', schema: PagoPatologoSchema },
      { name: 'Producto', schema: ProductoSchema },
      { name: 'RazonSocial', schema: RazonSocialSchema },
      { name: 'Rol', schema: RolSchema },
      { name: 'SalaCirugia', schema: SalaCirugiaSchema },
      { name: 'Servicio', schema: ServicioSchema },
      { name: 'Sexo', schema: SexoSchema },
      { name: 'Status', schema: StatusSchema },
      { name: 'Sucursal', schema: SucursalSchema },
      { name: 'TipoCita', schema: TipoCitaSchema },
      { name: 'TipoEgreso', schema: TipoEgresoSchema },
      { name: 'TipoEstetica', schema: TipoEsteticaSchema },
      { name: 'TipoIngreso', schema: TipoIngresoSchema },
      { name: 'TipoTarjeta', schema: TipoTarjetaSchema },
      { name: 'Tratamiento', schema: TratamientoSchema },
      { name: 'TratamientoPrecio', schema: TratamientoPrecioSchema },
      { name: 'UsoCfdi', schema: UsoCfdiSchema },
    ])
  ],
  controllers: [
    AcidoController,
    AparatologiaController,
    AreaController,
    BancoController,
    BiopsiaController,
    CabinaController,
    CancelacionController,
    CirugiaController,
    ClaveSupervisorController,
    ConsecutivoController,
    ConsultaController,
    ConsultorioController,
    CorteController,
    DermapenController,
    EgresoController,
    EmpleadoController,
    EsquemaController,
    EsteticaController,
    FacialController,
    FacturaController,
    FormaPagoController,
    FrecuenciaController,
    HorarioController,
    IngresoController,
    MaterialEsteticaController,
    MaterialController,
    MedioController,
    PacienteController,
    PagoController,
    PagoDermatologoController,
    PagoPatologoController,
    ProductoController,
    RazonSocialController,
    RolController,
    SalaCirugiaController,
    ServicioController,
    SexoController,
    StatusController,
    SucursalController,
    TipoCitaController,
    TipoEgresoController,
    TipoEsteticaController,
    TipoIngresoController,
    TipoTarjetaController,
    TratamientoController,
    TratamientoPrecioController,
    UsoCfdiController,
  ],
  providers: [
    // SERVICIOS
    AcidoService,
    AparatologiaService,
    AreaService,
    BancoService,
    BiopsiaService,
    CabinaService,
    CancelacionService,
    CirugiaService,
    ClaveSupervisorService,
    ConsecutivoService,
    ConsultaService,
    ConsultorioService,
    CorteService,
    DermapenService,
    EgresoService,
    EmpleadoService,
    EsquemaService,
    EsteticaService,
    FacialService,
    FacturaService,
    FormaPagoService,
    FrecuenciaService,
    HorarioService,
    IngresoService,
    MaterialEsteticaService,
    MaterialService,
    MedioService,
    PacienteService,
    PagoService,
    PagoDermatologoService,
    PagoPatologoService,
    ProductoService,
    RazonSocialService,
    RolService,
    SalaCirugiaService,
    ServicioService,
    SexoService,
    StatusService,
    SucursalService,
    TipoCitaService,
    TipoEgresoService,
    TipoEsteticaService,
    TipoIngresoService,
    TipoTarjetaService,
    TratamientoService,
    TratamientoPrecioService,
    UsoCfdiService,
    // WEB SOCKETS
    // AppGateway,
  ],
})
export class AppModule { }
