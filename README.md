# EPI_release

## Sobre o Projeto
O projeto é uma API desenvolvida para gerenciar a liberação de Equipamentos de Proteção Individual (EPIs) para colaboradores. A plataforma permite que os usuários (administradores) cadastrem colaboradores, associando a eles informações individuais, como nome, função, data de admissão e empresa. Cada colaborador tem uma ficha única onde são registrados os detalhes de todos os EPIs liberados, incluindo data, tipo de EPI e detalhes específicos. Além disso, a API mantém um catálogo de itens que podem ser liberados como EPIs, facilitando o processo de liberação.

## Tecnologias Utilizadas
Aqui estão as principais tecnologias utilizadas no desenvolvimento do projeto, conforme o arquivo package.json:
<ul>
<li>Prisma: Um ORM (Object-Relational Mapping) que facilita o acesso e manipulação do banco de dados MySQL.</li>
<li>Express: Um framework web para Node.js que simplifica a criação de APIs e gerenciamento de rotas.</li>
<li>dotenv: Uma biblioteca para carregar variáveis de ambiente a partir de um arquivo .env, mantendo as informações sensíveis seguras.</li>
<li>cors: Um middleware para habilitar as configurações de CORS (Cross-Origin Resource Sharing) e controlar a segurança das solicitações HTTP.</li>
<li>yup: Uma biblioteca para validação de dados, garantindo que os dados de entrada atendam aos critérios definidos.</li>
<li>jsonwebtoken: Uma ferramenta para geração e verificação de tokens JWT (JSON Web Tokens), usados para autenticação segura.</li>
<li>bcryptjs: Uma biblioteca para a criptografia de senhas, mantendo a segurança das informações de autenticação.</li>
<li>Jest: Um framework de testes em JavaScript para testar unidades de código com assertivas, mocks e mais.</li>
</ul>

<p>Essas tecnologias foram escolhidas para criar uma API robusta e segura, garantindo o gerenciamento eficiente de EPIs e colaboradores, bem como a autenticação segura dos usuários. O projeto utiliza o Prisma para interagir com o banco de dados MySQL, Express para criar as rotas da API e várias outras bibliotecas complementares para garantir a funcionalidade e segurança adequadas. A validação de dados é realizada usando a biblioteca Yup, e o Jest é empregado para testar unidades de código, garantindo a qualidade do software desenvolvido.</p>

## STATUS 🖥️
 In Development  🚀
