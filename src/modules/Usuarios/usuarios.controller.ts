import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosDto } from './dto/usuarios.dto';

@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly usuariosService: UsuariosService) {}

    

}