import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { UsuariosModule } from './modules/Usuarios/usuarios.module';
import { AgendamentosModule } from './modules/Agendamentos/agendamentos.module';

@Module({
  imports: [
    UsuariosModule,
    AgendamentosModule
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
