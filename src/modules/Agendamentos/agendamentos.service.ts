import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { AgendamentosDto } from './dto/agendamentos.dto';

@Injectable()
export class AgendamentosService {
    constructor(private prisma: PrismaService) {}

    existeId (id: string){
        
      return this.prisma.agendamentos.findFirst({
        where: {
          id: id
        }
      })
    }

    existeUS (idUs: string){
        
      return this.prisma.agendamentos.findFirst({
        where: {
          idUsuario: idUs
        }
      })
    }

    async create(data: AgendamentosDto) {

        //verificando se o agendamento já existe
       
        const agendamentosExiste = await this.existeId(data.id);
    
        if (agendamentosExiste) {
          throw new Error('Não é possível criar o mesmo agendamento.')
        }
        
        const agendamentos = await this.prisma.agendamentos.create({
          data
        })        
    
        return agendamentos;
      }

    async findAll() {
      console.log('entrou')
      const todos = await this.prisma.agendamentos.findMany();
      return todos;
      }

    async findByUser(idUs: string) {
        console.log('entrou2')
        const agendamentosExiste = await this.existeUS(idUs);
    
        if (!agendamentosExiste) {
          throw new Error('Agendamento que não encontrado.')
        }
    
        return this.prisma.agendamentos.findMany({
            where:{
              idUsuario: idUs
            }
          });
      }

    async remove(idAg: string) {
        const agendamentosExiste = await this.existeId(idAg);

        if (!agendamentosExiste) {
          throw new Error('Agendamento que não encontrado.')
        }

        const id = (await agendamentosExiste).id; 
    
        return await this.prisma.agendamentos.delete({
          where: {
            id,
          }
        })
    
    }

    async update(idAg:string, data: AgendamentosDto) {
      const agendamentosExiste = await this.existeId(idAg);
  
      if (!agendamentosExiste) {
        throw new Error('Agendamento que não encontrado.')
      }
      
      const id = (await agendamentosExiste).id;

      return await this.prisma.agendamentos.update({
        data,
        where: { 
          id,
         },
      })
    }

}