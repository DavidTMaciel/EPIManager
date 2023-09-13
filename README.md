# EPIManager - Gerenciador de Liberação de Equipamento de Proteção Individual (EPI)

## Sobre o Projeto

O EPIManager é uma API desenvolvida para facilitar o gerenciamento da liberação de Equipamentos de Proteção Individual (EPIs) para colaboradores em ambientes de trabalho. Esta plataforma permite que os administradores cadastrem colaboradores, associando informações individuais, como nome, função, data de admissão e empresa. Cada colaborador possui uma ficha única onde são registrados detalhes sobre os EPIs liberados, incluindo data, tipo de EPI e informações específicas. Além disso, a API mantém um catálogo de itens que podem ser liberados como EPIs, simplificando o processo de liberação e garantindo a segurança dos funcionários.

## Tecnologias Utilizadas

Aqui estão as principais tecnologias utilizadas no desenvolvimento do projeto, conforme especificado no arquivo `package.json`:

- **Prisma**: Um ORM (Object-Relational Mapping) que simplifica o acesso e a manipulação do banco de dados MySQL.
- **Fastify**: Um framework web extremamente eficiente e de alto desempenho para Node.js, projetado para simplificar a criação de APIs com velocidade e eficiência impressionantes.
- **dotenv**: Uma biblioteca para carregar variáveis de ambiente a partir de um arquivo `.env`, mantendo as informações sensíveis seguras.
- **cors**: Um middleware para habilitar configurações de CORS (Cross-Origin Resource Sharing) e controlar a segurança das solicitações HTTP.
- **yup**: Uma biblioteca para validação de dados, garantindo que os dados de entrada atendam aos critérios definidos.
- **jsonwebtoken**: Uma ferramenta para geração e verificação de tokens JWT (JSON Web Tokens), usados para autenticação segura.
- **bcrypt**: Uma biblioteca para criptografia de senhas, mantendo a segurança das informações de autenticação.
- **Jest**: Um framework de testes em JavaScript para testar unidades de código com assertivas, mocks e mais.
- **axios**: Uma biblioteca para realizar requisições HTTP.
- **uuid**: Uma biblioteca para geração de identificadores únicos.
- **pg**: Um driver para PostgreSQL.
- **pg-mem**: Uma biblioteca para criação de bancos de dados temporários em memória.
- **@fastify/static**: Um plugin Fastify para servir arquivos estáticos.
- **@fastify/swagger**: Um plugin Fastify para geração de documentação Swagger.
- **@fastify/swagger-ui**: Um plugin Fastify para visualização da documentação Swagger.
- **@babel/preset-env**: Um preset Babel para ambiente de desenvolvimento.
- **@babel/register**: Uma biblioteca para registro de Babel.
- **chance**: Uma biblioteca para geração de dados aleatórios.
- **jquery**: Uma biblioteca JavaScript para manipulação de documentos HTML.
- **@faker-js/faker**: Uma biblioteca para geração de dados falsos para testes.

## Documentação de Rotas

A documentação das rotas da API está disponível através do Swagger. Você pode acessar a documentação [aqui](URL_DO_SWAGGER).

## Como Iniciar o Projeto e Instalação

Para começar a utilizar o EPIManager em seu projeto, siga estas etapas:

1. **Clonagem do Repositório**: Clone este repositório em sua máquina local utilizando o seguinte comando:

   ```bash
   git clone https://github.com/DavidTMaciel/EPIManager.git

2. **Instalação de Dependências**: Navegue até o diretório do projeto:

   ```bash
   cd EPIManager
3. **Instalação de Dependências**: Instale as dependencias:
   ```bash
   yarn install
4. **Configuração do Ambiente**: Certifique-se de configurar as variáveis de ambiente necessárias no arquivo `.env` com suas informações sensíveis antes de prosseguir.

5. **Execução da Aplicação**
Para iniciar o servidor, execute o seguinte comando:
   ```bash
   yarn start
## Execução dos Testes

Para executar os testes e garantir a qualidade do código, siga as etapas abaixo:

1. Certifique-se de que as dependências de desenvolvimento estejam instaladas executando:

   ```bash
   yarn install --dev
2. Execute os testes usando o seguinte comando:
   ```bash
   yarn test
3. Isso iniciará a execução dos testes automatizados usando o framework Jest. Certifique-se de que os testes sejam bem-sucedidos antes de implantar ou contribuir para o projeto.
## Cobertura de Testes:
  Você pode verificar a cobertura de testes do projeto executando o seguinte comando:
  ```bash
  yarn test --coverage

Isso gerará um relatório de cobertura que você pode visualizar no seu ambiente de desenvolvimento. Geralmente, o relatório de cobertura é gerado em uma pasta como coverage/ ou similar.

