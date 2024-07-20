import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AgendamentosService } from './agendamentos.service';
import { AgendamentosDto } from './dto/agendamentos.dto';

@Controller('Agendamentos')
export class AgendamentosController {
    constructor(private readonly agendamentosService: AgendamentosService) {}

    //criar agendamento
    @Post()
    async create(@Body() data: AgendamentosDto){
        return this.agendamentosService.create(data);
    }

    // pegar agendamento por id
    @Get('/todos')
    async findAll() {
      return this.agendamentosService.findAll();
    }

    // pegar agendamentos du usuario
    @Get('/usuarios/:idUsuario')
    async findByUser(@Param('idUsuario') idUsuario: string) {
      return this.agendamentosService.findByUser(idUsuario);
    }

    //excluir agendamento
    @Delete(':id')
    async remove(@Param('id') id: string) {
      return this.agendamentosService.remove(id);
    }

    //update agendamento
    @Put(":id")
    async update(@Param('id') id: string, @Body() data:AgendamentosDto) {
      return this.agendamentosService.update(id, data);
    }

}