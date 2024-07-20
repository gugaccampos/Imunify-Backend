import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UsuariosDto } from './dto/usuarios.dto';

@Injectable()
export class UsuariosService {
    constructor(private prisma: PrismaService) {}

    existeEmail (email: string, senha: string){
        
      return this.prisma.usuarios.findFirst({
        where: {
          email: email,
          senha: senha
        }
      })
    }

    existeId (id: string){
        
      return this.prisma.usuarios.findFirst({
        where: {
          id: id
        }
      })
    }

    async create(data: UsuariosDto) {

        //verificando se usuarios já existe
        console.log(data)
        console.log(data.email)
       
        const usuariosExiste = await this.existeEmail(data.email, data.senha);
        console.log(usuariosExiste)
        console.log(data.nascimento)
    
        if (usuariosExiste) {
          throw new Error('Não é possível criar o mesmo usuarios.')
        }
    
        const usuarios = await this.prisma.usuarios.create({
          data
        })
        console.log(usuarios)
        return usuarios;
      }

    async findById(id: string) {
        const usuariosExiste = await this.existeId(id);
    
        if (!usuariosExiste) {
          throw new Error('Não é possível encontrar um usuarios que NÃO EXISTE.')
        }
    
        return usuariosExiste;
      }

    async findByLogin(email: string, senha: string) {
        const usuariosExiste = await this.existeEmail(email, senha);
  
        if (!usuariosExiste) {
          throw new Error('Não é possível encontrar um usuarios que NÃO EXISTE.')
        }
  
        return usuariosExiste;
      }

    async remove(idUs: string) {
        const usuariosExiste = await this.existeId(idUs);

        if (!usuariosExiste) {
          throw new Error('Não é possível remover um usuarios que NÃO EXISTE.')
        }

        const id = usuariosExiste.id; 
    
        return await this.prisma.usuarios.delete({
          where: {
            id,
          }
        })
    
    }

    async update(idUs:string, data: UsuariosDto) {
      const usuariosExiste = await this.existeId(idUs);
  
      if (!usuariosExiste) {
        throw new Error('Não é possível atualizar um usuarios que NÃO EXISTE.')
      }
      
      const id = usuariosExiste.id;

      return await this.prisma.usuarios.update({
        data,
        where: { 
          id,
         },
      })
  
      
    }
}