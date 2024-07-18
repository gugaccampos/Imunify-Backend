import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { AgendamentosController } from './agendamentos.controller';
import { AgendamentosService } from './agendamentos.service';

@Module({
    controllers: [AgendamentosController],
    providers: [AgendamentosService, PrismaService],
})
export class AgendamentosModule {}