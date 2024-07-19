import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosDto } from './dto/usuarios.dto';

@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly usuariosService: UsuariosService) {}

    //criar usuario
    @Post()
    async create(@Body() data: UsuariosDto){
        return this.usuariosService.create(data);
    }

    //pegar usuarios      
    @Get('/email/:email')
    async findOne(@Param('email') email: string) {
      return this.usuariosService.findByEmail(email);
    }

    // pegar usuarios por id
    @Get(':id')
    async findOneById(@Param('id') id: string) {
      return this.usuariosService.findById(id);
    }

    //excluir usuarios
    @Delete(':id')
    async remove(@Param('id') id: string) {
      return this.usuariosService.remove(id);
    }

    //update usuarios
    @Put(":id")
    async update(@Param('id') id: string, @Body() data:UsuariosDto) {
      return this.usuariosService.update(id, data);
    }
    

}