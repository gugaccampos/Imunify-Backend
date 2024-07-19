import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UsuariosDto } from './dto/usuarios.dto';

@Injectable()
export class UsuariosService {
    constructor(private prisma: PrismaService) {}

    existeEmail (email: string){
        
      return this.prisma.usuarios.findFirst({
        where: {
          email: email
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
       
        const usuariosExiste = await this.existeEmail(data.email);
    
        if (usuariosExiste) {
          throw new Error('Não é possível criar o mesmo usuarios.')
        }
    
        const usuarios = await this.prisma.usuarios.create({
          data
        })        
    
        return usuarios;
      }

    async findById(id: string) {
        const usuariosExiste = await this.existeId(id);
    
        if (!usuariosExiste) {
          throw new Error('Não é possível encontrar um usuarios que NÃO EXISTE.')
        }
    
        return usuariosExiste;
      }

    async findByEmail(email: string) {
        const usuariosExiste = await this.existeEmail(email);
  
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