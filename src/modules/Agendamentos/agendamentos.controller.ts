import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AgendamentosService } from './agendamentos.service';
import { AgendamentosDto } from './dto/agendamentos.dto';

@Controller('Agendamentos')
export class AgendamentosController {
    constructor(private readonly agendamentosService: AgendamentosService) {}

    

}