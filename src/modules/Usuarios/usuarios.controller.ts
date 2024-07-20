import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosDto } from './dto/usuarios.dto';

@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly usuariosService: UsuariosService) {}

    //criar usuario
    @Post()
    async create(@Body() data: UsuariosDto){
        console.log(data)
        console.log(data.email)
        return this.usuariosService.create(data);
    }

    //pegar usuarios      
    @Get('/login/:email/:senha')
    async findByLogin(@Param('email') email: string, @Param('senha') senha: string) {
      return this.usuariosService.findByLogin(email, senha);
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