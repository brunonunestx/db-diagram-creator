Um monorepo moderno para aplicação com API NestJS e frontend React/Vite.

## 🚀 Stack Tecnológica

### Backend (API)

- **NestJS** - Framework Node.js
- **Prisma** - ORM para banco de dados
- **PostgreSQL** - Banco de dados
- **Swagger** - Documentação da API

### Frontend (Web)

- **React** - Biblioteca UI
- **Vite** - Build tool e dev server
- **Tailwind CSS v4** - Framework CSS utilitário
- **React Router** - Roteamento

### DevOps & Tools

- **Turborepo** - Monorepo management
- **TypeScript** - Tipagem estática
- **ESLint** - Linting
- **Prettier** - Formatação de código

## 📋 Pré-requisitos

- **Node.js** >= 18
- **Yarn** (Package manager)
- **PostgreSQL** (para a API)

## 🔧 Configuração do Ambiente

### 1. Clone o repositório

```bash
git clone <repository-url>
cd player-music
```

### 2. Instale as dependências

```bash
yarn install
```

### 3. Configure o banco de dados (API)

```bash
# Copie o arquivo de exemplo
cp apps/api/.env.example apps/api/.env

# Edite o arquivo .env com suas configurações
# DATABASE_URL="postgresql://username:password@localhost:5432/player_music"
# API_URL="http://localhost"
# PORT=3000
```

### 4. Execute as migrações do banco

```bash
cd apps/api
npx prisma migrate dev
npx prisma generate
```

## 🚀 Como Rodar o Projeto

### Desenvolvimento - Ambos os serviços

```bash
# Roda API e Web simultaneamente
yarn dev
```

### Desenvolvimento - Serviços individuais

```bash
# Apenas a API (porta 3030)
yarn dev:api

# Apenas o Web (porta 5173)
yarn dev:web
```

### Build para produção

```bash
# Build de todos os apps
yarn build

# Build de um app específico
yarn build --filter=api
yarn build --filter=web
```

## 📁 Estrutura do Projeto

```
monorepo/
├── apps/
│   ├── api/                 # Backend NestJS
│   │   ├── src/
│   │   ├── prisma/
│   │   └── .env
│   └── web/                 # Frontend React
│       ├── src/
│       ├── public/
│       └── tailwind.config.js
├── packages/
│   ├── eslint-config/       # Configurações ESLint compartilhadas
│   ├── typescript-config/   # Configurações TypeScript compartilhadas
│   └── ui/                  # Componentes UI compartilhados
└── turbo.json              # Configuração do Turborepo
```

## 🔗 URLs de Desenvolvimento

- **API:** http://localhost:3000
- **Swagger Docs:** http://localhost:3000/docs
- **Web App:** http://localhost:5173

## 🛠 Scripts Disponíveis

```bash
# Desenvolvimento
yarn dev                    # Roda todos os apps
yarn dev:api               # Roda apenas a API
yarn dev:web               # Roda apenas o Web

# Build
yarn build                 # Build de todos os apps
yarn build --filter=api    # Build apenas da API
yarn build --filter=web    # Build apenas do Web

# Linting e Formatação
yarn lint                  # Executa linting em todos os apps
yarn format                # Formata código com Prettier
yarn check-types           # Verifica tipos TypeScript

# Banco de dados (dentro de apps/api)
npx prisma migrate dev     # Executa migrações
npx prisma generate        # Gera o cliente Prisma
npx prisma studio          # Interface visual do banco
```

## 📊 Banco de Dados

Este projeto utiliza **PostgreSQL** com **Prisma** como ORM.

### Comandos úteis:

```bash
cd apps/api

# Criar nova migração
npx prisma migrate dev --name nome_da_migracao

# Resetar banco (cuidado em produção!)
npx prisma migrate reset

# Visualizar dados
npx prisma studio
```

## 🎨 Estilização

O projeto utiliza **Tailwind CSS v4** para estilização. As configurações estão em:

- `apps/web/postcss.config.js`

### Exemplo de uso:

```tsx
<button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
  Botão estilizado
</button>
```

## 📚 Documentação da API

A documentação da API está disponível via Swagger em:
**http://localhost:3000/docs** (quando a API estiver rodando)

## 🔄 Fluxo de Desenvolvimento

1. **Clone** o repositório
2. **Instale** dependências com `yarn install`
3. **Configure** as variáveis de ambiente
4. **Execute** migrações do banco
5. **Inicie** o desenvolvimento com `yarn dev`
6. **Desenvolva** suas features
7. **Teste** e **commit** suas alterações

## 🚀 Deploy

### API (Backend)

1. Configure as variáveis de ambiente de produção
2. Execute `yarn build --filter=api`
3. Deploy conforme sua plataforma (Heroku, Railway, etc.)

### Web (Frontend)

1. Execute `yarn build --filter=web`
2. Deploy os arquivos da pasta `apps/web/dist`
3. Configure seu servidor web (Vercel, Netlify, etc.)

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).

---

**Desenvolvido com ❤️ usando Turborepo, NestJS e React**
