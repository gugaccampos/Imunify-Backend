<p align="center">
  <b>VACINE-SE Backend</b> é o meu servidor do desafio do curso React/Node oferecido pela Pitang.
</p>

## Sobre o Projeto

Diante do cenário atual, existe uma demanda gigante de pessoas para tomar a vacina
para o COVID-19. E com isso nossa cidade está precisando de um simples sistema para
realizar os agendamentos. O processo consiste na criação de um portal onde será
possível agendar pacientes para tomar a vacina, construir uma página para consulta dos
agendamentos feitos por dia e horário.

### Como Rodar

1. Clone o repositório
   ```sh
   git clone https://github.com/gugaccampos/Imunify-Backend.git

2. Instale as dependências
   ```sh
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto e preencha as variáveis de ambiente para o banco de dados.

4. Execute as migrations do Prisma
   ```sh
   npx prisma migrate dev
   ```

5. Execute o projeto
   ```sh
    npm start
    ```

Para visualizar os dados do banco de dados, você pode usar o Prisma Studio. Para isso, execute o seguinte comando:

```sh
npx prisma studio
```

Para visualizar a documentação da API, acesse `http://localhost:3000/api`.