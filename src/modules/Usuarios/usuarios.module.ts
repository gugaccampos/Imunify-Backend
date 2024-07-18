import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';

@Module({
    controllers: [UsuariosController],
    providers: [UsuariosService, PrismaService],
})
export class UsuariosModule {}